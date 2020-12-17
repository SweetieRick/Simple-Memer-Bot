import { Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';
const Enmap = require("enmap");

export default class PointsCommand extends BaseCommand {
  constructor() {
    super('points', 'Levels', ["p", "level", "lvl"]);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    // We re-define the database key and ensure a entry for that user
    const key = `${message.guild.id}-${message.author.id}`

    client.levels.ensure(key, {
      user: message.author.id,
      guild: message.guild.id,
      points: 0,
      level: 1
    });

    let emb = new MessageEmbed()
    .setDescription(`Yo ***${message.author.username}#${message.author.discriminator}***, you currently have **${client.levels.get(key, "points")}** points on level **${client.levels.get(key, "level")}** . Doin' great!`)
    .setColor(0xa3ae7e)

    // We send the stats straigh from database
    message.channel.send(emb)

  }
}