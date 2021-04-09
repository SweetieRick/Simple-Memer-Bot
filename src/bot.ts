import { config } from "dotenv";
config();
import { registerCommands, registerEvents } from "./utils/registry";
import DiscordClient from "./client/client";
import { Message } from "discord.js";
const client = new DiscordClient({});
export const cooldownUserList = new Set();
(async () => {
  client.prefix = process.env.DISCORD_BOT_PREFIX || client.prefix;
  await registerCommands(client, "../commands");
  await registerEvents(client, "../events");
  
  await client.login(process.env.DISCORD_BOT_TOKEN);
})();
