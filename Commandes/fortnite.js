const Fortnite = require("fortnite");
const stats = new Fortnite(process.env.TRN);
const Discord = require("discord.js");

exports.run = (client, message, args, tools) => {

    let platform;
    let username;

    if (!["pc","xbl","psn"].includes(args[0])) return message.channel.send("**Inclue la plateforme: /fortnite <xbl | psn | pc> <pseudo>**");
    if (!args[1]) return message.channel.send("**Inclue un pseudo: /fortnite <plateforme> <pseudo>**");

    platform = args.shift();
    username = args.join(" ");

    stats.user.instead(username, platform).then( data => {


const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle(`Statistiques pour ${data.username}`)
      .addField("Placement Top", `**Top 3s:** *${data.lifetimeStats[0].value}*\n **Top 5s:** *${data.lifetimeStats[0].value}*\n **Top 6s:** *${data.lifetimeStats[3].value}*\n **Top 12:** *${data.lifetimeStats[4].value}*\n**Top 25:** *${data.lifetimeStats[5].value}*`, true)

      .setThumbnail("https://cdn2.unrealengine.com/Fortnite%2Fbattle-royale%2F10BR_Launch_Web_GetFortnite_Header-1920x1000-a8e332ddc946efe01f26b84b43de5f59b8224305.jpg")
      .addField("Score total", data.lifetimeStats[6].value, true)
      .addField("Match joués", data.lifetimeStats[7].value, true)
      .addField("Wins", data.lifetimeStats[8].value, true)
      .addField("Pourcentage wins", data.lifetimeStats[9].value, true)
      .addField("Kills", data.lifetimeStats[10].value, true)
      .addField("K/D ratio", data.lifetimeStats[11].value, true)
      .addField("Kills par minute", data.lifetimeStats[12].value, true)
      .addField("Temps joué", data.lifetimeStats[13].value, true)
      .addField("Temps de survie moyen", data.lifetimeStats[14].value, true)

 message.channel.send(embed)
    })
    .catch(error => {

        message.channel.send("Aucun compte trouvé");
    })
};

module.exports.help = {
    name: "fortnite"
}