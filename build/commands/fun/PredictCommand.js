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
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });
const database = mongoose.connection;
database.on("error", console.error.bind(console, "connection error:"));
database.once("open", function () {
    console.log("DATABASE: Connected new mongoDB database on PredictCommand");
});
const predictionsSchema = new mongoose.Schema({
    description: String,
});
const Prediction = mongoose.model("prediction", predictionsSchema);
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
            // ? I will massively add those default vars and add them to the database
            var pr1 = new Prediction({
                description: "you will die of terminal dankness",
            });
            var pr2 = new Prediction({ description: "you will have a lovely gf ❤" });
            var pr3 = new Prediction({
                description: "you will receive free money from Mr. Beast",
            });
            var pr4 = new Prediction({
                description: "Shrek will bless you with his greatness",
            });
            var pr5 = new Prediction({
                description: "yOu ArE tHe ImPoStOR! I sEe yOu WiLl VeNt!",
            });
            var pr6 = new Prediction({
                description: "you will live a wonderful life 😘",
            });
            var pr7 = new Prediction({
                description: "you will be chosen for exploring Antartica",
            });
            var pr8 = new Prediction({
                description: "you will be considered a city hero",
            });
            var pr9 = new Prediction({
                description: "you will be healthy and you will grow as a perfect Shrekling",
            });
            var pr10 = new Prediction({
                description: "you.. no sorry the dev will run out of ideas 😞... that's why you should do `s!predictsuggest <description>` in chat!",
            });
            var pr11 = new Prediction({
                description: "Obi-Wan will take you as his apprendice",
            });
            pr1.save(function (err) {
                if (err)
                    return console.error(err);
            });
            pr2.save(function (err) {
                if (err)
                    return console.error(err);
            });
            pr3.save(function (err) {
                if (err)
                    return console.error(err);
            });
            pr4.save(function (err) {
                if (err)
                    return console.error(err);
            });
            pr5.save(function (err) {
                if (err)
                    return console.error(err);
            });
            pr6.save(function (err) {
                if (err)
                    return console.error(err);
            });
            pr7.save(function (err) {
                if (err)
                    return console.error(err);
            });
            pr8.save(function (err) {
                if (err)
                    return console.error(err);
            });
            pr9.save(function (err) {
                if (err)
                    return console.error(err);
            });
            pr10.save(function (err) {
                if (err)
                    return console.error(err);
            });
            pr11.save(function (err) {
                if (err)
                    return console.error(err);
            });
            // ! This is a pain in the butt to load, so in future releases I will add a more efficent way to add them to DB
            const chosenpredit = predictionsSchema.find[Math.floor(Math.random() * predictionsSchema.all)];
            let nextembed = new discord_js_1.MessageEmbed()
                .setAuthor("Shrek predicted your future!")
                .setDescription(`In your future... ${chosenpredit}`)
                .setColor(0xa3ae7e);
            message.channel.send(nextembed);
        });
    }
}
exports.default = PredictCommand;
