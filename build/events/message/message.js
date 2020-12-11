"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseEvent_1 = __importDefault(require("../../utils/structures/BaseEvent"));
const discord_js_1 = require("discord.js");
const Enmap = require("enmap");
class MessageEvent extends BaseEvent_1.default {
    constructor() {
        super("message");
    }
    run(client, message) {
        return __awaiter(this, void 0, void 0, function* () {
            client.levels = new Enmap({ name: "levels" });
            // ? Command Handling
            if (message.author.bot)
                return;
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
                const key = `${message.guild.id}-${message.author.id}`;
                // Here we ensure a table for the user exists in the database as they join
                // the server the bot is in
                client.levels.ensure(key, {
                    user: message.author.id,
                    guild: message.guild.id,
                    points: 0,
                    level: 1
                });
                client.levels.inc(key, "points");
                // Checking last level! This basically does a square root of the points
                // and multiplies by 0.1 to get the current amount of points
                // ! This can be used to alter the rate of leveling up
                const lastLevel = Math.floor(0.1 * Math.sqrt(client.levels.get(key, "points")));
                // We see if the current level is higher: if it is, then we level up!
                if (client.levels.get(key, "level") < lastLevel) {
                    let emb = new discord_js_1.MessageEmbed().setDescription(`:tada: Congratz ${message.author.username}, your power grew of 1%, so now you are **${lastLevel}**% holy!`);
                    message.channel.send(emb);
                    // Sends a webhook to the levelup channel, * also cuz I am lazy *
                    const LevelHook = new discord_js_1.WebhookClient('786896998682722386', 'Iv2trO_fUviKhzHWR2uwCO0Mnh1x63_FeAs3wKY2IaThghHusHM2kVPcOi8aU9b7F0nd');
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
                    ];
                    // var MilestoneMessages = new Map()
                    var randomMsg = LevelMessages[Math.floor(Math.random() * LevelMessages.length)];
                    LevelHook.send(randomMsg);
                    // Sets the points to current level
                    client.levels.set(key, lastLevel, "level");
                }
            }
            // ? Help message on mention
            if (message.mentions.has(client.user)) {
                let emb = new discord_js_1.MessageEmbed()
                    .setAuthor("Hey there disciple! I am the Swamp Overseer!")
                    .setDescription(`As you invoked me, now you can see the stuff I can do. To start off, you should see what commands I can run by saying **${client.prefix}help**. If you want more info about me, just run **${client.prefix}info**. Apart all, be sure to have fun trying me!`)
                    .addField("What is my prefix?", `${client.prefix}`)
                    .addField("Bot library", "Discord.js 12.3.2")
                    .addField("Version", "1.8")
                    .addField("GitHub branch", "master")
                    .addField("Special thanks to", "TheRealJT for contributing")
                    .setColor(0xa3ae7e)
                    .setFooter("Bot made by SweetieRick. This bot is a special version of the known bot SimpleMemerBot made only for this server!");
                message.channel.send(emb);
            }
            // ? DM support system
            // Work in progress
            const logg = client.channels.cache.get('755135782573965374');
            // ? Auto-response algorithm
            switch (message.content.toLowerCase()) {
                case 'i deserve coffee':
                    message.channel.send(`No ${message.author.username}, go back to work u dumbass`);
                    break;
                case 'no u':
                    const unocard = new discord_js_1.MessageAttachment('https://media.giphy.com/media/VF5ZXlzQ8VcMpgJr1G/giphy.gif');
                    message.channel.send(unocard);
                    break;
                case 'pray shrek':
                    message.channel.send(":pray:");
                    break;
                case 'i like my creation':
                    if (message.author.username === 'SweetieRick') {
                        return message.channel.send("Watch out, I may kill u");
                    }
                    else {
                        return message.channel.send(":heart:");
                    }
                case 'ur gay':
                    message.channel.send('https://test.rauf.workers.dev/?author=you+are+the+real+gay');
                    break;
                case 'just like reality':
                    message.channel.send("Just like the **simulations**, retarded");
                    break;
                case 'reddit moment':
                    message.channel.send("here's your reddit gold, retard");
                    break;
                case 'poggers' || 'pog':
                    // Special thing for N2005
                    if (message.author.id === '324547646033494016') {
                        const member = yield message.guild.members.fetch('324547646033494016');
                        member.createDM();
                        member.send("poggers only for u");
                    }
                    else {
                        message.channel.send("poggers");
                    }
            }
        });
    }
}
exports.default = MessageEvent;
