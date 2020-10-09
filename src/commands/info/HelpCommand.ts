import { Message, MessageEmbed } from "discord.js";
import BaseCommand from "../../utils/structures/BaseCommand";
import DiscordClient from "../../client/client";

export default class HelpCommand extends BaseCommand {
  constructor() {
    super("help", "info", []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    let embed = new MessageEmbed()
      .setAuthor("The Swamp Overseer's")
      .setDescription(
        `Hey there! I am the Swamp Overseer and I am the protector of the swamp. I help Shrek keeping the church alive and holy as always. Try doing ${client.prefix}commands to see what I can do! Also, don't forget to pray your god Shek with ${client.prefix}pray !`
      )
      .addField("📬 Info Commands", `${client.prefix}help`, true)
      .addField("👮‍♀ Moderation Commands", `${client.prefix}warn`, true)
      .addField("😂 Fun Commands", `${client.prefix}predict`, true)
      .addField(
        "⚙️ Utility Commands",
        `${client.prefix}nightwatch, ${client.prefix}onlinemode`,
        true
      )
      .addField(
        "🔐 Developer Reserved",
        `${client.prefix}test, ${client.prefix}showtable`,
        true
      )
      .setColor(0xa3ae7e);
    message.channel.send(embed);
  }
}
