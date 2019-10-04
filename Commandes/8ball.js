const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!args[1]) return message.reply("S'il vous plaît, pose-moi une question <:fantomeslurp:624666347170955274> !");
  
    let replies = ["Oui", "Non", "Peut-être", "Probablement que oui", "Probablement que non"];
    let question = args.slice(0).join(" ");
    let res = Math.floor(Math.random() * replies.length);
    
    let askEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.tag)
      .setColor("#58D3F7")
      .addField("Question", question)
      .addField("Réponse", replies[res]);
    
    message.channel.send(askEmbed)
};

module.exports.help = {
    name: '8ball'
};