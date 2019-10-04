const { RichEmbed } = require("discord.js");
const weather = require('weather-js')

exports.run = (client, message, args) => {

  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
    if (result === undefined || result.length === 0) {
        message.channel.send('Localisation inconnue...')
return;
    }

  var current = result[0].current;
  var location = result[0].location;
    if (err) message.channel.send(err);
    let embed = new RichEmbed()
    .setDescription(`**${current.skytext}**`)
    .setAuthor(`Météo pour ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor(`${message.guild.me.displayHexColor!=='#00000' ? message.guild.me.displayHexColor : 0xffffff}`)
    .addField('Fuseau horaire', `UTC${location.timezone}, true`)
    .addField('Type de degré', location.degreetype, true)
    .addField('Temperature', `${current.temperature} Degrés`, true)
    .addField('Ressenti', `${current.feelslike} Degrés`, true)
    .addField('Les vents', current.winddisplay, true)
    .addField('Humidité', `${current.humidity}%`, true)
    message.channel.send(embed)
});
 
}

module.exports.help = {
    name: "weather"
}