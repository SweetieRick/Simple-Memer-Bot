"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const client_1 = __importDefault(require("./client/client"));
const client = new client_1.default({});
const message = discord_js_1.Message;
function createStableMessage(member) {
    try {
        member.createDM().then(member.send("poggers"));
        console.log("Sent a random poggers to an user");
    }
    catch (_a) {
        console.error("Could not retrieve user info, skipping");
    }
}
function getTextChannel(id, guild) {
    const logChannel = client.guilds.cache.find(channel => channel.id == '755135782573965374');
    if (!logChannel)
        return;
    // if (!((logChannel): logChannel is TextChannel => logChannel.type === 'text')(logChannel)) return;
}
module.exports.createStableMessage = createStableMessage;
module.exports.getTextChannel = getTextChannel;
