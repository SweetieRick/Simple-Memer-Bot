import { Message, MessageAttachment, MessageEmbed, MessageMentions, WebhookClient, TextChannel, GuildMember } from "discord.js";
import DiscordClient from "./client/client";
import BaseEvent from "./utils/structures/BaseEvent";

const client = new DiscordClient({});
const message = Message

function createStableMessage(member) {
    try {
      member.createDM().then(member.send("poggers"))
      console.log("Sent a random poggers to an user")
    } catch {
        console.error("Could not retrieve user info, skipping")
    }
  }

function getTextChannel(id, guild) {
    const logChannel = client.guilds.cache.find(channel => channel.id == '755135782573965374')

    if (!logChannel) return;

    // if (!((logChannel): logChannel is TextChannel => logChannel.type === 'text')(logChannel)) return;
}

module.exports.createStableMessage = createStableMessage
module.exports.getTextChannel = getTextChannel