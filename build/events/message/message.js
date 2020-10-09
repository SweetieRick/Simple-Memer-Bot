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
class MessageEvent extends BaseEvent_1.default {
    constructor() {
        super("message");
    }
    run(client, message) {
        return __awaiter(this, void 0, void 0, function* () {
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
            if (message.mentions.has(client.user)) {
                let emb = new discord_js_1.MessageEmbed()
                    .setAuthor("Hey there disciple! I am the Swamp Overseer!")
                    .setDescription(`As you invoked me, now you can see the stuff I can do. To start off, you should see what commands I can run by saying **${client.prefix}help**. If you want more info about me, just run **${client.prefix}info**. Apart all, be sure to have fun trying me!`)
                    .setImage(`${client.user.avatar}`)
                    .addField("What is my prefix?", `${client.prefix}`)
                    .addField("Bot library", "Discord.js 12.3.2")
                    .addField("Version", "1.8")
                    .addField("GitHub branch", "master")
                    .setColor(0xa3ae7e)
                    .setFooter("Bot made by SweetieRick. This bot is a special version of the known bot SimpleMemerBot made only for this server!");
                message.channel.send(emb);
            }
        });
    }
}
exports.default = MessageEvent;
