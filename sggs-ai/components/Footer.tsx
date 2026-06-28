import { FloralDivider } from "./DecorativePattern";

const LINKS = ["Privacy", "Terms", "Contact"];

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-bronze/15 bg-ivory/60">
      <div className="mx-auto max-w-6xl px-5 py-12 text-center sm:px-8">
        <div className="mb-5 flex justify-center">
          <FloralDivider className="w-44 text-antiqueGold/70" />
        </div>
        <p className="font-display text-lg text-[var(--ink)]">Shri Guru Granth Sahib AI</p>
        <p className="mt-1 font-serif italic text-bronze/75">A respectful scripture search platform.</p>

        <nav className="mt-6 flex items-center justify-center gap-7 text-sm text-bronze/75">
          {LINKS.map((l) => (
            <a key={l} href="#" className="transition-colors hover:text-deepGold">
              {l}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
