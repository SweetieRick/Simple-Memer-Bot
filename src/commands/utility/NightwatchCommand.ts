import {
  Base,
  GuildMember,
  GuildMemberRoleManager,
  Message,
  MessageEmbed,
  Permissions,
} from "discord.js";
import BaseCommand from "../../utils/structures/BaseCommand";
import DiscordClient from "../../client/client";
const Discord = require("discord.js");

export default class NightwatchCommand extends BaseCommand {
  constructor() {
    super("nightwatch", "utility", []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      let embederr = new MessageEmbed().setDescription(
        "❌ You are not enough holy to run this"
      );
      message.channel.send(embederr);
    }
    const daytime = new Date();
    client.user.setActivity("Swamp Overseer | s!help", { type: "PLAYING" });
    client.user.setPresence({ status: "idle" });
    let embed = new MessageEmbed()
      .setAuthor("The Overseer was put in passive mode!")
      .setDescription(
        "🌙 During this phase, some processes are paused to gain resources, please, do not overclock the bot during this phase"
      )
      .setColor(0xa3ae7e);
    message.channel.send(embed);
  }
}
