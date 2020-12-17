import BaseEvent from "../../utils/structures/BaseEvent";
import { Message, MessageAttachment, MessageEmbed, MessageMentions, WebhookClient, TextChannel } from "discord.js";
import DiscordClient from "../../client/client";
import { setMaxListeners } from 'process';
const Enmap = require("enmap");
const chalk = require("chalk")


export default class MessageEvent extends BaseEvent {
  constructor() {
    super("message");
  }

  async run(client: DiscordClient, message: Message) {
    // This allows to put more listeners to a same client to avoid data leaks
    // ! THIS MIGHT BE A PROBLEM WITH THE CODE
    setMaxListeners(0)

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
      /* let emb = new MessageEmbed()
          .setAuthor(`Sup ${message.author.username}! Ready to level?`, `${message.author.displayAvatarURL({dynamic: true})}`)
          .setDescription(`**How it works?** First, welcome here at ${message.guild.name}! From now on, you can receive rewards based on how much 
          you chat in this server. Rewards may vary, from roles to premium perks, but still, chat and be rewarded! As you progress, you get cooler
          and better rewards and access some features not available for normal members, such as private matchmaking, custom hoisted status, custom
          channel request and much more! Thanks for joining, hope you enjoy your stay! Oh, when you level up, you will see it in <#786580309092335667>.`)
          .setColor(0xa3ae7e)
          .setFooter(`New entry to levelup system: ${message.author.username}#${message.author.discriminator}`)
          .setTimestamp(new Date());
      message.channel.send(emb)
      */
      // We setup a key for the new database
      const key = `${message.guild.id}-${message.author.id}`
      // Here we ensure a table for the user exists in the database as they join
      // the server the bot is in
      client.levels.ensure(key, {
        user: message.author.id,
        guild: message.guild.id,
        points: 0,
        level: 1
      });
      client.levels.inc(key, "points")

      // Checking last level! This basically does a square root of the points
      // and multiplies by 0.1 to get the current amount of points
      // ! This can be used to alter the rate of leveling up
      const lastLevel = Math.floor(0.1 * Math.sqrt(client.levels.get(key, "points")));

      // We see if the current level is higher: if it is, then we level up!
      if (client.levels.get(key, "level") < lastLevel) {
        let emb = new MessageEmbed().setDescription(`:tada: Congratz ${message.author.username}, your power grew of 1%, so now you are **${lastLevel}**% holy!`)
        message.channel.send(emb)

        // Sends a webhook to the levelup channel, * also cuz I am lazy *
        const LevelHook = new WebhookClient('786896998682722386', 'Iv2trO_fUviKhzHWR2uwCO0Mnh1x63_FeAs3wKY2IaThghHusHM2kVPcOi8aU9b7F0nd')
        var LevelMessages = [
          `<@${message.author.id}> Just became **${lastLevel}**% holy. Shrek is proud of him`,
          `Congraz <@${message.author.id}> for leveling up to **${lastLevel}**. Shrek is proud of him`,
          `You leveled up to **${lastLevel}**, <@${message.author.id}>! The church will watch your career with great interest!`,
          `<@${message.author.id}> levelled up to **${lastLevel}**! Shrek will give you a handshake`,
          `Shrek while looking at his church just noticed that <@${message.author.id}> levelled up and reached **${lastLevel}**! Keep it on!`,
          `<@${message.author.id}> Just levelled up to **${lastLevel}**, so Lord Shrek invites him to the meme lord dinner (tasty)`,
          `<@${message.author.id}>-chan, what are you doing :flushed: ... everyone can see you levelled up to **${lastLevel}**!`,
          `**${lastLevel}** was tought unreachable, but <@${message.author.id}> did! *You crazy son of a bitch, you did it!*`,
          `<@${message.author.id}> levelled up. Now he's a lvl. **${lastLevel}** Mafia Boss`
        ]
        // var MilestoneMessages = new Map()
        var randomMsg = LevelMessages[Math.floor(Math.random() * LevelMessages.length)]
        LevelHook.send(randomMsg)
        // Sets the points to current level
        client.levels.set(key, lastLevel, "level");
      }
    }

    // ? Help message on mention
    if (message.mentions.has(client.user)) {
      let emb = new MessageEmbed()
        .setDescription(`I saw you were screaming **${message.author.username}**, so here's my prefix: ` + "`" + `${client.prefix}` + "`")
      message.channel.send(emb);
    }

    // ? DM support system
    // Work in progress

    const logg = client.channels.cache.get('755135782573965374')

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
      case 'just like reality':
        message.channel.send("Just like the **simulations**, retarded")
        break;
      case 'reddit moment':
        message.channel.send("here's your reddit gold, retard")
        break;
      case 'poggers' || 'pog':
        // Special thing for N2005
        if (message.author.id === '324547646033494016') {
          const member = await message.guild.members.fetch('324547646033494016')
          member.createDM()
          member.send("poggers only for u")
        } else {
          message.channel.send("poggers")
        }
    }

    process.on("UnhandledPromiseRejection", (e) => {
      console.log(chalk.red("[!] ") + chalk.bgRed("UnhandledPromiseRejection: ") + e)
    })
    process.on("UnhandledPromiseRejectionWarning", (e) => {
      console.log(chalk.yellow("[⚠️] ") + chalk.bgYellow("UnhandledPromiseRejection: ") + e)
    })
  }
}
