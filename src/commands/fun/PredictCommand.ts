import { Message, MessageEmbed } from "discord.js";
import BaseCommand from "../../utils/structures/BaseCommand";
import DiscordClient from "../../client/client";
const database = require("quick.db");

export default class PredictCommand extends BaseCommand {
  constructor() {
    super("predict", "fun", []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    const predictions = new database.table("PredictionCommandResponses");
    database.set("predictions", [
      "you will die of terminal dankness",
      "you will have a lovely gf ❤",
      "you will receive free money from Mr. Beast",
      "Shrek will bless you with his greatness",
      "yOu ArE tHe ImPoStOR! I sEe yOu WiLl VeNt!",
      "you will live a wonderful life 😘",
      "you will be chosen for exploring Antartica",
      "you will be considered a city hero",
      "you will be healthy and you will grow as a perfect Shrekling",
      "you.. no sorry the dev will run out of ideas 😞",
      "Obi-Wan will take you as his apprendice",
    ]);

    let embed = new MessageEmbed()
      .setAuthor("`Shrek predicts your future`")
      .setDescription(
        `🔮 Hold up a second ${message.author}, Shrek is looking in your future...`
      )
      .setColor(0xa3ae7e);
    message.channel.send(embed);
    predictions;
    const chosenpredit =
      predictions[Math.floor(Math.random() * predictions.length)];
    let nextembed = new MessageEmbed()
      .setAuthor("Shrek predicted your future!")
      .setDescription(`In your future... ${chosenpredit}`)
      .setColor(0xa3ae7e);
    message.channel.send(nextembed);

    if (args[1] === "add") {
      let addemb = new MessageEmbed()
        .setDescription(
          "`Error:` please specify the phrase you want to add to the list"
        )
        .setColor(0xa3ae7e);
      message.channel.send(addemb);
    } else if (
      args[1] === "viewall" &&
      message.member.hasPermission("ADMINISTRATOR")
    ) {
      predictions;
      var allpredicts = predictions.all();
      let allembed = new MessageEmbed()
        .setAuthor("Shrek's Predicts")
        .setDescription(
          `All the predicts are: ${allpredicts}. More will be added`
        )
        .setColor(0xa3ae7e);
      message.channel.send(allembed);
    } else if (args[1] === "add" && args[2]) {
      var newpredict = args[2];
      database.push("predictions", `${newpredict}`);
      let addedemb = new MessageEmbed()
        .setDescription(
          `✅ Successfully added a new prediction! Your prediction is "${newpredict}"`
        )
        .setColor(0xa3ae7e);
    }
  }
}
