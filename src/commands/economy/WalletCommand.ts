import { Message } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class WalletCommand extends BaseCommand {
  constructor() {
    super('wallet', 'economy', []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    message.channel.send('wallet command works');
  }
}