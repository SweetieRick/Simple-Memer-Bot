import { Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'fun', ['tell']);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    if (!message.member.roles.cache.has(process.env.JESTER_ROLE)) {
      let noperms = new MessageEmbed()
          .setDescription(`Yo man, this command requires the Jester role to be run! If you think this is an error, tell the owner of the server to review the configuration`)
          .setColor(0xa3ae7e)
      await message.channel.send(noperms)
    } else {
      const phrase = args.join(" ")
      if (!phrase) {
        let nophrase = new MessageEmbed()
            .setDescription(`What should I say? Remember that you need to write the phrase after the command, like ` + "`" + `${client.prefix}say <text> ` + "`" + `for example`)
            .setColor(0xa3ae7e)
        await message.channel.send(nophrase)
      }
      await message.channel.send(phrase)
    }
  }
}