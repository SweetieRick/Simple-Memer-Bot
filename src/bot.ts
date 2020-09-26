import { config } from "dotenv";
config();
import { registerCommands, registerEvents } from "./utils/registry";
import DiscordClient from "./client/client";
import { Message } from "discord.js";
const client = new DiscordClient({});

(async () => {
  client.prefix = process.env.DISCORD_BOT_PREFIX || client.prefix;
  await registerCommands(client, "../commands");
  await registerEvents(client, "../events");
  // Start code here

  // Ends code there
  await client.login(process.env.DISCORD_BOT_TOKEN);
})();
