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
class StartsingsCommand extends BaseCommand_1.default {
    constructor() {
        super('startsings', 'fun', ["sings+", "newsings"]);
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const songName = args[0];
            const songDuration = args[1];
            let error = new discord_js_1.MessageEmbed()
                .setDescription(`Sorry buddy, you must specify a song name and a duration! Tip: command usage is ` + '`' + `${client.prefix}newsings <song name> <song duration> <ping everyone? true/false>` + '`')
                .setColor(0xa3ae7e);
            const pingEveryone = args[2];
            if (pingEveryone === 'true' && message.author.id === message.guild.ownerID)
                yield message.channel.send("<@&755113862298337302>");
            if (songDuration && songName) {
                if (message.author.id === message.guild.ownerID) {
                    let emb = new discord_js_1.MessageEmbed()
                        .setTitle(`Hey people! Welcome to the stage!`)
                        .setDescription(`Are you ready to party? New Discord Sings is now LIVE! Let's see what we have in plan:`)
                        .addField("What's the song?", `**${songName}**`)
                        .addField("What's the duration?", `*${songDuration}*`)
                        .addField("Who is the DJ tonight?", `${message.author.username}`)
                        .setFooter(`Started a new sings!`, `${message.guild.iconURL({ dynamic: true })}`)
                        .setTimestamp(new Date())
                        .setColor("PURPLE");
                    yield message.channel.send(emb);
                }
                else {
                    yield message.channel.send("Sorry dude, but you can't start a new sings without a DJ role!");
                }
            }
            else {
                yield message.channel.send(error);
            }
        });
    }
}
exports.default = StartsingsCommand;
