const ROWS: [string, string][] = [
  ["Book", "Shri Guru Granth Sahib"],
  ["Ang", "463"],
  ["Raag", "Asa"],
  ["Author", "Guru Nanak Dev Ji"],
];

export default function CitationPreview() {
  return (
    <article className="relative rounded-[10px] border border-antiqueGold/45 bg-ivory p-8 shadow-marble">
      <span className="absolute -top-3 left-6 rounded border border-bronze/20 bg-marble px-3 py-0.5 text-[0.6rem] uppercase tracking-wide2 text-bronze">
        Example Source Citation
      </span>

      <div className="mb-5 h-px w-3/5 bg-gradient-to-r from-antiqueGold to-transparent" />

      <dl className="grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
        {ROWS.map(([k, v]) => (
          <div key={k} className="flex items-center justify-between border-b border-dotted border-bronze/20 pb-1.5">
            <dt className="text-sm tracking-wide text-bronze/70">{k}</dt>
            <dd className="font-serif text-base text-[var(--ink)]">{v}</dd>
          </div>
        ))}
      </dl>

      <p className="mt-5 text-xs italic text-bronze/60">Shown as a visual example only.</p>
    </article>
  );
}
