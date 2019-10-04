const { embed } = require('discord.js');

module.exports.run = (client, message, args) => {

    let say = args.join(" ");
    if (!say){
        return message.channel.send("Veuillez rajoutez un message !")
    }
    let member = message.author;

    message.channel.send({
        embed : {
            color: 0xe43333,
            
            fields: [
                {
                    name: `${member.username} `,
                    value: say,
                }
            ],
            
        }
    })
};

module.exports.help = {
    name: "sayembed"
}