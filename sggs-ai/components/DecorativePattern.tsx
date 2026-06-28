import React from "react";

/* ----------------------------------------------------------------------------
   Decorative motifs carved in marble & gold — kept deliberately subtle.
   All shapes are line-art SVG using currentColor so callers control the tint.
---------------------------------------------------------------------------- */

type SvgProps = { className?: string };

/** Cusped Sikh-style arch placed behind / around the search panel. */
export function ArchFrame({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 520 300" fill="none" className={className} aria-hidden>
      <path
        d="M30 300 L30 150 Q30 96 70 86 Q96 40 140 64 Q190 22 230 52 Q260 26 300 52 Q340 22 390 64 Q424 40 450 86 Q490 96 490 150 L490 300"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.7"
      />
      <path
        d="M52 300 L52 156 Q52 112 86 104 Q108 66 146 86 Q190 50 230 76 Q260 54 300 76 Q340 50 384 86 Q416 66 438 104 Q468 112 468 156 L468 300"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
      />
      <circle cx="260" cy="20" r="3" fill="currentColor" opacity="0.8" />
      <path d="M260 26 L260 50 M252 38 L268 38" stroke="currentColor" strokeWidth="1" opacity="0.7" />
    </svg>
  );
}

/** A stylised peacock + vine corner ornament. */
export function CornerOrnament({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden>
      {/* vine */}
      <path
        d="M6 116 C6 78 22 54 52 46 C36 58 34 76 48 80 C36 64 58 52 66 66 C58 58 46 70 56 78"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.85"
      />
      <path d="M48 80 q-9 5 -11 14 q9 -2 13 -9 M56 78 q-2 9 2 16 q5 -7 2 -14" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      {/* peacock head + plume */}
      <path d="M52 46 C60 30 76 22 96 20" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <path d="M96 20 q10 -2 16 4 q-7 6 -16 4" stroke="currentColor" strokeWidth="1" opacity="0.7" />
      <circle cx="96" cy="20" r="2.4" fill="currentColor" opacity="0.85" />
      <path d="M70 30 q6 -10 18 -12 M78 38 q5 -9 16 -10" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      {/* small bird */}
      <path d="M30 36 q6 -5 12 0 q-6 2 -12 0" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

/** Floral vine divider used between sections. */
export function FloralDivider({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 240 24" fill="none" className={className ?? "w-56 text-antiqueGold"} aria-hidden>
      <path d="M10 12 H96" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <path d="M144 12 H230" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <path
        d="M120 4 C126 8 126 16 120 20 C114 16 114 8 120 4 Z M120 4 C124 2 130 4 132 8 M120 4 C116 2 110 4 108 8"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.8"
      />
      <circle cx="100" cy="12" r="1.6" fill="currentColor" opacity="0.7" />
      <circle cx="140" cy="12" r="1.6" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

/** Small motif icons for the feature cards. */
export function Motif({ kind, className }: { kind: "lotus" | "scroll" | "vine"; className?: string }) {
  const c = className ?? "w-7 h-7 text-antiqueGold";
  if (kind === "lotus")
    return (
      <svg viewBox="0 0 32 32" fill="none" className={c} aria-hidden>
        <path d="M16 26 C9 24 5 19 5 19 C9 17 13 18 16 22 C19 18 23 17 27 19 C27 19 23 24 16 26 Z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M16 24 C13 19 14 13 16 9 C18 13 19 19 16 24 Z" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  if (kind === "scroll")
    return (
      <svg viewBox="0 0 32 32" fill="none" className={c} aria-hidden>
        <rect x="8" y="6" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M12 12 H20 M12 16 H20 M12 20 H17" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  return (
    <svg viewBox="0 0 32 32" fill="none" className={c} aria-hidden>
      <path d="M8 26 C8 16 14 10 24 8 C18 12 16 18 20 20 C14 22 12 18 16 16" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="24" cy="8" r="1.6" fill="currentColor" />
    </svg>
  );
}
