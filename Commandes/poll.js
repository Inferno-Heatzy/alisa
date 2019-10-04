const Discord = require("discord.js");

exports.run = async (client, message, args, tools) => {


    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !");

if (!args[0]) return message.channel.send("Vous utilisez mal la commande \n __Utilisation:__ /poll <question>");

const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter("Réagis pour voter")
      .setDescription(args.join(" "))
      .setTitle(`Sondage crée par ${message.author.username}`);

let msg = await message.channel.send(embed);

await msg.react("✅");
await msg.react("❎");

message.delete({timeout: 1000});


}

module.exports.help = {
    name: "poll"
}