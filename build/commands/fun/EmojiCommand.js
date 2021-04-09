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
const BaseCommand_1 = __importDefault(require("../../utils/structures/BaseCommand"));
class EmojiCommand extends BaseCommand_1.default {
    constructor() {
        super('emoji', 'fun', ['ej', 'emj']);
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (args[0]) {
                // These are animated emojis
                case 'nwodtleM':
                    message.channel.send("<a:nwodtleM:763851515399897090>");
                    break;
                case 'tada':
                    message.channel.send(`<a:tada:829672866681061406>`);
                    break;
                // These are the normal emojis with a funny twist
                case 'banhammer':
                    message.channel.send("<:banhammer_gulag:797031116573114399> Behold, the mighty ban hammer!");
                    break;
                case 'bonk':
                    message.channel.send(":boom: <:banhammer_gulag:797031116573114399>");
                    break;
                case 'drip':
                    message.channel.send("Their only fear is your drip <:goku_drip:797032832857538560>");
            }
        });
    }
}
exports.default = EmojiCommand;
