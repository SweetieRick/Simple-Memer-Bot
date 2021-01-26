import { Message } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class EmojiCommand extends BaseCommand {
  constructor() {
    super('emoji', 'fun', ['ej', 'emj']);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    switch (args[0]) {
      // These are animated emojis
      case 'nwodtleM':
        message.channel.send("<a:nwodtleM:763851515399897090>")
        break;

      // These are the normal emojis with a funny twist
      case 'banhammer':
        message.channel.send("<:banhammer_gulag:797031116573114399> Behold, the mighty ban hammer!")
        break;
      case 'bonk':
        message.channel.send(":boom: <:banhammer_gulag:797031116573114399>")
        break;
      case 'drip':
        message.channel.send("Their only fear is your drip <:goku_drip:797032832857538560>")
    }
  }
}