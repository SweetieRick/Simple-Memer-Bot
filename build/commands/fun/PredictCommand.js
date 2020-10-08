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
class PredictCommand extends BaseCommand_1.default {
    constructor() {
        super("Predict", "fun", ["predict", "pred"]);
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            var Predictions = [
                "you will die of terminal dankness",
                "you will receive free money from Mr. Beast",
                "Shrek will bless you with his greatness",
                "yOu ArE tHe ImPoStOR! I sEe yOu WiLl VeNt!",
                "you will live a wonderful life 😘",
                "you will be chosen for exploring Antartica",
                "you will be considered a city hero",
                "you will be healthy and you will grow as a perfect Shrekling",
                "you.. no sorry the dev will run out of ideas 😞... that's why you should do `s!predictsuggest <description>` in chat!",
                "Obi-Wan will take you as his apprendice",
                "you will got to brazil",
            ];
            /*
            switch (args[1]) {
              case "add":
                if (!args[2]) {
                  return message.channel.send(
                    "Sorry, but for adding a predict you need to write `s!predict add <your predict>`. To see how to make a good predict write `s!predict help`"
                  );
                }
                var newpredict = args[2];
                Predictions.push(newpredict);
                break;
              case "viewall":
                if (!message.member.hasPermission("ADMINISTRATOR")) {
                  return message.channel.send(
                    "You dummy, you can't see into Shrek's mind!"
                  );
                }
                let viewemb = new MessageEmbed()
                  .setAuthor("Predictions: admin panel")
                  .setDescription(
                    `Here there are all my predictions for now: ${Predictions}, with a total of ${Predictions.length}`
                  )
                  .setColor(0xa3ae7e);
                message.member.send(viewemb);
                break;
              case "help":
                let helpemb = new MessageEmbed()
                  .setAuthor("Predictions: help page")
                  .setDescription(
                    `The predict command lets Shrek see into your future and give a verdict. Just do ${client.prefix}predict !`
                  )
                  .addField(
                    "Prediction suggestions",
                    `If you want to suggest a predict Shrek will say, just do ${client.prefix}predict add <description>. \n To make a good command follow these guidelines: \n • Start the predict with "you will..." \n • Don't put offensive content on the predict \n • Don't exceed the 80 caracters limit`
                  )
                  .setColor(0xa3ae7e)
                  .setFooter(`${message.author.tag}`);
                message.channel.send(helpemb);
                break;
            } */
            let embed = new discord_js_1.MessageEmbed()
                .setAuthor("`Shrek predicts your future`")
                .setDescription(`🔮 Hold up a second ${message.author}, Shrek is looking in your future...`)
                .setColor(0xa3ae7e);
            message.channel.send(embed);
            const chosenpredit = Predictions.find[Math.floor(Math.random() * Predictions.length)];
            let nextembed = new discord_js_1.MessageEmbed()
                .setAuthor("Shrek predicted your future!")
                .setDescription(`In your future... ${chosenpredit}`)
                .setColor(0xa3ae7e);
            message.channel.send(nextembed);
        });
    }
}
exports.default = PredictCommand;
