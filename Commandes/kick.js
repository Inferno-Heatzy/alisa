const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("Vous n'avez pas la permission <a:nonono:624011735598104586> !");

    if(message.mentions.users.size === 0) {
        return message.channel.send("Vous devez mentionner un utilisateur !");
    }

    let kick = message.guild.member(message.mentions.users.first());

    if(!kick) {
        return message.channel.send("Je n'ai pas trouvé d'utilisateurs !");
    }

    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send("Je n'ai pas la permission !");

    kick.kick().then(member => {

        message.channel.send(`${member.user.username} est kick par ${message.author.username}`);
        message.mentions.users.first().send(`Vous avez été expulsé du serveur **${message.guild.name}** par ${message.author.username}`).catch(console.error);
    });
}; 

module.exports.help = {
    name: "kick"
};