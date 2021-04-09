import { GuildMember, Message, Collection, Role } from 'discord.js';
import BaseCommand from '../../utils/structures/BaseCommand';
import DiscordClient from '../../client/client';
import { cooldownUserList } from '../../bot';

export default class ExploreCommand extends BaseCommand {
  constructor() {
    super('search', 'economy', ["src"]);
  }

  async run(client: DiscordClient, message: Message, args: Array<string>) {
    // All functions needed to do the randomiser

    const key = `${message.guild.id}-${message.author.id}`

      function searchSuccessful() {
        let randomwin = Math.floor(Math.random()*700)
        let userbal = client.economy.get(key, "coins")
        // Calculates the the total amount of coins after the win
        userbal += randomwin
        // Saves to database the whole result
        client.economy.set(key, userbal, "coins")

        // Selects a random win message
        var randmessagelist = [
          `You looked into a pantry box and you found **${randomwin}** coins. Looks like Midas touched that food`,
          `You searched into the basement and found **${randomwin}** coins, wondering who the fuck left them there`,
          `You descended into the Internet Grave Yard and found some reddit golds, worth **${randomwin}** coins`,
          `You went into Shrek's swamp and found **${randomwin}** coins in the mud. Someone shitted gold lmao`,
          `Let's say, hypotetically, we kidnapped your grandma and we gave you **${randomwin}** coins: yh no need to imagine pal!`,
          `You sponsored MrBeast, so now you get **${randomwin}** coins back from the sponsoship revenue`,
          `You spelunked your ass, and found **${randomwin}** coins together with an harmonica`,
          `You uploaded a video to YouTube and gained 2.3 mil views, increasing your ad revenue to **${randomwin}** dollars`,
          `You prayed Allah for money and he gave you a black stone, that you sell for **${randomwin}** dollars. Was just a colored stone, why is everyone angry at me?`,
          `You asked money to DaBaby, but he turns hiself into a corvertible instead. Good thing he left his wallet here, so you take it and gain **${randomwin}** dollars from it`,
          `You asked a 400 IQ guy for money, but instead he tells you the meaning of life, so you rob him and get **${randomwin}** coins. His wallet was large as his brain ig`,
        ]
        // This holds the random message
        var randmessage = randmessagelist[Math.floor(Math.random()*randmessagelist.length)]
        message.channel.send(randmessage)
      }

      function searchFail() {
        let randomlost = Math.floor(Math.random()*250)
        let userbal = client.economy.get(key, "coins")
        // Calculates the the total amount of coins after the lost and subtracts the lost to the account
        userbal -= randomlost
        // Saves to database the whole result
        client.economy.set(key, userbal, "coins")

        // Selects a random lost message
        var randmessagelist = [
          `You just lost **${randomlost}** coins to the cock lord. Lmao get cummed on`,
          `You did an oopsie and now you need to pay **${randomlost}** dollars to the feds`,
          `Bro, leave that pantry box for who needs it! You get charged **${randomlost}** dollars for stealing`,
          `You didn't pray Allah 3 times today, so you get arrested for beahviour against Halal traditions. You get charged **${randomlost}** coins to get out of prison`,
          `You were caught while you were searching into the trash bin and you get charged **${randomlost}**. What are you, an hobo?`,
          `Yoshi found you not paying the taxes, so you got caught and you now need to pay **${randomlost}** dollars.`
        ]
        // This holds the random message
        var randmessage = randmessagelist[Math.floor(Math.random()*randmessagelist.length)]

        // Checks if the user has 0 or less coins, if he does, then the count will be set to 0
        if (userbal <= 0)
            client.economy.set(key, 0, "coins")
        
        message.channel.send(randmessage)
      }

      function searchMultiplier() {
        let randommutilplier = Math.floor(Math.random()*900)*2
        let userbal = client.economy.get(key, "coins")
        // Calculates the amount of the win and adds it to the balance
        // + the multiplier applied which can either be 2x or even 3x
        userbal += randommutilplier
        // Saves to database the whole result
        client.economy.set(key, userbal, "coins")

        message.channel.send(`<a:tada:829672866681061406> Yooooo ${message.author.username}! You just received a **2x multiplier**! You got ${randommutilplier} shiny coins!`)
      }

      function searchDiamond() {
        let userdiamonds = client.economy.get(key, "diamonds")
        // Calculates the amount of diamonds the user has and it adds up one diamond
        userdiamonds += 1
        // Saves to database
        client.economy.set(key, userdiamonds, "diamonds")

        // Selects a random lost message
        var randmessagelist = [
          `You lifted a rock and found... a shiny <a:shiny_diamond:829598127832432660>!`,
          `You went mining and, inside some sturdy deepslate, you found one <a:shiny_diamond:829598127832432660>!`,
          `The feds came in your house and didn't find any illegal substance... so they rewarded you with a <a:shiny_diamond:829598127832432660>`,
          `You've found a secret chest containing one <a:shiny_diamond:829598127832432660>!`,
          `While you were spelunking in the trash can, you found a <a:shiny_diamond:829598127832432660>. Who threw that there?`
        ]
        // This holds the random message
        var randmessage = randmessagelist[Math.floor(Math.random()*randmessagelist.length)]

        message.channel.send(randmessage)
      }

      // This defines the main chance of getting a serch succesful, search fail or search multiplier
      var randomtabs = [
        {chance: 70.0, func: searchSuccessful},
        {chance: 19.5, func: searchFail},
        {chance: 9.0, func: searchMultiplier},
        {chance: 1.5, func: searchDiamond} // 0.02 chance is too low
      ]

      function callRandomSearch(list) {
        var rand = Math.random()*100 // get a random number between 0 and 1
        var accumulatedChance = 0 // used to figure out the current
      
        var found = list.find(function(element) { // iterate through all elements 
          accumulatedChance += element.chance // accumulate the chances
          return accumulatedChance >= rand // tests if the element is in the range and if yes this item is stored in 'found'
        })
        if(found) {
          console.log('Selected random match: ' + rand)
          found.func()
        } else {
          console.log('^^ No selected random match: ' + rand)
        }
      }

      /* * * * * * * * * * * * * * * * * * * * * * * */

      // Main command logic (using async functions)
      
      if (cooldownUserList.has(message.author.id)) {
        await message.channel.send({
          embed: {
            title: "Chill bro, ur on cooldown",
            description: "You'll need to wait `10` seconds before searching again. \n Relax, sit here and get some vodka",
            color: 0xa3ae7e
          }
        })
      } else {
        // Executes all functions we require
        callRandomSearch(randomtabs)
        cooldownUserList.add(message.author.id)
        setTimeout(() => {
          // Removes the user from the set after 15 seconds
          cooldownUserList.delete(message.author.id);
      }, 10000);
    }
  }
}