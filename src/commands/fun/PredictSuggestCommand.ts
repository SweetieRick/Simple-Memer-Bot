import { Message, MessageEmbed } from "discord.js";
import BaseCommand from "../../utils/structures/BaseCommand";
import DiscordClient from "../../client/client";

export default class PredictCommandOutdated extends BaseCommand {
  constructor() {
    super("PredictSuggest", "fun", ["predictsuggest", "predictsugg"]);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    console.log("Command used successfully");
  }
}
