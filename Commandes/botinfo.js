const Discord = require("discord.js");
const bot = new Discord.Client

module.exports.run = async (bot, message, args) => {
    let boticon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Informations du bot")
    .setColor("0ED4DA")
    .setThumbnail(boticon)
    .addField("__**<:calendrier:624683894373089280>•Nom du bot**__", bot.user.username)
    .addField("__**<:bebe:625882700988809256>•Date de création**__", bot.user.createdAt)
    .addField("__**✈•Serveurs**__", bot.guilds.size)
    .addField("__**👥•Utilisateurs**__", bot.users.size)
    .addField("__**<:systme:625880548707139600>•Système**__", "Node JS version: `v10.16.3` \n Discord version: `v3.1.3` \n Librairie: `discord.js` \n**!Bot non hébergé!**")
    message.channel.send(botembed)
}

module.exports.help = {
    name: "botinfo"
}