// Netlify Function: /.netlify/functions/ask
// Receives a question -> embeds it (Cohere) -> finds closest scripture lines
// (Supabase) -> Claude answers ONLY from those lines, with Ang citations.
// All secret keys come from Netlify environment variables — never hard-coded.

const COHERE_KEY = process.env.COHERE_KEY;
const SUPABASE_URL = (process.env.SUPABASE_URL || "").replace(/\/+$/, "");
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
const ANTHROPIC_KEY = process.env.ANTHROPIC_KEY;

const NOT_FOUND = "I could not find this answer in the uploaded source.";

exports.handler = async (event) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") return { statusCode: 200, headers, body: "" };
  if (event.httpMethod !== "POST")
    return { statusCode: 405, headers, body: JSON.stringify({ error: "Use POST" }) };

  if (!COHERE_KEY || !SUPABASE_URL || !SUPABASE_KEY || !ANTHROPIC_KEY) {
    return { statusCode: 500, headers, body: JSON.stringify({
      error: "Server is missing one or more keys. Check Netlify environment variables." }) };
  }

  let question = "";
  try { question = (JSON.parse(event.body || "{}").question || "").trim(); } catch (_) {}
  if (!question)
    return { statusCode: 400, headers, body: JSON.stringify({ error: "No question provided." }) };

  try {
    // 1) Embed the question (search_query mode, 1024 dims to match the table)
    const embRes = await fetch("https://api.cohere.com/v2/embed", {
      method: "POST",
      headers: { Authorization: `Bearer ${COHERE_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "embed-v4.0",
        texts: [question],
        input_type: "search_query",
        embedding_types: ["float"],
        output_dimension: 1024,
      }),
    });
    if (!embRes.ok) throw new Error("Embedding step failed: " + (await embRes.text()).slice(0, 200));
    const embJson = await embRes.json();
    const queryVec = embJson.embeddings.float[0];

    // 2) Find the closest scripture lines via the match_gurbani function
    const matchRes = await fetch(`${SUPABASE_URL}/rest/v1/rpc/match_gurbani`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query_embedding: queryVec, match_count: 12 }),
    });
    if (!matchRes.ok) throw new Error("Database search failed: " + (await matchRes.text()).slice(0, 200));
    const rows = await matchRes.json();

    // Keep only reasonably relevant lines
    const hits = (rows || []).filter((r) => r.similarity >= 0.2);
    if (hits.length === 0) {
      return { statusCode: 200, headers, body: JSON.stringify({
        answer: NOT_FOUND, passages: [], notFound: true }) };
    }

    // 3) Claude answers ONLY from these lines
    const context = hits
      .map((h, i) => `[S${i + 1}] (Ang ${h.ang}) ${h.line}`)
      .join("\n");

    const sys =
      "You are a Gurbani assistant. Answer ONLY from the provided passages, which are lines " +
      "from Sri Guru Granth Sahib. Never use outside knowledge. Never invent or quote any Gurbani " +
      "that is not in the passages. Never invent citations. If the passages do not address the " +
      "question, reply with exactly: " + NOT_FOUND + " Otherwise give a 2 to 4 sentence " +
      "plain-language answer grounded only in these passages, and cite the Ang numbers you drew " +
      "from like (Ang 463). Do not write any Gurmukhi that was not provided.";

    const aiRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": ANTHROPIC_KEY,
        "anthropic-version": "2023-06-01",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 700,
        system: sys,
        messages: [{ role: "user", content: `Question: ${question}\n\nPassages:\n${context}` }],
      }),
    });
    if (!aiRes.ok) throw new Error("Answer step failed: " + (await aiRes.text()).slice(0, 200));
    const aiJson = await aiRes.json();
    const answer = (aiJson.content || [])
      .filter((b) => b.type === "text").map((b) => b.text).join("\n").trim();

    const notFound = !answer || new RegExp(NOT_FOUND, "i").test(answer);

    return { statusCode: 200, headers, body: JSON.stringify({
      answer: answer || NOT_FOUND,
      notFound,
      passages: notFound ? [] : hits.map((h) => ({ ang: h.ang, line: h.line })),
    }) };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: String(err.message || err) }) };
  }
};
