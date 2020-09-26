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
const Sequelize = require("sequelize");
class PredictCommand extends BaseCommand_1.default {
    constructor() {
        super("Predict", "fun", ["predict"]);
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const sequelizeDB = Sequelize.models.sequelizeDB;
            const Predictions = sequelizeDB.define("predictions", {
                prediction_number: {
                    type: Sequelize.INTEGER,
                    unique: true,
                    allowNull: false,
                },
                description: Sequelize.TEXT,
            });
            let embed = new discord_js_1.MessageEmbed()
                .setAuthor("`Shrek predicts your future`")
                .setDescription(`🔮 Hold up a second ${message.author}, Shrek is looking in your future...`)
                .setColor(0xa3ae7e);
            message.channel.send(embed);
            const chosenpredit = Predictions[Math.floor(Math.random() * Predictions.length)];
            let nextembed = new discord_js_1.MessageEmbed()
                .setAuthor("Shrek predicted your future!")
                .setDescription(`In your future... ${chosenpredit}`)
                .setColor(0xa3ae7e);
            message.channel.send(nextembed);
        });
    }
}
exports.default = PredictCommand;
