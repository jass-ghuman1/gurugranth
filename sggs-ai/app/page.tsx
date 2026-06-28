import Header from "@/components/Header";
import HeroSearch from "@/components/HeroSearch";
import FeatureCard from "@/components/FeatureCard";
import CitationPreview from "@/components/CitationPreview";
import Footer from "@/components/Footer";
import { CornerOrnament, FloralDivider } from "@/components/DecorativePattern";

const features = [
  {
    title: "Source-Only Answers",
    body: "The AI answers only from uploaded Sikh scripture sources — never invented, never guessed.",
    motif: "lotus" as const,
  },
  {
    title: "Citation-Based Search",
    body: "Every answer includes Book, Ang/Page, Raag, Author, and source references.",
    motif: "scroll" as const,
  },
  {
    title: "Multilingual Search",
    body: "Search in English, Punjabi, Gurmukhi, and Roman Punjabi.",
    motif: "vine" as const,
  },
];

export default function Page() {
  return (
    <>
      <div className="marble-veining" aria-hidden />
      <Header />

      <main>
        <HeroSearch />

        {/* Feature cards */}
        <section className="mx-auto max-w-6xl px-5 pb-4 sm:px-8">
          <div className="mb-10 flex items-center justify-center gap-4">
            <FloralDivider />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <FeatureCard key={f.title} title={f.title} body={f.body} motif={f.motif} />
            ))}
          </div>
        </section>

        {/* Example citation */}
        <section className="mx-auto max-w-2xl px-5 py-16 sm:px-8">
          <CitationPreview />
        </section>
      </main>

      <Footer />

      {/* Ambient corner ornaments */}
      <CornerOrnament className="pointer-events-none fixed left-2 top-24 hidden w-28 text-antiqueGold/40 lg:block" />
      <CornerOrnament
        className="pointer-events-none fixed right-2 top-24 hidden w-28 -scale-x-100 text-antiqueGold/40 lg:block"
      />
    </>
  );
}
