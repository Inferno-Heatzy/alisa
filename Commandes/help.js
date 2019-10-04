const Discord = require("discord.js");

exports.run = (client, message, args) => {
    var help = new Discord.RichEmbed()
        .setDescription("🌐 Liste de mes commandes disponibles:")
        .addField("<:admin:629719300944691211>• __Administration__ ", "`addrole - delrole - clear - addemoji - slowmode`")
        .addField("<:modration:625034321073274901>• __Modération__ ", "`kick - ban - tempban - mute - tempmute`")
        .addField("<a:wumpus_color:627570404885659648>• __Utilitaires__ ", "`avatar - ping - stats - help - uptime - ss - say - math - urban - botinfo - serverinfo - weather - poll - giveaway - invitesldb - afk - sayembed - review - history`")
        .addField("<a:hypertada:624011915869421568>• __Divertissement__ ", "`slots - 8ball - pf <pile/face> - ascii - hack - rps - hideletters - bingo`")
        .addField("<:image:625035802690322452>• __Images__","`cry - kiss - hug - neko - kitsune - waifu - pat - cat - dog - badge - meme - pepe`")
        .addField("<:argent:627335496770519059>• __Economie__","`balance - daily - pay`")
        .addField("<a:musique:624664295363444746>• __Musique__","`play - leave - pause - resume - volume`")
        .addField("<:support:625865398671245312>• __Support__","• [Rejoins mon serveur support.](https://discord.gg/EfuvcPK)")
        .addField("<:calendrier:624683894373089280>• __A venir...__","Aucune commandes a venir...")
        .setColor("#6f316d")
        .setThumbnail("https://vignette.wikia.nocookie.net/tekkenpedia/images/2/2c/Tekken_6_alisa.png/revision/latest?cb=20150526210224&path-prefix=fr")
    message.channel.send(help)
};

module.exports.help = {
    name: "help"
}