const Discord = require("discord.js");

module.exports.run = (client, message, args) => {

    let reason = args.join(' ') ? args.join(' ') : "Je suis afk , attends un moment ...";

    let afklist = client.afk.get(message.author.id)

    if(!afklist) {
        let construct = {
            id: message.author.id,
            reason: reason
        };
        client.afk.set(message.author.id, construct);
        return message.author.send(`Tu es maintenant afk pour raison: **${reason}**`)
    }




}


module.exports.help = {
    name: "afk"
}