"use client";

import { useState } from "react";

const NAV = ["Home", "Search", "Library", "About"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-bronze/15 bg-ivory/80 backdrop-blur-md shadow-[0_1px_0_rgba(184,137,45,0.28)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <span className="font-gurmukhi text-2xl leading-none text-antiqueGold">ੴ</span>
          <span className="leading-tight">
            <span className="block font-display text-[1.05rem] tracking-wide text-[var(--ink)]">
              Shri Guru Granth Sahib AI
            </span>
            <span className="block text-[0.55rem] uppercase tracking-wide3 text-bronze/70">
              Scripture Library
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item}
              href="#"
              className="group relative text-sm tracking-wide text-bronze/80 transition-colors hover:text-deepGold"
            >
              {item}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-antiqueGold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#"
            className="rounded border border-antiqueGold px-4 py-1.5 text-sm tracking-wide text-deepGold transition-colors hover:bg-antiqueGold hover:text-ivory"
          >
            Admin Login
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-xl text-[var(--ink)] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-bronze/15 bg-ivory px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {NAV.map((item) => (
              <li key={item}>
                <a href="#" className="text-bronze/80 hover:text-deepGold">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="inline-block rounded border border-antiqueGold px-4 py-1.5 text-deepGold"
              >
                Admin Login
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
