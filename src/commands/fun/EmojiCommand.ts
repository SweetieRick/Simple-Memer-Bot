import { Message } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class EmojiCommand extends BaseCommand {
  constructor() {
    super('emoji', 'fun', ['ej', 'emj']);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    switch (args[0]) {
      case 'nwodtleM':
        message.channel.send("<a:nwodtleM:763851515399897090>")
        break;
    }
  }
}