const Discord = require("discord.js");

 exports.run = async(bot, message, args) => {


    let userIcon = message.author.avatarURL;
    let botIcon = bot.user.avatarURL;
    let inline = true;

    var serverinfo = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField("**__Nom du serveur__**", message.guild.name, inline)
    .addField("**__L'ID du serveur__**", message.guild.id, inline)
    .addField("**__Propriétaire__**", message.guild.owner, inline)
    .addField("**__Région__**", message.guild.region, inline)
    .addField("**__Roles__**", message.guild.roles.size, inline)
    .addField("**__Emojis__**", message.guild.emojis.size, inline)
    .addField("**__Salons__**", message.guild.channels.size, inline)
    .addField("**__Rejoint le__**", message.member.joinedAt, inline)
    .addField("**__Membres au total__**", `${message.guild.memberCount} membres`, inline)
    .addField("**__En ligne__**", `<a:en_ligne:603704729645613061>${message.guild.members.filter(o => o.presence.status === "online").size} en ligne`)
    .addField("**__Hors ligne__**", `${message.guild.members.filter(o => o.presence.status === "offline").size} hors ligne`)
    .addField("**__Inactif__**", `<a:inactif:603704836977983543>${message.guild.members.filter(o => o.presence.status === "idle").size} inactifs`)
    .addField("**__Streaming__**", `${message.guild.members.filter(o => o.presence.status === "streaming").size} sont en stream`)
    .addField("**__Ne pas déranger__**", `
    <a:ne_pas_deranger:603704773950046229>${message.guild.members.filter(o => o.presence.status === "dnd").size} membres a ne pas déranger`)
    .setThumbnail(message.guild.iconURL)
    .setColor("RANDOM")





    message.channel.send(serverinfo)
 }

    

module.exports.help = {
    name: "serverinfo"
};