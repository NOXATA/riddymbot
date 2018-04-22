const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Ryddim, En dévellopement");
    console.log("Le bot à bien été conncecté");
});

bot.login(process.env.TOKEN);
