const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Ryddim, En dévellopement");
    console.log("Le bot à bien été conncecté");
});

bot.login("NDM3NzIwMDQ1NTE1MTc4MDA1.Db6KIg.KuZ-_ZuSnrsgmzHFFkkdHf4yZKI");
