import { config } from "dotenv";
config();
import { registerCommands, registerEvents } from "./utils/registry";
import DiscordClient from "./client/client";
import { Message } from "discord.js";
const client = new DiscordClient({});
const Sequelize = require("sequelize");
(async () => {
  client.prefix = process.env.DISCORD_BOT_PREFIX || client.prefix;
  await registerCommands(client, "../commands");
  await registerEvents(client, "../events");
  // Start code here
  // ? Creates a new Database
  const sequelizeDB = new Sequelize("database", "user", "password", {
    host: "localhost",
    dialect: "sqlite",
    logging: false,
    // SQLite only
    storage: "database.sqlite",
  });

  // ? Creates a new Predictions table
  const Predictions = sequelizeDB.define("predictions", {
    prediction_number: {
      type: Sequelize.INTEGER,
      unique: true,
      allowNull: false,
    },
    description: Sequelize.TEXT,
  });

  // Pints all tags
  const tagList = await Predictions.findAll({
    attributes: ["prediction_number"],
  });
  console.log(tagList);

  // Adds default predictions
  try {
    var pr1 = await Predictions.create({
      prediction_number: 1,
      description: "you will die of terminal dankness",
    });
    var pr2 = await Predictions.create({
      prediction_number: 1,
      description: "you will have a lovely gf ❤",
    });
    var pr3 = await Predictions.create({
      prediction_number: 1,
      description: "you will receive free money from Mr. Beast",
    });
    var pr4 = await Predictions.create({
      prediction_number: 1,
      description: "Shrek will bless you with his greatness",
    });
    var pr5 = await Predictions.create({
      prediction_number: 1,
      description: "yOu ArE tHe ImPoStOR! I sEe yOu WiLl VeNt!",
    });
    var pr6 = await Predictions.create({
      prediction_number: 1,
      description: "you will live a wonderful life 😘",
    });
    var pr7 = await Predictions.create({
      prediction_number: 1,
      description: "you will be chosen for exploring Antartica",
    });
    var pr8 = await Predictions.create({
      prediction_number: 1,
      description: "you will be considered a city hero",
    });
    var pr9 = await Predictions.create({
      prediction_number: 1,
      description:
        "you will be healthy and you will grow as a perfect Shrekling",
    });
    var pr10 = await Predictions.create({
      prediction_number: 1,
      description:
        "you.. no sorry the dev will run out of ideas 😞... that's why you should do `s!predictsuggest <description>` in chat!",
    });
    var pr11 = await Predictions.create({
      prediction_number: 1,
      description: "Obi-Wan will take you as his apprendice",
    });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      return console.log("That tag already exists.");
    }
    return console.log("Something went wrong with adding a tag.");
  }

  // ? Syncs to database
  Predictions.sync();
  // Ends code there
  await client.login(process.env.DISCORD_BOT_TOKEN);
})();
