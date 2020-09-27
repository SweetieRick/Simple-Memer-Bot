import BaseEvent from "../../utils/structures/BaseEvent";
import DiscordClient from "../../client/client";
import { Message } from "discord.js";
const bot = new DiscordClient();
const Discord = require("discord.js");

export default class ReadyEvent extends BaseEvent {
  constructor() {
    super("ready");
  }

  async run(client: DiscordClient, message: Message) {
    const daytime = new Date();
    client.user.setActivity("Swamp Overseer | s!help", { type: "PLAYING" });
    client.user.setPresence({ status: "online" });
    console.log(`Bot logged in as ${client.user.username} at ${daytime}`);
  }
}
