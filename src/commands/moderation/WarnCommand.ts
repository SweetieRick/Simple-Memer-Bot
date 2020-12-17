import { Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class WarnCommand extends BaseCommand {
  constructor() {
    super('Warn', 'moderation', ['warn', 'w']);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    let low_perms = new MessageEmbed().setAuthor("Error: cannot warn a member without permissions").setDescription(`${message.author}, you need to be moderator of this server to kick someone!`).setColor(0xa3ae7e)
    if (!message.member.hasPermission("KICK_MEMBERS")) 
        await message.channel.send(low_perms)

    const user = message.mentions.members.first().user.username
    const dmuser = message.mentions.members.first()
    if (user) {
      let emb = new MessageEmbed().setAuthor(`***:white_check_mark: ${message.author.username} succesfully warned ${user}!`).setColor('YELLOW')
      message.channel.send(emb)
      dmuser.send(`You have been warned by ${message.author.username} in ${message.guild.name}`)
    } else {
      await message.channel.send('The user you mentioned is not valid!')
    }
  }
}