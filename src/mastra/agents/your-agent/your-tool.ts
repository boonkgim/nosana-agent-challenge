import { createTool } from "@mastra/core";
import { z } from "zod";

// Simple async function that conforms to input and output schema
const getInfo = async (ctx: string) => {
  return {
    followers: 100,
    bio: 'Hello'
  }
}

// Define your tool using the `createtool`
export const yourTool = createTool({
  id: "instagram-scraper",
  description: "Use the `createTool function to create your tool",
  inputSchema: z.object({
    username: z.string().describe("Instagram Username"),
  }),
  outputSchema: z.object({
    followers: z.number(),
    bio: z.string(),
  }),
  execute: async ({ context }: { context: { username: string } }) => {
    return await getInfo(context.username);
  },
});
