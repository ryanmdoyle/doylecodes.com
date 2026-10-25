# doylecodes.com

Personal portfolio for Ryan Doyle. A single prerendered page built with SvelteKit and deployed to Netlify as static files.

## Developing

Requires Node 22.17 or newer.

```bash
npm install
npm run dev
```

`npm run check`, `npm run lint` and `npm test` should all pass before deploying.

## Adding or updating a project

Projects live in [`src/lib/projects.ts`](src/lib/projects.ts).

1. Put screenshots in `src/lib/assets/projects/`. Aim for 1600–1800px wide. The build generates AVIF/WebP at smaller widths, so the originals can stay large.
2. Import each one with `?enhanced&w=1600;1000;600;320`, like the existing imports.
3. Add an entry to `projects`. The first screenshot is the cover. Set `featured: true` to show the project in the large card with a screenshot gallery.

Social links and the contact email are in [`src/lib/links.ts`](src/lib/links.ts).
