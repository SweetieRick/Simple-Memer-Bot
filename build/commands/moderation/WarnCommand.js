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
const BaseCommand_1 = __importDefault(require("../../utils/structures/BaseCommand"));
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const db = require("quick.db");
class WarnCommand extends BaseCommand_1.default {
    constructor() {
        super("Warn", "moderation", []);
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            /*
            if (!message.member.hasPermission("ADMINISTRATOR")) {
              return message.channel.send(
                "You should have admin perms to use this command!"
              );
            }
        
            const user = message.mentions.members.first();
        
            if (!user) {
              return message.channel.send(
                "Please Mention the person to who you want to warn - warn @mention <reaosn>"
              );
            }
        
            if (message.mentions.users.first().bot) {
              return message.channel.send("You can not warn bots");
            }
        
            if (message.author.id === user.id) {
              return message.channel.send("You can not warn yourself");
            }
        
            if (user.id === message.guild.owner.id) {
              return message.channel.send(
                "You jerk, how you can warn server owner -_-"
              );
            }
        
            const reason = args.slice(1).join(" ");
        
            if (!reason) {
              return message.channel.send(
                "Please provide reason to warn - warn @mention <reason>"
              );
            }
        
            let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);
        
            // if(warnings === 1) {
            //   return message.channel.send(`${message.mentions.users.first().username} already reached his/her limit with 3 warnings`)
            // }
            // if(warnings === 2) {
            //   db.add(`warnings_${message.guild.id}_${user.id}`, 2)
            //   db.set(`warnings_${message.guild.id}_${user.id}`, 2)
            //   // user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
            //   await message.channel.send(`You warned second time **${message.mentions.users.first().username}** for ${reason}`)
            // }
            if (warnings === null) warnings = 1;
            if (warnings === null) {
              // if(warnings === null) warnings = 1;
              db.set(`warnings_${message.guild.id}_${user.id}`, 1);
              // user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
              await message.channel.send(
                `You warned **${
                  message.mentions.users.first().username
                }** for ${reason}`
              );
            } else if (warnings === null) warnings = 1;
            if (warnings !== null) {
              db.add(`warnings_${message.guild.id}_${user.id}`, 2);
              //  user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
              let warrole = message.guild.roles.cache.find((r) => r.name === "warn1");
              user.roles.add(warrole.id);
              // await message.channel.send(`You warned  blabla **${message.mentions.users.first().username}** for ${reason}`)
            }
        
            if (warnings === 2) warnings = 2;
            if (warnings === 2) {
              db.set(`warnings_${message.guild.id}_${user.id}`, 2);
              // await message.channel.send(`You warned second time **${message.mentions.users.first().username}** for ${reason}`)
            }
        
            if (warnings === 3) warnings = 3;
            if (warnings === 3) {
              // if(warnings === 3) warnings = 3;
              db.set(`warnings_${message.guild.id}_${user.id}`, 3);
              await message.channel.send(
                `You warned third time **${
                  message.mentions.users.first().username
                }** for ${reason}`
              );
            } else if (warnings === 3) warnings = 3;
            if (warnings !== 3) {
              db.set(`warnings_${message.guild.id}_${user.id}`, 3);
              //  user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
              // let warrole = message.guild.roles.cache.find(r => r.name === "warn1");
              //  user.roles.add(warrole.id);
              // await message.channel.send(`You warned  blabla **${message.mentions.users.first().username}** for ${reason}`)
            }
        
            let warnEmbed = new Discord.MessageEmbed()
              .setDescription("Warns")
              .setAuthor(message.author.username)
              .setColor("#a009eb")
              .addField("Warned User", user)
              .addField("Warned By", `<@${message.author.id}>`)
              .addField("Warned In", message.channel)
              .addField("Number of Warnings", warnings)
              .addField("Reason", reason);
        
            //  wUser.send(warnEmbed);
            //  message.reply(`${ser} has been warned`);
        
            let warnchannel = message.guild.channels.cache.find(
              (chan) => chan.name === "『❗』warnings"
            );
            if (!warnchannel) return message.reply("Couldn't find channel!");
        
            warnchannel.send(warnEmbed);
            */
        });
    }
}
exports.default = WarnCommand;
