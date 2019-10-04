const Discord = require("discord.js");
const ms = require("ms")

module.exports.run = async (bot, message, args) => {
    if(message.channel.type === "dm") return;
    message.delete()
    if(message.author.bot) return;
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
    if(!tomute){
        return message.reply("*Aucun utilisateur trouvé !*")
    }
    if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("*Je ne peux pas mute un administrateur !*")
    let muterole = message.guild.roles.find(`name`, "mute")
    if(!muterole) {
        try{
            muterole = await message.guild.createRole({
                name: "Muted🔇",
                color: "#000000",
                permission: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        }catch(e){
            console.log(e.stack)
        }
    }
    let mutetime = args [1]
    if(!mutetime) return message.reply("*Tu n'as pas préciser de temps*")

    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> *a été mute pour* ${ms(ms(mutetime))} <a:success:624014033397481482> !`)

    setTimeout(function(){
        tomute.removeRole(muterole.id)
        message.channel.send(`<@${tomute.id}> *a été unmute !*`)
    }, ms(mutetime));
}

module.exports.help = {
    name: "mute"
}