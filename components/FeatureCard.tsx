import { Motif } from "./DecorativePattern";

type Props = {
  title: string;
  body: string;
  motif: "lotus" | "scroll" | "vine";
};

export default function FeatureCard({ title, body, motif }: Props) {
  return (
    <article className="relative rounded-[10px] border border-antiqueGold/40 bg-ivory p-7 shadow-card transition-transform hover:-translate-y-1">
      {/* etched corner accents */}
      <span className="pointer-events-none absolute left-2.5 top-2.5 h-5 w-5 rounded-tl-[3px] border-l border-t border-antiqueGold/50" />
      <span className="pointer-events-none absolute bottom-2.5 right-2.5 h-5 w-5 rounded-br-[3px] border-b border-r border-antiqueGold/50" />

      <Motif kind={motif} />
      <div className="my-3 h-px w-12 bg-gradient-to-r from-antiqueGold to-transparent" />
      <h3 className="font-display text-lg text-[var(--ink)]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-bronze/85">{body}</p>
    </article>
  );
}
