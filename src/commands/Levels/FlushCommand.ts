import { Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class FlushCommand extends BaseCommand {
  constructor() {
    super('flush', 'Levels', []);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    let noperms = new MessageEmbed()
        .setDescription("Hey there bucko, you are not my boss! Only the owner can use this command")
        .setColor(0xa3ae7e)

    // Let's clean up the database of all "old" users, 
    // and those who haven't been around for... say a month.
    try {
      if (message.author.id !== message.guild.ownerID) {
          await message.channel.send(noperms)
      } else {
        // Get a filtered list (for this guild only).
        const key = `${message.guild.id}-${message.author.id}`
        const filtered = client.levels.filter( p => p.guild === message.guild.id );
        
        // We then filter it again 
        // So we get only users that haven't been online for a month, or are no longer in the guild.
        const rightNow = new Date().getTime()
        const toRemove = filtered.filter(data => {
          return !message.guild.members.cache.has(data.user) || rightNow - 2592000000 > data.lastSeen;
        });

        toRemove.forEach(data => {
          client.levels.delete(key);
        });

        let emb = new MessageEmbed()
            .setDescription(`I've cleaned up ${toRemove.size} old farts from the roaster`)
            .setColor(0xa3ae7e)
            .setFooter(`${message.author.tag} flushed cache`, `${message.guild.iconURL({dynamic: true})}`)
            .setTimestamp(new Date());
        message.channel.send(emb);
      }
    } catch (e) {
      let erroremb = new MessageEmbed()
          .setDescription("Something went wrong. If you are not the owner of the server, you should not attempt to run this command. Cache was not flushed, all data safe")
          .setColor("RED")
      message.channel.send(erroremb)
    }
  }
}