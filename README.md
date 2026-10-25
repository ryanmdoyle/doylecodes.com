# doylecodes.com

**Live:** [doylecodes.com](https://doylecodes.com)

My portfolio: a single page introducing who I am, with my projects, screenshots,
and links to each live site and its source.

## How it's built

- **SvelteKit 3 + Svelte 5 (runes)**, TypeScript throughout
- **Fully static**: every route is prerendered (`export const prerender = true`) and
  served by Netlify as plain HTML with `@sveltejs/adapter-static`. There's no server
  and nothing to fetch at runtime
- **Typed project data**: projects are a typed array in
  [`src/lib/projects.ts`](src/lib/projects.ts) instead of a CMS. A Vitest spec checks
  that slugs are unique, every link is `https`, and every screenshot has alt text
- **Responsive images**: screenshots go through `@sveltejs/enhanced-img`, which
  generates AVIF/WebP at four widths with matching `sizes` hints. Featured
  projects get a screenshot gallery with thumbnail buttons
- **Accessible by default**: semantic landmarks, `aria-pressed` on the gallery
  thumbnails, labelled icon links, and support for `prefers-color-scheme` (dark mode)
  and `prefers-reduced-motion`
- Self-hosted variable fonts (Fraunces and Inter via Fontsource), so there are no
  third-party font requests

The previous version loaded projects from a Notion database on every request and
gave each project its own page. Old `/project/*` URLs now 301-redirect to the
projects section (see `netlify.toml`).

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
4. If `links.code` points somewhere other than the current source (for example, an earlier version in a different repo), set `codeLabel` so the button says so, like Class Kudos's "v1 source".

Social links and the contact email are in [`src/lib/links.ts`](src/lib/links.ts).
