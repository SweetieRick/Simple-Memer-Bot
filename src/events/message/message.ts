import BaseEvent from "../../utils/structures/BaseEvent";
import { Message, MessageEmbed, MessageMentions } from "discord.js";
import DiscordClient from "../../client/client";

export default class MessageEvent extends BaseEvent {
  constructor() {
    super("message");
  }

  async run(client: DiscordClient, message: Message) {
    if (message.author.bot) return;
    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
        .slice(client.prefix.length)
        .trim()
        .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }
    if (message.mentions.has(client.user)) {
      let emb = new MessageEmbed()
        .setAuthor("Hey there disciple! I am the Swamp Overseer!")
        .setDescription(
          `As you invoked me, now you can see the stuff I can do. To start off, you should see what commands I can run by saying **${client.prefix}help**. If you want more info about me, just run **${client.prefix}info**. Apart all, be sure to have fun trying me!`
        )
        .addField("What is my prefix?", `${client.prefix}`)
        .addField("Bot library", "Discord.js 12.3.2")
        .addField("Version", "1.8")
        .addField("GitHub branch", "master")
        .setColor(0xa3ae7e)
        .setFooter(
          "Bot made by SweetieRick. This bot is a special version of the known bot SimpleMemerBot made only for this server!"
        );
      message.channel.send(emb);
    }
  }
}
