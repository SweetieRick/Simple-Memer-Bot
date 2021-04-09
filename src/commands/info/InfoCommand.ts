import { Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';
import { info } from 'console';
const functions = require('../../functions')

export default class InfoCommand extends BaseCommand {
  constructor() {
    super('info', 'info', []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    const emb = new MessageEmbed()
      .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic: true})}`)
      .setTitle("Info Page")
      .addField("**Codekeeper**", `SweetieRick#6931`)
      .addField("**Library**", `Discord.js ^12.3.1`)
      .addField("**Useful Links**", `[Support Server](https://discord.gg/QbAFBj9) \n[Command List](about:blank) \n[Source Code](https://github.com/SweetieRick/Simple-Memer-Bot/tree/master)`)
      .setColor(0xa3ae7e)

      message.channel.send(emb)
  }
}