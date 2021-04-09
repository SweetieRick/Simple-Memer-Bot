import { Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class GulagCommand extends BaseCommand {
  constructor() {
    super('gulag', 'moderation', ["kick"]);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {

    const target = message.mentions.members.first()

    let missing_args = new MessageEmbed().setAuthor("You must mention someone to kick!").setDescription(`${message.author}, you need to mention someone to kick!`).setColor(0xa3ae7e)
    if (!target)
        message.channel.send(missing_args)

    const perms_missing = new MessageEmbed().setAuthor("You don't have permissions to do that!").setDescription(`${message.author}, you need to be moderator of this server to kick someone!`).setColor(0xa3ae7e)
    const higher = new MessageEmbed().setAuthor("You can't ban someone above you!").setDescription(`${message.author}, you can't kick someone higher in grade than you, even if he's in jail. Let the beeg bois take care of him`).setColor(0xa3ae7e)

    if (!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("KICK_MEMBERS"))
        await message.channel.send(perms_missing)
    if (message.member.roles.highest < target.roles.highest)
        await message.channel.send(higher)
    
    await target.kick('Was kicked out of jail as he was not worthy')
  }
}