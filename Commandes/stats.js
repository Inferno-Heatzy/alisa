const moment = require ("moment");

module.exports.run = (client, message) => {

    const membre = message.mentions.members.first() || message.author;
console.log(membre.displayAvatarURL)
    message.channel.send({
        embed: {
            color: 0xe43333,
            title: `Statistiques de l'utilisateur **${membre.id}**`,
            thumbnail: {
                url: membre.displayAvatarURL
            },
            fields: [
                {
                name: "> ID :",
                value: membre.id
            },
            {
                name: "Crée le :",
                value: moment.utc(membre.createdAt).format("LL")
            },
            {
                name: "Jeu :",
                value: membre.presence.game ? membre.presence.game.name : 'Aucun jeu'
            },
            {
                name: "Rejoint le :",
                value: moment.utc(membre.joinedAT).format("LL")
            }
        ],
        footer: {
            text: `Informations de l'utilisateur ${membre.username}`
        }
        } 
    })
};

module.exports.help = {
    name: "stats"
}