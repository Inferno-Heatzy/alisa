const Discord = require("discord.js");

exports.run = (client, message) => {
    message.channel.sendMessage('Start ...')
      .then(msg => {
  
        msg.edit("Accès autorisé ! ...");
  
        msg.edit("Crashed ");
  
        msg.edit("Reloading ░░░░░░░░░░");
  
        msg.edit("Reloading ▓░░░░░░░░░");
  
        msg.edit("Reloading ██▓░░░░░░░");
  
        msg.edit("Reloading █████▓░░░░");
  
        msg.edit("Reloading ███████▓░░");
  
        msg.edit("Reloading ██████████");
  
        msg.edit("Phase de reload complétée !");
  
        msg.edit(`**${message.author.username}**, \n tu viens d'hack le serveur dans lequel tu es, tu t'es transmis la propriété <a:wumpus_work:627570527233638420>!`);
  
  
  
  
      });
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'hack',
    description: 'null',
    usage: 'hack'
  };