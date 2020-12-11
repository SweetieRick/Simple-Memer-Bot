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
const Enmap = require("enmap");
class PointsCommand extends BaseCommand_1.default {
    constructor() {
        super('points', 'Levels', ["p", "level", "lvl"]);
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            // We re-define the database key
            const key = `${message.guild.id}-${message.author.id}`;
            let emb = new discord_js_1.MessageEmbed()
                .setDescription(`Yo ***${message.author.username}#${message.author.discriminator}***, you currently have **${client.levels.get(key, "points")}** points on level **${client.levels.get(key, "level")}** . Doin' great!`)
                .setColor(0xa3ae7e);
            // We send the stats straigh from database
            message.channel.send(emb);
        });
    }
}
exports.default = PointsCommand;
