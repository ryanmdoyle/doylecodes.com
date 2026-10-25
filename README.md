# doylecodes.com

**Live:** [doylecodes.com](https://doylecodes.com)

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
