const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    if(!message.guild.member (message.author).hasPermission("MANAGE_ROLES")) return message.channel.send("Vous n'avez pas la permission d'exécuter cette commande <a:nonono:624011735598104586> !")
    if(!message.guild.member (client.user).hasPermission("MANAGE_ROLES")) return message.channel.send("Je n'ai pas la permission d'exécuter cette commande.")
    let membre = message.mentions.members.first()
    let roles = message.mentions.roles.first()
    if(!roles) return message.channel.send ("Vous n'avez pas mentionné de rôle !")
    if(!membre) return message.channel.send ("Vous n'avez pas mentionné de membre !")  
    let role = message.guild.roles.find(x => x.name === roles)
    membre.removeRole(roles).catch(console.error)
    message.channel.send(membre + ` n'a maintenante plus le rôle ` + roles);
  
}

module.exports.help = {
    name: "delrole"
}