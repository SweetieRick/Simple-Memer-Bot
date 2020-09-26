import { Message } from "discord.js";
import BaseCommand from "../../utils/structures/BaseCommand";
import DiscordClient from "../../client/client";

export default class AdminPanelCommand extends BaseCommand {
  constructor() {
    super("AdminPanel", "utility", ["adminpanel", "ap"]);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    message.channel.send("AdminPanel command works");
    // TODO Admin settings embed + inline args
    // TODO 'client.users.cache.get('<id>').send('<message>');'
  }
}
