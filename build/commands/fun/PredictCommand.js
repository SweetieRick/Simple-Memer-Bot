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
exports.predictions = void 0;
const discord_js_1 = require("discord.js");
const BaseCommand_1 = __importDefault(require("../../utils/structures/BaseCommand"));
exports.predictions = [
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
];
class PredictCommand extends BaseCommand_1.default {
    constructor() {
        super("Predict", "fun", ["predict"]);
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            let embed = new discord_js_1.MessageEmbed()
                .setAuthor("`Shrek predicts your future`")
                .setDescription(`🔮 Hold up a second ${message.author}, Shrek is looking in your future...`)
                .setColor(0xa3ae7e);
            message.channel.send(embed);
            const chosenpredit = exports.predictions[Math.floor(Math.random() * exports.predictions.length)];
            let nextembed = new discord_js_1.MessageEmbed()
                .setAuthor("Shrek predicted your future!")
                .setDescription(`In your future... ${chosenpredit}`)
                .setColor(0xa3ae7e);
            message.channel.send(nextembed);
        });
    }
}
exports.default = PredictCommand;
