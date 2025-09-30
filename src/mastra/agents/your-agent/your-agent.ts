import { Agent } from "@mastra/core";
import { model } from "../../config";
import { yourTool } from "../your-agent/your-tool";

// Define Agent Name
const name = "Instagram Profile Analyser";

// Define instructions for the agent
// TODO: Add link here for recommendations on how to properly define instructions for an agent.
const instructions = `
      You are a helpful assistant that analyze Instagram profile.

      Your primary function is to get the summary of Instagram profile.
      - If the location name isn’t in English, please translate it
      - Keep responses concise but informative

      Use the yourTool to fetch Instagram profile data.
`;

export const yourAgent = new Agent({
      name,
      instructions,
      model,
      tools: { yourTool },
});
