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
            const emb = new discord_js_1.MessageEmbed()
                .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
                .setTitle("Info Page")
                .addField("**Codekeeper**", `SweetieRick#6931`)
                .addField("**Library**", `Discord.js ^12.3.1`)
                .addField("**Useful Links**", `[Support Server](https://discord.gg/QbAFBj9) \n[Command List](about:blank) \n[Source Code](https://github.com/SweetieRick/Simple-Memer-Bot/tree/master)`)
                .setColor(0xa3ae7e);
            message.channel.send(emb);
        });
    }
}
exports.default = InfoCommand;
