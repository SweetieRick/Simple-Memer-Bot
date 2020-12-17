import { Message, MessageEmbed } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';

export default class StartsingsCommand extends BaseCommand {
  constructor() {
    super('startsings', 'fun', ["sings+", "newsings"]);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    const songName = args[0]  
    const songDuration = args[1]
      
      let error = new MessageEmbed()
          .setDescription(`Sorry buddy, you must specify a song name and a duration! Tip: command usage is ` + '`' + `${client.prefix}newsings <song name> <song duration> <ping everyone? true/false>` + '`')
          .setColor(0xa3ae7e)

      const pingEveryone = args[2]
      if (pingEveryone === 'true' && message.author.id === message.guild.ownerID) 
          await message.channel.send("<@&755113862298337302>")
    
if (songDuration && songName) {
  if (message.author.id === message.guild.ownerID) {
    let emb = new MessageEmbed()
        .setTitle(`Hey people! Welcome to the stage!`)
        .setDescription(`Are you ready to party? New Discord Sings is now LIVE! Let's see what we have in plan:`)
        .addField("What's the song?", `**${songName}**`)
        .addField("What's the duration?", `*${songDuration}*`)
        .addField("Who is the DJ tonight?", `${message.author.username}`)
        .setFooter(`Started a new sings!`, `${message.guild.iconURL({dynamic: true})}`)
        .setTimestamp(new Date())
        .setColor("PURPLE")
    await message.channel.send(emb)
    
        } else {
          await message.channel.send("Sorry dude, but you can't start a new sings without a DJ role!")
        }

  } else {
    await message.channel.send(error)

      }
    }
  }