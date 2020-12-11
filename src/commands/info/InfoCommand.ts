import { Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';
const functions = require('../../functions')

export default class InfoCommand extends BaseCommand {
  constructor() {
    super('info', 'info', []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {

    let infos = new MessageEmbed()
        .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({dynamic: true})}`)
        .setDescription(`As you invoked me, now you can see the stuff I can do. To start off, you should see what commands I can run by saying **${client.prefix}help**. If you want more info about me, just run **${client.prefix}info**. Apart all, be sure to have fun trying me!`)
        .addField("What is my prefix?", `${client.prefix}`)
        .addField("Bot library", `discord.js 1.12.1`)
        .addField("Bot Version", "1.4")
        .addField("Uptime", `${functions.getLastRestart()}`)
        .addField("Collaborators", "TheRealJT, Candy, Shrek")
        .addField("Commands", `${client.commands.array().length} loaded`)
        .setColor(0xa3ae7e)
        .setFooter("Bot made by SweetieRick. This bot is a special version of the known bot SimpleMemerBot made only for this server!");
  }
}