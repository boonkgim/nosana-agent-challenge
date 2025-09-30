import { Agent } from "@mastra/core";
import { model } from "../../config";
import { yourTool } from "../your-agent/your-tool";

// Define Agent Name
const name = "Company Analyser";

// Define instructions for the agent
// TODO: Add link here for recommendations on how to properly define instructions for an agent.
const instructions = `
      You are a helpful assistant that analyze a company website.

      Your primary function is to get the summary of the company.
      - 80 words summary of the company
      - Identify the ideal customer profile
      - Identify the core product / services of the business

      Use the yourTool to fetch the company website.
`;

export const yourAgent = new Agent({
      name,
      instructions,
      model,
      tools: { yourTool },
});
