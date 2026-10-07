# amir-zsh.github.io

Personal academic website: a single static page built with Next.js and deployed to GitHub Pages on every push to `main` (see `.github/workflows/deploy.yml`).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
npm run serve    # preview out/ at http://localhost:8000
```

## Layout

- `data/` holds all content: bio, publications, experience, education, teaching, reviewing, projects. Edit these to update the site.
- `pages/index.tsx` is the page itself. `pages/{publications,experience,projects,teaching}.tsx` redirect old URLs to the matching section.
- `components/` has the shared layout (top bar, sections, footer), the publication list, and the tagline.
- `styles/globals.css` is the only stylesheet: light/dark tokens at the top, then one block per section.

## The tagline

"I work on *large language models*, …" is a small speculative-decoding easter egg (`components/SpecDecode.tsx`). Clicking the topic lets the visitor act as the verifier: keep the topic, or reject it and resample another research area, after which the rest of the sentence is re-drafted and verified token by token.
