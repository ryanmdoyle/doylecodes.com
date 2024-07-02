import { Client } from '@notionhq/client';

import { NOTION_API_SECRET } from '$env/static/private';

const notion = new Client({ auth: NOTION_API_SECRET });

async function getPage(pageId) {
  try {
    // Notion Page from the "Portfolio" DB
    const page = await notion.pages.retrieve({ page_id: pageId });

    // Blocks (body content) from the page
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 50,
    });
    return {
      page,
      blocks: blocks.results
    }
  } catch (error) {
    console.error("Error fetching portfolio blocks:", error);
  }
}

export async function load({ params }) {
  return await getPage(params.projectId)
}
