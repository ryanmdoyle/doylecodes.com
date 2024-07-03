// Create the Notion API Client
import { Client } from '@notionhq/client';
import { NOTION_API_SECRET, NOTION_PORTFOLIO_DB_ID } from '$env/static/private';

const notion = new Client({
  auth: NOTION_API_SECRET,
});

// Function to get data from the Notion database
async function getPortfolioData() {
  try {
    // Query the database
    const portfolioData = await notion.databases.query({
      database_id: NOTION_PORTFOLIO_DB_ID,
    });

    // Filter out the page IDs
    const pageIds = portfolioData.results
      .filter(block => block.object === 'page')
      .map(block => block.id);

    if (pageIds.length === 0) {
      console.error("No pages found in the database.");
      return [];
    }

    // Fetch data for each page concurrently
    const projects = await Promise.all(
      pageIds.map(async (pageId) => {
        const page = await notion.pages.retrieve({ page_id: pageId });
        return page;
      })
    );
    return projects;
  } catch (error) {
    console.error("Error fetching portfolio data:", error);
  }
}

export async function load() {
  const pageData = await getPortfolioData()
  return { portfolioData: pageData }
}