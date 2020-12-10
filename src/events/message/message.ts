import BaseEvent from "../../utils/structures/BaseEvent";
import { Message, MessageAttachment, MessageEmbed, MessageMentions } from "discord.js";
import DiscordClient from "../../client/client";
const Enmap = require("enmap");


export default class MessageEvent extends BaseEvent {
  constructor() {
    super("message");
  }

  async run(client: DiscordClient, message: Message) {
    client.levels = new Enmap({name: "levels"});

    // ? Command Handling
    if (message.author.bot) return;
    if (message.content.startsWith(client.prefix)) {
      const [cmdName, ...cmdArgs] = message.content
        .slice(client.prefix.length)
        .trim()
        .split(/\s+/);
      const command = client.commands.get(cmdName);
      if (command) {
        command.run(client, message, cmdArgs);
      }
    }

    // ? Initialization of leveling system
    if (message.guild) {
      let emb = new MessageEmbed()
          .setAuthor(`Sup ${message.author.username}! Ready to level?`, `${message.author.displayAvatarURL({dynamic: true})}`)
          .setDescription(`**How it works?** First, welcome here at ${message.guild.name}! From now on, you can receive rewards based on how much 
          you chat in this server. Rewards may vary, from roles to premium perks, but still, chat and be rewarded! As you progress, you get cooler
          and better rewards and access some features not available for normal members, such as private matchmaking, custom hoisted status, custom
          channel request and much more! Thanks for joining, hope you enjoy your stay! Oh, when you level up, you will see it in <#786580309092335667>.`)
          .setColor(0xa3ae7e)
          .setFooter(`New entry to levelup system: ${message.author.username}#${message.author.discriminator}`)
          .setTimestamp(new Date());
      message.channel.send(emb)
      const key = `${message.guild.id}-${message.author.id}`
      client.levels.ensure(key, {
        user: message.author.id,
        guild: message.guild.id,
        points: 0,
        level: 1
      });
      client.levels.inc(key, "points")
    }

    // ? Help message on mention
    if (message.mentions.has(client.user)) {
      let emb = new MessageEmbed()
        .setAuthor("Hey there disciple! I am the Swamp Overseer!")
        .setDescription(
          `As you invoked me, now you can see the stuff I can do. To start off, you should see what commands I can run by saying **${client.prefix}help**. If you want more info about me, just run **${client.prefix}info**. Apart all, be sure to have fun trying me!`
        )
        .addField("What is my prefix?", `${client.prefix}`)
        .addField("Bot library", "Discord.js 12.3.2")
        .addField("Version", "1.8")
        .addField("GitHub branch", "master")
        .addField("Special thanks to", "TheRealJT for contributing")
        .setColor(0xa3ae7e)
        .setFooter(
          "Bot made by SweetieRick. This bot is a special version of the known bot SimpleMemerBot made only for this server!"
        );
      message.channel.send(emb);
    }


    // ? Auto-response algorithm
    switch (message.content.toLowerCase()) {
      case 'i deserve coffee':
        message.channel.send(`No ${message.author.username}, go back to work u dumbass`)
        break;
      case 'no u':
        const unocard = new MessageAttachment('https://media.giphy.com/media/VF5ZXlzQ8VcMpgJr1G/giphy.gif')
        message.channel.send(unocard)
        break;
      case 'pray shrek':
        message.channel.send(":pray:")
        break;
      case 'i like my creation':
        if (message.author.username === 'SweetieRick') {
          return message.channel.send("Watch out, I may kill u")
        } else {
          return message.channel.send(":heart:")
        }
      case 'ur gay':
        message.channel.send('https://test.rauf.workers.dev/?author=you+are+the+real+gay')
        break;
    }
  }
}
