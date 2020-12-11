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
const discord_js_1 = require("discord.js");
const BaseCommand_1 = __importDefault(require("../../utils/structures/BaseCommand"));
const functions = require('../../functions');
class InfoCommand extends BaseCommand_1.default {
    constructor() {
        super('info', 'info', []);
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            let infos = new discord_js_1.MessageEmbed()
                .setAuthor(`${client.user.username}`, `${client.user.displayAvatarURL({ dynamic: true })}`)
                .setDescription(`As you invoked me, now you can see the stuff I can do. To start off, you should see what commands I can run by saying **${client.prefix}help**. If you want more info about me, just run **${client.prefix}info**. Apart all, be sure to have fun trying me!`)
                .addField("What is my prefix?", `${client.prefix}`)
                .addField("Bot library", `discord.js 1.12.1`)
                .addField("Bot Version", "1.4")
                .addField("Uptime", `${functions.getLastRestart()}`)
                .addField("Collaborators", "TheRealJT, Candy, Shrek")
                .addField("Commands", `${client.commands.array().length} loaded`)
                .setColor(0xa3ae7e)
                .setFooter("Bot made by SweetieRick. This bot is a special version of the known bot SimpleMemerBot made only for this server!");
        });
    }
}
exports.default = InfoCommand;
