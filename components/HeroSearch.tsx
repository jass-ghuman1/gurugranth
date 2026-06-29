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

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const [hint, setHint] = useState(false);

  return (
    <section className="relative mx-auto max-w-3xl px-5 pb-10 pt-16 text-center sm:px-8 sm:pt-24">
      {/* Gold arch behind the panel */}
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
            placeholder="Ask about anger, Naam, humility, seva, suffering…"
            aria-label="Search Gurbani"
            className="flex-1 border-b border-bronze/20 bg-transparent px-2 py-2.5 font-serif text-lg text-[var(--ink)] placeholder:italic placeholder:text-bronze/50 focus:border-antiqueGold focus:outline-none"
          />
          <button
            onClick={() => setHint(true)}
            className="whitespace-nowrap rounded bg-gradient-to-b from-[#E6C26A] via-antiqueGold to-deepGold px-7 py-2.5 text-sm font-medium uppercase tracking-wide text-[#3a2a0c] shadow-gold transition-transform hover:-translate-y-0.5"
          >
            Search
          </button>
        </div>
      </div>

      <p className="mt-3 text-xs text-bronze/70">
        Answers are generated only from uploaded source documents.
      </p>
      {hint && (
        <p className="mt-2 text-xs italic text-deepGold">
          The search engine connects to the scripture sources in the next step.
        </p>
      )}

      {/* Example question chips */}
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
    </section>
  );
}
