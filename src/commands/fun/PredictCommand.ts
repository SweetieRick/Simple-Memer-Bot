import { Message, MessageEmbed } from "discord.js";
import BaseCommand from "../../utils/structures/BaseCommand";
import DiscordClient from "../../client/client";

export default class PredictCommand extends BaseCommand {
  constructor() {
    super("Predict", "fun", ["predict", "pred"]);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    const predictions = [
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
      "SweetieRick will explode the world",
      "you will turn a nig_a mobile! Aahaha tranformable goes *brrrrr...*",
      "you will cover yourself in ice"
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
        predictions.push(newpredict);
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
            `Here there are all my predictions for now: ${predictions}, with a total of ${predictions.length}`
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

    let embed = new MessageEmbed()
      .setAuthor("Shrek predicts your future")
      .setDescription(
        `🔮 Hold up a second ${message.author}, Shrek is looking in your future...`
      )
      .setColor(0xa3ae7e);
    message.channel.send(embed);
    var chosenpredit =
      predictions[Math.floor(Math.random() * predictions.length)];
    console.log(`> Chosen predict debug: type ${chosenpredit}`);
    if (typeof chosenpredit === "string") {
      let nextembed = new MessageEmbed()
        .setAuthor("Shrek predicted your future!")
        .setDescription(`In your future... ${chosenpredit}`)
        .setColor(0xa3ae7e);
      message.channel.send(nextembed);
    }
    if (typeof chosenpredit === "undefined") {
      let erremb = new MessageEmbed()
        .setAuthor("An error happened")
        .setDescription(`The error code is 'undefined'`)
        .setFooter(
          "Please report this error to the developers with error code 0x1200"
        )
        .setColor("RED");
      message.channel.send(erremb);
    }
  }
}
