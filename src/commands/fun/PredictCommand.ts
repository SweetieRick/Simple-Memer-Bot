import { Message, MessageEmbed } from "discord.js";
import BaseCommand from "../../utils/structures/BaseCommand";
import DiscordClient from "../../client/client";

export default class PredictCommand extends BaseCommand {
  constructor() {
    super("PredictSuggest", "fun", ["predictsuggest", "predictsugg"]);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    var Predictions = [
      "you will die of terminal dankness",
      "you will have a lovely gf ❤",
      "you will receive free money from Mr. Beast",
      "Shrek will bless you with his greatness",
      "yOu ArE tHe ImPoStOR! I sEe yOu WiLl VeNt!",
      "you will live a wonderful life 😘",
      "you will be chosen for exploring Antartica",
      "you will be considered a city hero",
      "you will be healthy and you will grow as a perfect Shrekling",
      "you.. no sorry the dev will run out of ideas 😞... that's why you should do `s!predictsuggest <description>` in chat!",
      "Obi-Wan will take you as his apprendice",
    ];
    switch (args[1]) {
      case "add":
        if (!args[2]) {
          return message.channel.send(
            "Sorry, but for adding a predict you need to write `s!predict add <your predict>`. To see how to make a good predict run `s!predict help`"
          );
        }
        var newpredict = args[2];
        Predictions.push(newpredict);
        break;
      case "viewall":
        if (!message.member.hasPermission("ADMINISTRATOR")) {
          return message.channel.send(
            "You dummy, you can't see into Shrek's mind!"
          );
        }
        message.member.send(
          `Here there are all my predictions for now: ${Predictions}`
        );
    }
    let embed = new MessageEmbed()
      .setAuthor("`Shrek predicts your future`")
      .setDescription(
        `🔮 Hold up a second ${message.author}, Shrek is looking in your future...`
      )
      .setColor(0xa3ae7e);
    message.channel.send(embed);
    const chosenpredit =
      Predictions.find[Math.floor(Math.random() * Predictions.length)];
    let nextembed = new MessageEmbed()
      .setAuthor("Shrek predicted your future!")
      .setDescription(`In your future... ${chosenpredit}`)
      .setColor(0xa3ae7e);
    message.channel.send(nextembed);
  }
}
