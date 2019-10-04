const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports.run = (bot, message, args) => {

    if (message.author.bot) return;
    if(message.channel.type !=="text") return;

    randomPuppy ("meme").then (url => {
        const embed = new Discord.RichEmbed()
        .setTimestamp()
        .setImage(url)
        message.channel.send(embed);
    })
}

module.exports.help = {
    name: "meme"
}