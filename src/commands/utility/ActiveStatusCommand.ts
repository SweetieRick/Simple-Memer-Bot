import { Message, MessageEmbed } from "discord.js";
import BaseCommand from "../../utils/structures/BaseCommand";
import DiscordClient from "../../client/client";

export default class ActiveStatusCommand extends BaseCommand {
  constructor() {
    super("onlinemode", "utility", []);
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
    client.user.setPresence({ status: "online" });
    let embed = new MessageEmbed()
      .setAuthor("The Overseer was put in Online mode!")
      .setDescription("🔥 All the services and processes are back to normal!")
      .setColor(0xa3ae7e);
    message.channel.send(embed);
  }
}
