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
class WalletCommand extends BaseCommand_1.default {
    constructor() {
        super('wallet', 'economy', ['bal', 'wallt']);
    }
    run(client, message, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = `${message.guild.id}-${message.author.id}`;
            const networth = yield Math.floor(client.economy.get(key, "coins") * 1.6);
            const diamonds = yield client.economy.get(key, "diamonds");
            message.channel.send({
                embed: {
                    title: `${message.author.username}'s Wallet ~ :moneybag:`,
                    description: `:coin: Balance: ${client.economy.get(key, "coins")} \n :dollar: Net-worth: ${networth} \n <a:shiny_diamond:829598127832432660> Diamonds: ${diamonds}`,
                    color: 0xa3ae7e
                }
            });
        });
    }
}
exports.default = WalletCommand;
