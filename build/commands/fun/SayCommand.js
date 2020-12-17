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
class SayCommand extends BaseCommand_1.default {
    constructor() {
        super('say', 'fun', ['tell']);
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!message.member.roles.cache.has(process.env.JESTER_ROLE)) {
                let noperms = new discord_js_1.MessageEmbed()
                    .setDescription(`Yo man, this command requires the Jester role to be run! If you think this is an error, tell the owner of the server to review the configuration`)
                    .setColor(0xa3ae7e);
                yield message.channel.send(noperms);
            }
            else {
                const phrase = args.join(" ");
                if (!phrase) {
                    let nophrase = new discord_js_1.MessageEmbed()
                        .setDescription(`What should I say? Remember that you need to write the phrase after the command, like ` + "`" + `${client.prefix}say <text> ` + "`" + `for example`)
                        .setColor(0xa3ae7e);
                    yield message.channel.send(nophrase);
                }
                yield message.channel.send(phrase);
            }
        });
    }
}
exports.default = SayCommand;
