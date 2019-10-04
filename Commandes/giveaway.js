const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {

    if(!args[0]) return message.channel.send("Utilisez de cette façon: \n /addemoji <lien image> <nom de l'emoji>");

 
    var item = "";
    var time;
    var winnerCount;
 
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !")
    if(!args[0]) return message.channel.send("Utilisez de cette façon: \n **/giveaway <titre> <temps en miliseconde>**");

 
 
    
    winnerCount = args[0];
    time = args[1];
    item = args.splice(2, args.length).join(' ');
 
    message.delete();
 
    var date = new Date().getTime();
    var dateTime = new Date(date + (time * 1000));
 
    var giveawayEmbed = new discord.RichEmbed()
        .setTitle("🎉 **GIVEAWAY** 🎉")
        .setFooter(`Expire dans: ${dateTime}`)
        .setDescription(item)
        .setColor("#e74c3c")
        .setThumbnail("https://previews.123rf.com/images/mnaufal/mnaufal1901/mnaufal190101059/116465252-giveaway-logo-template-design-for-social-media-post-or-website-banner-gift-box-icon-vector-illustrat.jpg");
        
 
    var embedSend = await message.channel.send(giveawayEmbed);
    await embedSend.react("🎉");
 
    setTimeout(function() {
 
        var random = 0;
        var winners = [];
        var inList = false;
 
        var peopleReacted = embedSend.reactions.get("🎉").users.array();
 
        for (var i = 0; i < peopleReacted.length; i++) {
            if (peopleReacted[i].id == bot.user.id) {
                peopleReacted.splice(i, 1);
                continue;
            }
        }
 
        if (peopleReacted.length == 0) {
            return message.channel.send("Personne a gagné alors le bot gagne.");
        }
 
        if (peopleReacted.length < winnerCount) {
            return message.channel.send("Trop peu de membres ont participés alors le bot gagne.");
        }
 
        for (var i = 0; i < winnerCount; i++) {
 
            inList = false;
 
            random = Math.floor(Math.random() * peopleReacted.length);
 
            for (var y = 0; y < winners.length; y++) {
                if (winners[y] == peopleReacted[random]) {
                    i--;
                    inList = true;
                    break;
                }
            }
 
            if (!inList) {
                winners.push(peopleReacted[random]);
            }
 
        }
 
        for (var i = 0; i < winners.length; i++) {
            message.channel.send("Félicitations " + winners[i] + `! Tu as gagné **${item}**.`);
        }
 
    }, 1000 * time);
 
 
}
 
module.exports.help = {
    name: "giveaway",
    description: "Créer un giveaway"
}