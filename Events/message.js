const Discord = require('discord.js');
module.exports = (client, message) => {
    const prefix = "*";
    if (message.author.bot || message.channel.type === 'dm') { return; }
    if (!message.channel.permissionsFor(client.user).has('SEND_MESSAGES')) { return; }

    if(message.content.includes(message.mentions.users.first())) {
        client.afk.forEach(key => {
            if (key.id == message.mentions.users.first().id) {
                message.guild.fetchMember(key.id).then(member => {
                    let user_tag = member.user.tag;
                    return message.channel.send(`${user_tag} est actuellement afk pour: \`${key.reason}\``);
                });
            }
        });
    }
    client.afk.forEach(key =>{
        if(message.author.id === key.id){
            client.afk.delete(message.author.id);
            return message.author.send(`Tu as retiré ton AFK`)
        }
    })


    if (!message.content.startsWith(prefix)) { return; }

        let args = message.content.slice(prefix.length).trim().split(/ +/g);
        let commande = args.shift();
        let cmd = client.commands.get(commande);
        if (!cmd) { return; }
            cmd.run(client, message, args);
};