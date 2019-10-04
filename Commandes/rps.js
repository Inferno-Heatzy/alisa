const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    if(!args[0]) return message.channel.send("Utilisez de cette façon: /rps <pierre, papier, ciseaux>");

    let options = ["pierre", "papier", "ciseaux"];

    let result = options[Math.floor(Math.random() * options.length)];

    if(args[0] == "pierre"){

        if(result == "papier"){

            message.channel.send(`J'ai ${result} :📋, __je gagne__.`);

        }else if(result == "ciseaux"){
            message.channel.send(`J'ai ${result} :✂, __tu gagne__.`);
        }else if(result == "pierre"){
            message.channel.send(`J'ai ${result} :<:pierre:627318421708865567>, __match nul__.`);
        }

    }
    else if(args[0] == "papier"){

        if(result == "pierre"){

            message.channel.send(`J'ai ${result} :<:pierre:627318421708865567>, __tu gagne__.`);

        }else if(result == "ciseaux"){
            message.channel.send(`J'ai ${result} :✂, __je gagne__.`);
        }else if(result == "papier"){
            message.channel.send(`J'ai ${result} :📋, __match nul__.`);
        }

    }
    else if(args[0] == "ciseaux"){

        if(result == "pierre"){

            message.channel.send(`J'ai ${result} :<:pierre:627318421708865567>, __je gagne__.`);

        }else if(result == "papier"){
            message.channel.send(`J'ai ${result} :📋, __tu gagne__.`);
        }else if(result == "ciseaux"){
            message.channel.send(`J'ai ${result} :✂, __match nul__.`);
        }
    }
}

module.exports.help = {
    name: "rps"
}