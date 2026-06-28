# Shri Guru Granth Sahib AI — Landing & Search Page

A premium, marble-and-gold Sikh heritage landing page for a source-based Gurbani search platform.
Built with **Next.js 14 (App Router) · React · TypeScript · TailwindCSS**. Static UI only — no backend, database, or API required yet.

---

## Project structure

```
sggs-ai/
├── app/
│   ├── layout.tsx          # Root layout, fonts, global metadata
│   ├── globals.css         # Tailwind + marble texture + etched ornaments
│   └── page.tsx            # Composes the whole page
├── components/
│   ├── Header.tsx          # Logo, nav (Home/Search/Library/About), Admin Login
│   ├── HeroSearch.tsx      # Title, subtitle, arched marble search panel, chips
│   ├── FeatureCard.tsx     # Reusable feature card (used 3×)
│   ├── CitationPreview.tsx # Example source-citation card
│   ├── Footer.tsx          # Tagline + Privacy/Terms/Contact links
│   └── DecorativePattern.tsx # Arch, peacock/vine corners, floral dividers, motifs
├── tailwind.config.ts      # Heritage color theme + fonts
├── next.config.mjs         # Static export (output: 'export')
├── netlify.toml            # Netlify build settings
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## Run locally (optional)

Requires Node.js 18+.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # produces the static site in /out
```

---

## Deploy on GitHub + Netlify (recommended — no command line needed)

### Step 1 — Put the code on GitHub
1. Create a new repository at https://github.com/new (e.g. `sggs-ai`). Leave it empty.
2. Upload these files **preserving the folder structure**. Easiest options:
   - **GitHub Desktop** (simplest): drag this folder in, then "Commit" → "Push".
   - **Or the web UI**: on the repo page click **Add file → Upload files**, then drag the whole project folder in and commit.
   > Do **not** upload `node_modules` or `.next` — they're excluded by `.gitignore` and Netlify builds them itself.

### Step 2 — Connect Netlify to the repo
1. Go to https://app.netlify.com → **Add new site → Import an existing project**.
2. Choose **GitHub**, authorize, and pick your `sggs-ai` repository.
3. Netlify auto-detects Next.js. The included `netlify.toml` already sets:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
   Leave them as-is and click **Deploy**.
4. Wait ~1–2 minutes. Netlify gives you a live URL like `https://your-site.netlify.app`.

That's it — every time you push to GitHub, Netlify rebuilds and redeploys automatically.

### Step 3 (optional) — Custom domain
In Netlify: **Domain settings → Add a domain**, then follow the DNS instructions.

---

## Notes

- This is the **static frontend only**. The live AI scripture search (retrieval + Claude, with the API key kept safe in a Netlify serverless function) is the next phase.
- Colors, fonts, and motifs are all defined in `tailwind.config.ts`, `app/globals.css`, and `components/DecorativePattern.tsx` — easy to adjust.
