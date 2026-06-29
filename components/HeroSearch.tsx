"use client";

import { useState } from "react";
import { ArchFrame } from "./DecorativePattern";

const CHIPS = [
  "What does Guru Sahib say about anger?",
  "What is humility?",
  "Show references to Naam",
  "What is seva?",
  "What does Gurbani say about suffering?",
];

type Passage = { ang: number; line: string };

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState("");
  const [passages, setPassages] = useState<Passage[]>([]);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  async function runSearch() {
    const q = query.trim();
    if (!q || loading) return;
    setLoading(true);
    setError("");
    setAnswer("");
    setPassages([]);
    setSearched(true);
    try {
      const res = await fetch("/.netlify/functions/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setAnswer(data.answer || "");
      setPassages(data.passages || []);
    } catch (e: any) {
      setError(e.message || "Could not reach the search service.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative mx-auto max-w-3xl px-5 pb-10 pt-16 text-center sm:px-8 sm:pt-24">
      <ArchFrame className="pointer-events-none absolute left-1/2 top-10 -z-10 w-[min(620px,108%)] -translate-x-1/2 text-antiqueGold/40" />

      <h1 className="font-display text-[clamp(2rem,5.5vw,3.4rem)] font-normal leading-[1.1] text-[var(--ink)]">
        Search Gurbani with <span className="text-deepGold">Source-Based AI</span>
      </h1>
      <p className="mx-auto mt-4 max-w-xl font-serif text-[clamp(1rem,2.4vw,1.3rem)] italic text-bronze/80">
        Ask questions and receive answers only from uploaded Sikh scripture sources, with citations.
      </p>

      {/* Marble search card */}
      <div className="relative mx-auto mt-9 max-w-2xl rounded-[10px_10px_16px_16px] border border-antiqueGold/45 bg-ivory p-4 shadow-marble sm:p-5">
        <span className="pointer-events-none absolute left-2.5 top-2.5 h-6 w-6 rounded-tl-[3px] border-l border-t border-antiqueGold/60" />
        <span className="pointer-events-none absolute right-2.5 top-2.5 h-6 w-6 rounded-tr-[3px] border-r border-t border-antiqueGold/60" />

        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && runSearch()}
            placeholder="Ask about anger, Naam, humility, seva, suffering…"
            aria-label="Search Gurbani"
            className="flex-1 border-b border-bronze/20 bg-transparent px-2 py-2.5 font-serif text-lg text-[var(--ink)] placeholder:italic placeholder:text-bronze/50 focus:border-antiqueGold focus:outline-none"
          />
          <button
            onClick={runSearch}
            disabled={loading}
            className="whitespace-nowrap rounded bg-gradient-to-b from-[#E6C26A] via-antiqueGold to-deepGold px-7 py-2.5 text-sm font-medium uppercase tracking-wide text-[#3a2a0c] shadow-gold transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            {loading ? "Searching…" : "Search"}
          </button>
        </div>
      </div>

      <p className="mt-3 text-xs text-bronze/70">
        Answers are generated only from uploaded source documents.
      </p>

      {/* Example chips (hidden once a search has run, to keep focus on results) */}
      {!searched && (
        <div className="mt-7 flex flex-wrap justify-center gap-2.5">
          {CHIPS.map((c) => (
            <button
              key={c}
              onClick={() => setQuery(c)}
              className="rounded-full border border-bronze/20 bg-white/60 px-4 py-2 text-sm font-light text-bronze transition-colors hover:border-antiqueGold hover:text-deepGold"
            >
              {c}
            </button>
          ))}
        </div>
      )}

      {/* Results */}
      {loading && (
        <p className="mt-8 font-serif italic text-bronze/70">Searching the scripture…</p>
      )}

      {error && (
        <p className="mx-auto mt-8 max-w-xl rounded-lg border border-dashed border-antiqueGold/50 bg-white/60 p-4 text-sm text-bronze">
          {error}
        </p>
      )}

      {!loading && answer && (
        <div className="mx-auto mt-8 max-w-2xl text-left">
          <article className="rounded-[10px] border border-antiqueGold/45 bg-ivory p-6 shadow-marble">
            <div className="mb-2 text-[0.64rem] uppercase tracking-wide2 text-bronze">Answer</div>
            <p className="font-serif text-lg text-[var(--ink)]">{answer}</p>
          </article>

          {passages.length > 0 && (
            <>
              <p className="mt-7 text-center text-[0.66rem] uppercase tracking-wide2 text-bronze">
                Source passages — Sri Guru Granth Sahib
              </p>
              <div className="mt-3 space-y-3">
                {passages.map((p, i) => (
                  <div
                    key={i}
                    className="rounded-[9px] border border-antiqueGold/40 bg-ivory p-4 shadow-card"
                  >
                    <p className="text-center font-gurmukhi text-xl leading-loose text-[var(--ink)]">
                      {p.line}
                    </p>
                    <div className="mt-3 border-t border-bronze/15 pt-2 text-xs text-bronze/75">
                      Sri Guru Granth Sahib · <span className="font-medium text-bronze">Ang {p.ang}</span>{" "}
                      · <span className="italic">Raag &amp; author: to be confirmed</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}
