const Discord = require("discord.js"),
      arraySort = require("array-sort"),
      table = require("table");

exports.run = async (client, message, args, tools) => {

    let invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, "uses", { reverse: true });

    let possibleInvites = [["User", "User"]];
    invites.forEach(function(invite) {
       possibleInvites.push([invite.inviter.username, invite.uses]);
    })

    const embed = new Discord.RichEmbed()
          .setColor(0x7289da)
          .setTitle("Invitations du serveur")
          .addField("Leaderboard", `\`\`\`${table.table(possibleInvites)}\`\`\``);

    message.channel.send(embed);
}

module.exports.help = {
    name: "invitesldb"
}