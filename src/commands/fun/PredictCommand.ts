import { Message, MessageEmbed } from "discord.js";
import BaseCommand from "../../utils/structures/BaseCommand";
import DiscordClient from "../../client/client";
export var predictions = [
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
];

export default class PredictCommand extends BaseCommand {
  constructor() {
    super("Predict", "fun", ["predict"]);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    let embed = new MessageEmbed()
      .setAuthor("`Shrek predicts your future`")
      .setDescription(
        `🔮 Hold up a second ${message.author}, Shrek is looking in your future...`
      )
      .setColor(0xa3ae7e);
    message.channel.send(embed);
    const chosenpredit =
      predictions[Math.floor(Math.random() * predictions.length)];
    let nextembed = new MessageEmbed()
      .setAuthor("Shrek predicted your future!")
      .setDescription(`In your future... ${chosenpredit}`)
      .setColor(0xa3ae7e);
    message.channel.send(nextembed);
  }
}
