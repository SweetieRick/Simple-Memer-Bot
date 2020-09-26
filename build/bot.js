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
const dotenv_1 = require("dotenv");
dotenv_1.config();
const registry_1 = require("./utils/registry");
const client_1 = __importDefault(require("./client/client"));
const client = new client_1.default({});
const Sequelize = require("sequelize");
(() => __awaiter(void 0, void 0, void 0, function* () {
    client.prefix = process.env.DISCORD_BOT_PREFIX || client.prefix;
    yield registry_1.registerCommands(client, "../commands");
    yield registry_1.registerEvents(client, "../events");
    // Start code here
    // ? Creates a new Database
    const sequelizeDB = new Sequelize("database", "user", "password", {
        host: "localhost",
        dialect: "sqlite",
        logging: false,
        // SQLite only
        storage: "database.sqlite",
    });
    // ? Creates a new Predictions table
    const Predictions = sequelizeDB.define("predictions", {
        prediction_number: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false,
        },
        description: Sequelize.TEXT,
    });
    // Pints all tags
    const tagList = yield Predictions.findAll({
        attributes: ["prediction_number"],
    });
    console.log(tagList);
    // Adds default predictions
    try {
        var pr1 = yield Predictions.create({
            prediction_number: 1,
            description: "you will die of terminal dankness",
        });
        var pr2 = yield Predictions.create({
            prediction_number: 1,
            description: "you will have a lovely gf ❤",
        });
        var pr3 = yield Predictions.create({
            prediction_number: 1,
            description: "you will receive free money from Mr. Beast",
        });
        var pr4 = yield Predictions.create({
            prediction_number: 1,
            description: "Shrek will bless you with his greatness",
        });
        var pr5 = yield Predictions.create({
            prediction_number: 1,
            description: "yOu ArE tHe ImPoStOR! I sEe yOu WiLl VeNt!",
        });
        var pr6 = yield Predictions.create({
            prediction_number: 1,
            description: "you will live a wonderful life 😘",
        });
        var pr7 = yield Predictions.create({
            prediction_number: 1,
            description: "you will be chosen for exploring Antartica",
        });
        var pr8 = yield Predictions.create({
            prediction_number: 1,
            description: "you will be considered a city hero",
        });
        var pr9 = yield Predictions.create({
            prediction_number: 1,
            description: "you will be healthy and you will grow as a perfect Shrekling",
        });
        var pr10 = yield Predictions.create({
            prediction_number: 1,
            description: "you.. no sorry the dev will run out of ideas 😞... that's why you should do `s!predictsuggest <description>` in chat!",
        });
        var pr11 = yield Predictions.create({
            prediction_number: 1,
            description: "Obi-Wan will take you as his apprendice",
        });
    }
    catch (err) {
        if (err.name === "SequelizeUniqueConstraintError") {
            return console.log("That tag already exists.");
        }
        return console.log("Something went wrong with adding a tag.");
    }
    // ? Syncs to database
    Predictions.sync();
    // Ends code there
    yield client.login(process.env.DISCORD_BOT_TOKEN);
}))();
