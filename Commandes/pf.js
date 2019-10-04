const pf = ["pile", "face"];

module.exports.run = (client, message, args) => {

    if(!pf.includes(args[0].toLowerCase())) { 
        return message.channel.send("**Merci d'indiquer pile ou face !**"); 
    }

    if(pf[Math.floor(Math.random() * pf.length)] === args[0]) { 
        message.channel.send("Tu as gagné !")
    } else {
        message.channel.send("L'ordinateur a gagné !")
    }
}

module.exports.help = {
    name: "pf"
}