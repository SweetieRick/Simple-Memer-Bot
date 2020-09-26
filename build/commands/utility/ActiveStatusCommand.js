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
class ActiveStatusCommand extends BaseCommand_1.default {
    constructor() {
        super("onlinemode", "utility", []);
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                let embederr = new discord_js_1.MessageEmbed().setDescription("❌ You are not enough holy to run this");
                message.channel.send(embederr);
            }
            const daytime = new Date();
            client.user.setActivity("Swamp Overseer | s!help", { type: "PLAYING" });
            client.user.setPresence({ status: "online" });
            let embed = new discord_js_1.MessageEmbed()
                .setAuthor("The Overseer was put in Online mode!")
                .setDescription("🔥 All the services and processes are back to normal!")
                .setColor(0xa3ae7e);
            message.channel.send(embed);
        });
    }
}
exports.default = ActiveStatusCommand;
