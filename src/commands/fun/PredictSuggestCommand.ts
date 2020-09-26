import { Message, MessageEmbed } from "discord.js";
import BaseCommand from "../../utils/structures/BaseCommand";
import DiscordClient from "../../client/client";
import predictionsList from "../../commands/fun/PredictCommand";

export default class PredictCommandOutdated extends BaseCommand {
  constructor() {
    super("PredictSuggest", "fun", ["predictsuggest", "predictsugg"]);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    if (args[1] === "add") {
      if (args[1] === "add" && args[2]) {
        var predictions = predictions;
        var newpredict = args[2];
        var nextarray = predictions.unshift(newpredict);
        let addedemb = new MessageEmbed()
          .setDescription(
            `✅ Successfully added a new prediction! Your prediction is "${newpredict}"`
          )
          .setColor(0xa3ae7e);
      }
    } else {
      let addemb = new MessageEmbed()
        .setDescription(
          "`Error:` please specify the phrase you want to add to the list"
        )
        .setColor(0xa3ae7e);
      message.channel.send(addemb);
    }
  }
}
