const Discord = require("discord.js");
const client = new Discord.Client();
const TOKEN = process.env.TOKEN;
const PREFIX = process.env.PREFIX;

client.on("ready", () => {
  date = new Date();
  console.log(`Client logged in as ${client.user} at ${date}`);
});

client.login(TOKEN);
