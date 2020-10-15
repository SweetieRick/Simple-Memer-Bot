import { Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class WarnCommand extends BaseCommand {
  constructor() {
    super('Warn', 'moderation', ['warn', 'w']);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    const user = message.mentions.members.first().user.username
    const dmuser = message.mentions.members.first()
    if (user) {
      let emb = new MessageEmbed().setAuthor(`${message.author.username} warned ${user}!`).setColor('YELLOW')
      message.channel.send(emb)
      dmuser.send(`You have been warned by ${message.author.username}`)
    } else {
      await message.channel.send('The user you mentioned is not valid!')
    }
  }
}