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
class FlushCommand extends BaseCommand_1.default {
    constructor() {
        super('flush', 'Levels', []);
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            let noperms = new discord_js_1.MessageEmbed()
                .setDescription("Hey there bucko, you are not my boss! Only the owner can use this command")
                .setColor(0xa3ae7e);
            // Let's clean up the database of all "old" users, 
            // and those who haven't been around for... say a month.
            try {
                if (message.author.id !== message.guild.ownerID) {
                    yield message.channel.send(noperms);
                }
                else {
                    // Get a filtered list (for this guild only).
                    const key = `${message.guild.id}-${message.author.id}`;
                    const filtered = client.levels.filter(p => p.guild === message.guild.id);
                    // We then filter it again 
                    // So we get only users that haven't been online for a month, or are no longer in the guild.
                    const rightNow = new Date().getTime();
                    const toRemove = filtered.filter(data => {
                        return !message.guild.members.cache.has(data.user) || rightNow - 2592000000 > data.lastSeen;
                    });
                    toRemove.forEach(data => {
                        client.levels.delete(key);
                    });
                    let emb = new discord_js_1.MessageEmbed()
                        .setDescription(`I've cleaned up ${toRemove.size} old farts from the roaster`)
                        .setColor(0xa3ae7e)
                        .setFooter(`${message.author.tag} flushed cache`, `${message.guild.iconURL({ dynamic: true })}`)
                        .setTimestamp(new Date());
                    message.channel.send(emb);
                }
            }
            catch (e) {
                let erroremb = new discord_js_1.MessageEmbed()
                    .setDescription("Something went wrong. If you are not the owner of the server, you should not attempt to run this command. Cache was not flushed, all data safe")
                    .setColor("RED");
                message.channel.send(erroremb);
            }
        });
    }
}
exports.default = FlushCommand;
