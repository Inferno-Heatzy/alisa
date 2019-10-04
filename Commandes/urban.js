const urban = require("relevant-urban"),
      Discord = require("discord.js");

module.exports.run = async (client, message, args, tools) => {

    if (!args[0]) return message.channel.send(`***Spécifie du texte !***`);

    let res = await urban(args.join(" ")).catch(e => {
        return message.channel.send("***Désole je n'ai pas trouvé ce mot...***");
    });

    var embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(res.word)
          .setURL(res.urbanURL)
          .setDescription(`**Définition:**\n*${res.definition}*\n\n**Exemple:**\n${res.example}`)
          .addField("Autheur", res.author, true)
          .addField("Evaluation", `**\`Upvotes: ${res.thumbsUp} | DownsVotes: ${res.thumbsDown}\`**`)

        if (res.tags.lenght > 0 && res.tags.join(", ").lenght < 1024) {
            embed.addField("Tags", res.tags.join(", "), true)
        }

        message.channel.send(embed);
}

module.exports.help = {
    name: "urban"
}