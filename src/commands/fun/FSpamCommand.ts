import { Message } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class FSpamCommand extends BaseCommand {
  constructor() {
    super('FSpam', 'fun', ['f', 'pressf']);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    // Sleep function
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    // F loop 
    var i;
    for (i = 1; i < 6; i++) {
      message.channel.send('F');
    }
  }
}