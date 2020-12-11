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
class PrisonCommand extends BaseCommand_1.default {
    constructor() {
        super('prison', 'moderation', ["kick"]);
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const target = message.mentions.members.first();
            const perms_missing = new discord_js_1.MessageEmbed().setAuthor("You don't have permissions to do that!").setDescription(`${message.author}, you need to be moderator of this server to kick someone!`).setColor(0xa3ae7e);
            const higher = new discord_js_1.MessageEmbed().setAuthor("You can't ban someone above you!").setDescription(`${message.author}, you can't kick someone higher in grade than you, even if he's in jail. Let the beeg bois take care of him`).setColor(0xa3ae7e);
            if (!message.member.hasPermission("ADMINISTRATOR") || !message.member.hasPermission("KICK_MEMBERS"))
                yield message.channel.send(perms_missing);
            if (message.member.roles.highest <= target.roles.highest)
                yield message.channel.send(higher);
            yield target.kick('Was kicked out of jail as he was not worthy');
        });
    }
}
exports.default = PrisonCommand;
