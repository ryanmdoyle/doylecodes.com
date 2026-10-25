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
My personal portfolio site. The project list comes from a Notion database
rather than being hard-coded, so adding or reordering a project means editing
a Notion page instead of redeploying code.

## How it works

- **Home page** (`src/routes/+page.server.ts`) queries the Notion portfolio
  database server-side and renders a card for each project: name, description,
  tech tags, GitHub link, and live link
- **Project pages** (`src/routes/project/[projectId]`) load a single Notion page
  plus its body blocks and render headings, paragraphs, and images
- The Notion API key never reaches the browser; it's read from
  `$env/static/private` and used only in `+page.server` load functions

## Tech

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
- [SvelteKit](https://kit.svelte.dev/) (Svelte 4) + TypeScript
- [Notion API](https://developers.notion.com/) via `@notionhq/client` as a headless CMS
- Deployed on Netlify with `@sveltejs/adapter-netlify`

I wrote about the decision to build this myself:
[Is Building Your Own Portfolio a Waste of Time?](https://dev.to/doylecodes/is-building-your-own-portfolio-a-waste-of-time-1opc)

## Running locally

Create a `.env` file with a Notion integration token and the ID of a database
that has `Name`, `Description`, `Technologies`, `Github`, `Link`, and `Order`
properties:

```bash
NOTION_API_SECRET=secret_...
NOTION_PORTFOLIO_DB_ID=...
```

Then:

```bash
npm install
npm run dev
```
