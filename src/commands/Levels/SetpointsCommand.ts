import { Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';
import { abort, setMaxListeners } from 'process';

export default class SetpointsCommand extends BaseCommand {
  constructor() {
    super('setpoints', 'Levels', ["setlvl", "pset", "addpoints"]);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    let error = new MessageEmbed()
        .setDescription(`Hey **${message.author.tag}**, this command is owner only! If you need help, the sintax of the command is: ${client.prefix}setpoints @user <amount>`)
        .setColor(0xa3ae7e)

    const user = message.mentions.users.first() || client.users.cache.get(args[0]);
    const pointsToAdd = parseInt(args[1], 10);
      if(message.author.id !== message.guild.ownerID || !user || !pointsToAdd) {
        await message.channel.send(error)
      } else {
          // Ensure there is a points entry for this user.
          const key = `${message.guild.id}-${message.author.id}`

          client.levels.ensure(key, {
            user: message.author.id,
            guild: message.guild.id,
            points: 0,
            level: 1
          });

          // Get their current points.
          if (pointsToAdd >= 9999) {
            let toomuch = new MessageEmbed().setDescription(`Yo dude, ${pointsToAdd} is a bit too much ye?`).setColor(0xa3ae7e)
            await message.channel.send(toomuch)
          } else {
            let userPoints = client.levels.get(key, "points");
            userPoints += pointsToAdd;
  
            let doneemb = new MessageEmbed()
                .setDescription(`Whoa ${user.tag}! Someone just added **${pointsToAdd}** to your level card! Now you have **${userPoints}** points!`)
                .setColor(0xa3ae7e)
                .setFooter(`Operation done by ${message.author.tag}, authored by validation token`)
            // Saving them to the database on that user's entry
            client.levels.set(key, userPoints, "points")
            message.channel.send(doneemb);
          }
      }
  }
}