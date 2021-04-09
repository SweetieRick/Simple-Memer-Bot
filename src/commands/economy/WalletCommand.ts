import { Message } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class WalletCommand extends BaseCommand {
  constructor() {
    super('wallet', 'economy', ['bal','wallt']);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    const key = `${message.guild.id}-${message.author.id}`

    const networth = await Math.floor(client.economy.get(key, "coins")*1.6)
    const diamonds = await client.economy.get(key, "diamonds")

    message.channel.send({
      embed: {
        title: `${message.author.username}'s Wallet ~ :moneybag:`,
        description: `:coin: Balance: ${client.economy.get(key, "coins")} \n :dollar: Net-worth: ${networth} \n <a:shiny_diamond:829598127832432660> Diamonds: ${diamonds}`,
        color: 0xa3ae7e
      }
    })
  }
}