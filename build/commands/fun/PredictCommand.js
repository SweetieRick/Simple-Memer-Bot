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
const database = require("quick.db");
class PredictCommand extends BaseCommand_1.default {
    constructor() {
        super("predict", "fun", []);
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const predictions = new database.table("PredictionCommandResponses");
            database.set("predictions", [
                "you will die of terminal dankness",
                "you will have a lovely gf ❤",
                "you will receive free money from Mr. Beast",
                "Shrek will bless you with his greatness",
                "yOu ArE tHe ImPoStOR! I sEe yOu WiLl VeNt!",
                "you will live a wonderful life 😘",
                "you will be chosen for exploring Antartica",
                "you will be considered a city hero",
                "you will be healthy and you will grow as a perfect Shrekling",
                "you.. no sorry the dev will run out of ideas 😞",
                "Obi-Wan will take you as his apprendice",
            ]);
            let embed = new discord_js_1.MessageEmbed()
                .setAuthor("`Shrek predicts your future`")
                .setDescription(`🔮 Hold up a second ${message.author}, Shrek is looking in your future...`)
                .setColor(0xa3ae7e);
            message.channel.send(embed);
            predictions;
            const chosenpredit = predictions[Math.floor(Math.random() * predictions.length)];
            let nextembed = new discord_js_1.MessageEmbed()
                .setAuthor("Shrek predicted your future!")
                .setDescription(`In your future... ${chosenpredit}`)
                .setColor(0xa3ae7e);
            message.channel.send(nextembed);
            if (args[1] === "add") {
                let addemb = new discord_js_1.MessageEmbed()
                    .setDescription("`Error:` please specify the phrase you want to add to the list")
                    .setColor(0xa3ae7e);
                message.channel.send(addemb);
            }
            else if (args[1] === "viewall" &&
                message.member.hasPermission("ADMINISTRATOR")) {
                predictions;
                var allpredicts = predictions.all();
                let allembed = new discord_js_1.MessageEmbed()
                    .setAuthor("Shrek's Predicts")
                    .setDescription(`All the predicts are: ${allpredicts}. More will be added`)
                    .setColor(0xa3ae7e);
                message.channel.send(allembed);
            }
            else if (args[1] === "add" && args[2]) {
                var newpredict = args[2];
                database.push("predictions", `${newpredict}`);
                let addedemb = new discord_js_1.MessageEmbed()
                    .setDescription(`✅ Successfully added a new prediction! Your prediction is "${newpredict}"`)
                    .setColor(0xa3ae7e);
            }
        });
    }
}
exports.default = PredictCommand;
