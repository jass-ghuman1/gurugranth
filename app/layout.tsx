import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shri Guru Granth Sahib AI — Source-Based Gurbani Search",
  description:
    "Ask questions and receive answers only from uploaded Sikh scripture sources, with citations. A respectful, scholarly Gurbani search platform.",
  keywords: ["Gurbani", "Sri Guru Granth Sahib", "Sikh scripture", "search", "citations"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Marcellus&family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&family=Noto+Serif+Gurmukhi:wght@400;500;600&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body text-bronze antialiased">{children}</body>
    </html>
  );
}
