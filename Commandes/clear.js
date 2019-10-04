const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission !");
    if(!args[0]) return message.channel.send("Ecris un nombre de messages a supprimer !");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`__${args[0]} ont été supprimés <a:success:624014033397481482> !__`).then(msg => msg.delete(3000));
    });
}

module.exports.help = {
    name: "clear"
}