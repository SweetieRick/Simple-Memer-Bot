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
class HelpCommand extends BaseCommand_1.default {
    constructor() {
        super("help", "info", []);
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            let embed = new discord_js_1.MessageEmbed()
                .setAuthor("The Swamp Overseer's")
                .setDescription(`Hey there! I am the Swamp Overseer and I am the protector of the swamp. I help Shrek keeping the church alive and holy as always. Try doing ${client.prefix}commands to see what I can do! Also, don't forget to pray your god Shek with ${client.prefix}pray !`)
                .addField("📬 Info Commands", `${client.prefix}help, ${client.prefix}info`, true)
                .addField("👮‍♀ Moderation Commands", `${client.prefix}warn, ${client.prefix}prison`, true)
                .addField("😂 Fun Commands", `${client.prefix}predict, ${client.prefix}pressf , ${client.prefix}emj <emoji name>, ${client.prefix}lvl`, true)
                .addField("⚙️ Utility Commands", `${client.prefix}nightwatch, ${client.prefix}onlinemode, ${client.prefix}adminpanel`, true)
                .addField("🔐 Developer Reserved", `${client.prefix}test, ${client.prefix}showtable, ${client.prefix}flush`, true)
                .setColor(0xa3ae7e);
            message.channel.send(embed);
        });
    }
}
exports.default = HelpCommand;
