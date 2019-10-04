const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("Vous n'avez pas la permission <a:nonono:624011735598104586> !");


    if(message.mentions.users.size === 0) {
        return message.channel.send("*Vous devez mentionner un utilisateur !*");
    }

    let ban = message.guild.member(message.mentions.users.first());

    if(!ban) {
        return message.channel.send("*Je n'ai pas trouvé d'utilisateurs !*");
    }

    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send("*Je n'ai pas la permission !*");

    ban.ban().then(member => {

        message.channel.send(`*${member.user.username} est ban par ${message.author.username} <a:success:624014033397481482>*`);
        message.mentions.users.first().send(`*Vous avez été banni du serveur **${message.guild.name}** par ${message.author.username}*`).catch(console.error);
    });
}; 

module.exports.help = {
    name: "ban"
};