/*
  `~-,-~'`~-,-~'`~-,-~' Information `~-,-~'`~-,-~'`~-,-~'
  Discord.js Docs: https://discord.js.org/#/docs/main/stable/general/welcome
*/

const Discord = require("discord.js");
const bot = new Discord.Client({autorun: true});

const emoji = require("emoji.json");

bot.on("ready", () => {
  console.log("I am ready!");
});

bot.on("message", msg => {

  // Our bot needs to know if it will execute a command
  // It will listen for messages that will start with `!`
  if (msg.content.substring(0, 1) == "!") {

    let args = msg.content.substring(1).split(" ");

    switch (args[0]) {

      case "vaq":
        msg.channel.send("Coders!");
        break;

      case "greet":
        msg.channel.send(`Hello, ${msg.author.username}!`);
        break;

      case "compliment":
        msg.channel.send(`${msg.author.username} is the hottest person alive! :heart:`);
        break;
        
      case "goodnight":
        const rndMsg = randomSelect([
          ¨Good night¨,
          ¨Sweet dreams¨,
          ¨Sleep tight¨,
          ¨Don´t let the vaq bugs bite¨,
          ¨\*good night kiss\*¨
        ]);
        msg.channel.send(`${rndMsg}, ${msg.author.username}! :sleeping:`);
        break;
        
      case "love":
        msg.channel.send(":heart:");
        break;

      case "bye":
        msg.channel.send("rip... :broken_heart:");
        break;

      case "wah":
        msg.channel.send("I'm sorry... :cry:");
        break;

      case "iwannabetheverybest":
        msg.channel.send("LIKE NO ONE EVER WAS!!!:smiley:");
        break;
      
      /* Never use this lol
      case "10printgoto10":
        msg.channel.send("!10printgoto10");
        break;
      */

      case "food":
        const gimmePossibleFoods = getEmoji("food");
        const gimmeFood = randomSelect(gimmePossibleFoods);
        msg.channel.send(`Here's some ${gimmeFood.name}, ${msg.author.username}. ${emoji[366].char} ${gimmeFood.char}`);
        break;

      // Just add any case commands if you want to..

    }
  }
});

// Helper Functions
const getEmoji = keyword => emoji.filter(item => item.keywords.includes(keyword));
const randomSelect = arr => arr[Math.floor(Math.random() * arr.length)];

// This must be this way!
bot.login(process.env.BOT_TOKEN);
