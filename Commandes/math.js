const math = require("mathjs");
const Discord = require("discord.js");

exports.run = (client, message, args, tools) => {
    
    if (!args[0]) return message.channel.send("Entrez un calcul !");

    let resp;
    try {
        resp = math.eval(args.join(" "));
    } catch (e) {
        return message.channel.send("Entre un calcul valide !");
    }

    const embed = new Discord.RichEmbed()
          .setColor(0xffffff)
          .setTitle("Calculatrice")
          .addField("Entrée",`\`\`\`js\n${args.join("")}\`\`\``)
          .addField("Sortie", `\`\`\`js\n${resp}\`\`\``)

    message.channel.send(embed);
}

module.exports.help = {
    name: "math"
};