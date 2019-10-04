const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args, tools) => {

    let user = message.mentions.users.first() || message.author;

    let balance = await db.fetch(`userBalance_${user.id}`);

    if (balance === null) balance = 0;

    message.channel.send(`**${user.username}**, tu as **__${balance}__**<:argent:627335496770519059> dans ta balance !`);

}

module.exports.help = {
    name: "balance",
    aliases: ["bal"]
}