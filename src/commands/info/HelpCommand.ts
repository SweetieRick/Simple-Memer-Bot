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
      .addField("📬 Info Commands", "`s!help`", true)
      .addField("👮‍♀ Moderation Commands", "s!warn", true)
      .addField("😂 Fun Commands", "`s!predict`", true)
      .addField("⚙️ Utility Commands", "`s!nightwatch`, `s!onlinemode`", true)
      .addField("🔐 Developer Reserved", "`s!test`", true)
      .setColor(0xa3ae7e)
      .setFooter("Bot made by SweetieRick");
    message.channel.send(embed);
  }
}
