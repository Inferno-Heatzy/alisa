const { createEmoji } = require('discord.js');
module.exports.run = (client, message, args) => {
    if(!args[0]) return message.channel.send("Utilisez de cette façon: \n /addemoji <lien image> <nom de l'emoji>");
    if(!message.guild.member(message.author).hasPermission("MANAGE_EMOJIS")) return message.channel.send("Vous n'avez pas la permission <a:nonono:624011735598104586> !");


    message.guild.createEmoji(`${args[0]}`, `${args[1]}`).then(
        emoji => console.log(`Emoji crée pour nom : ${emoji.name}`))
        message.channel.send('Votre émoji a été créer avec succes ! ')
        .catch(console.error);
    

}


module.exports.help = {
    name: "addemoji"
}