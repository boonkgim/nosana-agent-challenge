import { createTool } from "@mastra/core";
import { z } from "zod";
import Firecrawl from '@mendable/firecrawl-js';

const firecrawl = new Firecrawl({ apiKey: process.env.FIRECRAWL_API_KEY });

// Simple async function that conforms to input and output schema
const getInfo = async (url: string) => {
  const doc = await firecrawl.scrape(url, { formats: ['markdown'] });
  console.log(doc.markdown)
  return { markdown: doc.markdown! }
}

// Define your tool using the `createtool`
export const yourTool = createTool({
  id: "web-scraper",
  description: "Use the `createTool function to create your tool",
  inputSchema: z.object({
    url: z.string().describe("Company Website"),
  }),
  outputSchema: z.object({
    markdown: z.string()
  }),
  execute: async ({ context }: { context: { url: string } }) => {
    return await getInfo(context.url);
  },
});
