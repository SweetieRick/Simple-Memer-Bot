import { Message, MessageEmbed } from "discord.js";
import BaseCommand from "../../utils/structures/BaseCommand";
import DiscordClient from "../../client/client";
const Sequelize = require("sequelize");

export default class PredictCommand extends BaseCommand {
  constructor() {
    super("Predict", "fun", ["predict"]);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    const sequelizeDB = Sequelize.models.sequelizeDB;
    const Predictions = sequelizeDB.define("predictions", {
      prediction_number: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
      },
      description: Sequelize.TEXT,
    });

    let embed = new MessageEmbed()
      .setAuthor("`Shrek predicts your future`")
      .setDescription(
        `🔮 Hold up a second ${message.author}, Shrek is looking in your future...`
      )
      .setColor(0xa3ae7e);
    message.channel.send(embed);
    const chosenpredit =
      Predictions[Math.floor(Math.random() * Predictions.length)];
    let nextembed = new MessageEmbed()
      .setAuthor("Shrek predicted your future!")
      .setDescription(`In your future... ${chosenpredit}`)
      .setColor(0xa3ae7e);
    message.channel.send(nextembed);
  }
}
