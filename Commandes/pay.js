const db = require("quick.db"),
      Discord = require("discord.js");

exports.run = async (client, message, args, tools) => {

    if (!message.mentions.members.first()) return message.channel.send(`Mentionnez un membre !`);

    let user = message.mentions.members.first()

    let targetMember = message.mentions.members.first(),
        amount = parseInt(args.join(" ").replace(targetMember, ""));

    if (isNaN(amount)) return message.channel.send(`**Definis un montant !**`);

    let targetBalance = await db.fetch(`userBalance_${targetMember.id}`),
        selfBalance = await db.fetch(`userBalance_${message.author.id}`);

        if (targetBalance === null) targetBalance = 0;
        if (selfBalance === null) selfBalance = 0;

    if (amount > selfBalance) return message.channel.send("Désolé, tu n'as pas assez d'argent !");

    message.channel.send(`**${message.author.tag},** tu as payé avec succes **${user.user.username} ${args[1]}<:argent:627335496770519059>**.`)

    db.add(`money_${user.id}`, args[1])
    db.subtract(`money_${message.author.id}`, args[1])
    
}

module.exports.help = {
    name: "pay"
}