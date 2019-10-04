const  Discord = require('discord.js');


module.exports.run = (client, message, args) =>  {
    const channel = message.mentions.channels.first()

    if(!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("Ton texte de no perm")
    };

    if(!channel) {
        return message.channel.send("Usage: <ChannelMention> <Seconde>")
    };

    if(args.length == 2) {
        channel.setRateLimitPerUser(args[1]);
        channel.send("Le Slow-Mode à été activé pour ce channel . Il est maintenant de **" + args[1] + "** secondes.");
    } else {
        channel.setRateLimitPerUser(0);
        channel.send("Le Slow-Mode à été désactivé de ce channel .");
    };
}




module.exports.help = {
    name: "slowmode"
}