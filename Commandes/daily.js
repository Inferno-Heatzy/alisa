const db = require("quick.db"),
      ms = require("parse-ms"),
      Discord = require("discord.js");

exports.run = async (client, message, args, tools) => {

    let cooldown = 8.64e+7,
        amount = 250;

    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);

    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));

        message.channel.send(`Tu as déja collecté ton reçu quotidien, attends **${timeObj.hours}h ${timeObj.minutes}m** !`);

    } else {
        message.channel.send(`Tu as correctement collecté __**${amount}**__ <:argent:627335496770519059> !`);

        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`userBalance_${message.author.id}`, 250);
    }
}

module.exports.help = {
    name: "daily"
}