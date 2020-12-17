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
class WarnCommand extends BaseCommand_1.default {
    constructor() {
        super('Warn', 'moderation', ['warn', 'w']);
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            let low_perms = new discord_js_1.MessageEmbed().setAuthor("Error: cannot warn a member without permissions").setDescription(`${message.author}, you need to be moderator of this server to kick someone!`).setColor(0xa3ae7e);
            if (!message.member.hasPermission("KICK_MEMBERS"))
                yield message.channel.send(low_perms);
            const user = message.mentions.members.first().user.username;
            const dmuser = message.mentions.members.first();
            if (user) {
                let emb = new discord_js_1.MessageEmbed().setAuthor(`***:white_check_mark: ${message.author.username} succesfully warned ${user}!`).setColor('YELLOW');
                message.channel.send(emb);
                dmuser.send(`You have been warned by ${message.author.username} in ${message.guild.name}`);
            }
            else {
                yield message.channel.send('The user you mentioned is not valid!');
            }
        });
    }
}
exports.default = WarnCommand;
