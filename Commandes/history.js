const Discord = require("discord.js");

exports.run = (client, message, args) => {
    var help = new Discord.RichEmbed()
        .setDescription("Mon histoire:")
        .addField(" __Alisa Bosconovitch__ ", " \n Alisa Bosconovitch (Japonais : アリサ・ボスコノビッチ Arisa Bosukonobicchi ; Russe : Алиса Босконович) est un personnage de la série Tekken, Elle apparaît pour la première fois en tant que personnage jouable dans Tekken 6 : Bloodline Rebellion, une mise à jour arcade importante de Tekken 6 avant d'être disponible sur la version console.  Elle fait son retour dans Tekken 7. Elle est également jouable dans l'opus non-canonique Tekken Tag Tournament 2 \n Alisa est une androïde de combat créée par le Dr.Bosconovitch afin de protéger Jin Kazama. Elle a été conçue à l'image de la fille décédée du docteur. En combat, elle peut utiliser des tronçonneuses, s'envoler à l'aide de propulseurs ou utiliser sa tête comme bombe. Elle accompagne Lars Alexandersson, le personnage principal, durant le mode Histoire de Tekken 6. Ses origines et son passé prennent une place importante dans le scénario. Elle fait également partie de l'intrigue de la Saga des Mishima dans Tekken 7.")
        .addField(" C'était un merveilleux voyage. J'aurais aimé qu'il dure plus longtemps. Vous m'avez traitée comme une vraie personne. C'était... agréable \n — Alisa à Lars")
       .setColor("RANDOM")
        .setThumbnail("https://vignette.wikia.nocookie.net/tekkenpedia/images/2/2c/Tekken_6_alisa.png/revision/latest?cb=20150526210224&path-prefix=fr")
    message.channel.send(help)
};

module.exports.help = {
    name: "history"
}