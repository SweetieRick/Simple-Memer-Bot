import { Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';
const Enmap = require('enmap')

export default class LeaderboardCommand extends BaseCommand {
  constructor() {
    super('leaderboard', 'Levels', ["lead", "pboard"]);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {

  const filtered = client.levels.filter( points => points.guild === message.guild.id ).array();

  const sorted = filtered.sort((a, b) => b.points - a.points);
  const top10 = sorted.splice(0, 10);

  const emb = new MessageEmbed()
    .setTitle(`Leaderboard of Epic Gamers | ${message.guild.name}`)
    .setAuthor(client.user.username, message.guild.iconURL())
    .setDescription("This is the top 10 best epic gamers of the swamp! The leaderboard works like this: the user with most points, basically wins, but they also need to be the highest level on the row, as they can have 100 points but they still are on level 1. All clear? Good, here's the results")
    .setColor(0xa3ae7e)
    .setFooter(`Showing results for ${message.guild.name}`, `${message.guild.iconURL({dynamic: true})}`)
    for(const data of top10) {
        try {
            emb.addField(client.users.cache.get(data.user).tag, `Level **${data.level}**, **${data.points}** points`);
        } catch {
            emb.addField(`<@${data.user.id}>`, `Level **${data.level}**, **${data.points}** points`);
        }
      }
    await message.channel.send(emb);
  }
}