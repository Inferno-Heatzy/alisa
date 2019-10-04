const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let waiting = await message.channel.send("chargement de l'avatar <a:chargement:624010745721651200>").catch(console.error);

    let mentionedUser = message.mentions.members.first() || message.author;

    let avatarembed = new Discord.RichEmbed()

    .setImage(mentionedUser.displayAvatarURL)
    .setColor("RAMDOM")
    .setTitle("Avatar")
    .setFooter("Demandé par " + message.author.tag)
    .setDescription("[Lien de l'avatar](" + mentionedUser.displayAvatarURL +")");

    waiting.edit(avatarembed).catch(console.error)
}

module.exports.help = {
    name: "avatar"
};
