module.exports.run = async (bot, message, args, ops) => {
 
    // Gegevens ophalen.
    var guildIDData = ops.active.get(message.guild.id);
 
    // Nakijken als er al een liedje aan het afspelen is.
    if (!guildIDData) return message.channel.send("Aucune chansons n'est en cours de lecture.");
 
    // Nakijken als de gebruiker in het kanaal zit van de bot.
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Tu n'es pas dans le même salon que moi.");
 
    // Nakijken als het liedje niet gepauzeerd is.
    if (!guildIDData.dispatcher.paused) return message.channel.send("La musique n'est pas en pause.");
 
    // start het liedje terug.
    guildIDData.dispatcher.resume();
 
    // Stuur bericht.
    message.channel.send(`Musique reprise avec succès ${guildIDData.queue[0].songTitle}.`);
 
}
 
module.exports.help = {
    name: "resume",
    description: "Zet de muziek terug aan"
}