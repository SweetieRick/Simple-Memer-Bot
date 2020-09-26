import { config } from "dotenv";
config();
import { registerCommands, registerEvents } from "./utils/registry";
import DiscordClient from "./client/client";
import { Message } from "discord.js";
const client = new DiscordClient({});
const Sequelize = require("sequelize")(async () => {
  client.prefix = process.env.DISCORD_BOT_PREFIX || client.prefix;
  await registerCommands(client, "../commands");
  await registerEvents(client, "../events");
  // Start code here
  const sequelize = new Sequelize("database", "user", "password", {
    host: "localhost",
    dialect: "sqlite",
    logging: false,
    // SQLite only
    storage: "database.sqlite",
  });

  // We define a new database table for predictions used in PredictCommand.ts and PredictSuggestCommand.ts
  // The table will have the tag value, which is the predict number on the list and the description
  // The name is unique to help identify the various predictions, description is the actual predict text
  const Predictions = sequelize.define("tags", {
    prediction_number: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false,
    },
    description: Sequelize.TEXT,
  });
  // Ends code there
  await client.login(process.env.DISCORD_BOT_TOKEN);
})();
