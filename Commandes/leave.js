module.exports.run = async (bot, message, args) => {
 
    if (!message.member.voiceChannel) return message.channel.send("Veuillez vous connecter a un salon vocal.");
 
    if (!message.guild.me.voiceChannel) return message.channel.send("Désolé mais je ne suis pas connecté a un salon vocal.");
 
    if (message.guild.me.voiceChannelID != message.member.voiceChannelID) return message.channel.send("Tu n'est pas dans le meme salon vocal que moi.");
 
    message.guild.me.voiceChannel.leave();
 
    message.channel.send("J'ai quitté avec succès le salon.");    
}
 
module.exports.help = {
    name: "leave",
    description: "Laat de bot leaven van het kanaal."
}