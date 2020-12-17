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
const Enmap = require('enmap');
class LeaderboardCommand extends BaseCommand_1.default {
    constructor() {
        super('leaderboard', 'Levels', ["lead", "pboard"]);
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const filtered = client.levels.filter(points => points.guild === message.guild.id).array();
            const sorted = filtered.sort((a, b) => b.points - a.points);
            const top10 = sorted.splice(0, 10);
            const emb = new discord_js_1.MessageEmbed()
                .setTitle(`Leaderboard of Epic Gamers | ${message.guild.name}`)
                .setAuthor(client.user.username, message.guild.iconURL())
                .setDescription("This is the top 10 best epic gamers of the swamp! The leaderboard works like this: the user with most points, basically wins, but they also need to be the highest level on the row, as they can have 100 points but they still are on level 1. All clear? Good, here's the results")
                .setColor(0xa3ae7e)
                .setFooter(`Showing results for ${message.guild.name}`, `${message.guild.iconURL({ dynamic: true })}`);
            for (const data of top10) {
                try {
                    emb.addField(client.users.cache.get(data.user).tag, `Level **${data.level}**, **${data.points}** points`);
                }
                catch (_a) {
                    emb.addField(`<@${data.user.id}>`, `Level **${data.level}**, **${data.points}** points`);
                }
            }
            yield message.channel.send(emb);
        });
    }
}
exports.default = LeaderboardCommand;
