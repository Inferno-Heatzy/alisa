const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    if(!message.member.voiceChannel)
    return message.channel.send(`Tu dois etre dans un salon vocal !`);
    message.channel.send("http://discordapp.com/channels/" + message.guild.id + "/" + message.member.voiceChannel.id);
};

    module.exports.help = {
        name: 'ss'
    };