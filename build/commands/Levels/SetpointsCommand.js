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
class SetpointsCommand extends BaseCommand_1.default {
    constructor() {
        super('setpoints', 'Levels', ["setlvl", "pset", "addpoints"]);
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            let error = new discord_js_1.MessageEmbed()
                .setDescription(`Hey **${message.author.tag}**, this command is owner only! If you need help, the sintax of the command is: ${client.prefix}setpoints @user <amount>`)
                .setColor(0xa3ae7e);
            const user = message.mentions.users.first() || client.users.cache.get(args[0]);
            const pointsToAdd = parseInt(args[1], 10);
            if (message.author.id !== message.guild.ownerID || !user || !pointsToAdd) {
                yield message.channel.send(error);
            }
            else {
                // Ensure there is a points entry for this user.
                const key = `${message.guild.id}-${message.author.id}`;
                client.levels.ensure(key, {
                    user: message.author.id,
                    guild: message.guild.id,
                    points: 0,
                    level: 1
                });
                // Get their current points.
                if (pointsToAdd >= 9999) {
                    let toomuch = new discord_js_1.MessageEmbed().setDescription(`Yo dude, ${pointsToAdd} is a bit too much ye?`).setColor(0xa3ae7e);
                    yield message.channel.send(toomuch);
                }
                else {
                    let userPoints = client.levels.get(key, "points");
                    userPoints += pointsToAdd;
                    let doneemb = new discord_js_1.MessageEmbed()
                        .setDescription(`Whoa ${user.tag}! Someone just added **${pointsToAdd}** to your level card! Now you have **${userPoints}** points!`)
                        .setColor(0xa3ae7e)
                        .setFooter(`Operation done by ${message.author.tag}, authored by validation token`);
                    // Saving them to the database on that user's entry
                    client.levels.set(key, userPoints, "points");
                    message.channel.send(doneemb);
                }
            }
        });
    }
}
exports.default = SetpointsCommand;
