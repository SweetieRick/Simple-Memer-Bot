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
  // ! Start code here

  // Adds default predictions
  /*
  "you will die of terminal dankness",
  "you will have a lovely gf ❤"
  "you will receive free money from Mr. Beast"
  "Shrek will bless you with his greatness"
  "yOu ArE tHe ImPoStOR! I sEe yOu WiLl VeNt!"
  "you will live a wonderful life 😘"
  "you will be chosen for exploring Antartica"
  "you will be considered a city hero"
  "you will be healthy and you will grow as a perfect Shrekling"
  "you.. no sorry the dev will run out of ideas 😞... that's why you should do `s!predictsuggest <description>` in chat!"
  "Obi-Wan will take you as his apprendice"

  */
  // ! Ends code there
  await client.login(process.env.DISCORD_BOT_TOKEN);
})();
