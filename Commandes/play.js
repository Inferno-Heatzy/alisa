const ytdl = require("ytdl-core");

 
module.exports.run = async (bot, message, args) => {
 
    if (!message.member.voiceChannel) return message.channel.send("Connecte-toi a un salon vocal !");
 
    if (message.guild.me.voiceChannel) return message.channel.send("Je suis connecté a un autre salon vocal.");
 
    if (!args[0]) return message.channel.send("Entre un URL.");
 
    var validate = await ytdl.validateURL(args[0]);
 
    if (!validate) return message.channel.send("Ton URL n'est pas valide, entrez un URL correct.");
 
    var info = await ytdl.getInfo(args[0]);
 
    const streamOptions = { seek: 0, volume: 1 };
 
    let voiceConnection = message.member.voiceChannel.join()
        .then(voiceConnection => {
            const stream = ytdl(args[0], { filter: 'audioonly' });
            const streamDispatcher = voiceConnection.playStream(stream, streamOptions);
        })
        .catch(console.error);
 
    message.channel.send(`Je joue maintenant ${info.title}`);
 
}
 
module.exports.help = {
    name: "play"
}