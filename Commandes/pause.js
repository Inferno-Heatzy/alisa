module.exports.run = async (bot, message, args, ops) => {
 
    // Gegevens ophalen.
    var guildIDData = ops.active.get(message.guild.id);
 
    // Nakijken als er al een liedje aan het afspelen is.
    if (!guildIDData) return message.channel.send("Il n'y a pas de chansons en cours de lecture.");
 
    // Nakijken als de gebruiker in het kanaal zit van de bot.
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("Tu n'es pas dans le même salon que moi.");
 
    // Nakijken als het liedje al gepauzeerd is.
    if (guildIDData.dispatcher.paused) return message.channel.send("La musique est déja en pause.");
 
    // Pauzeer het liedje.
    guildIDData.dispatcher.pause();
 
    // Stuur bericht.
    message.channel.send(`Mis en pause avec succès ${guildIDData.queue[0].songTitle}.`);
 
}
 
module.exports.help = {
    name: "pause",
    description: "Zet de muziek op pauze"
}