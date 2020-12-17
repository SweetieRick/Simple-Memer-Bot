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
const BaseEvent_1 = __importDefault(require("../../utils/structures/BaseEvent"));
const client_1 = __importDefault(require("../../client/client"));
const bot = new client_1.default();
const Discord = require("discord.js");
class ReadyEvent extends BaseEvent_1.default {
    constructor() {
        super("ready");
    }
    run(client, message) {
        return __awaiter(this, void 0, void 0, function* () {
            const daytime = new Date();
            client.user.setPresence({ status: "online" });
            console.log(`Bot logged in as ${client.user.username} at ${daytime}`);
            setTimeout(() => {
                client.user.setActivity("Guarding the swamp 24/7", { type: "PLAYING" });
            }, 20000);
        });
    }
}
exports.default = ReadyEvent;
