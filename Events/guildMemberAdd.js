const Discord = require("discord.js")
const Canvas = require('canvas');
const snekfetch = require('snekfetch');

module.exports = async (bot, member) => {

    let couleur = "#FFFFFF" // couleur du texte par defaut en blanc
    let bvn_channel = member.guild.channels.get("599423019709890570")

    // bvn_channel.startTyping() // pour le chargement du canvas

    const canvas = Canvas.createCanvas(800, 450);
    const ctx = canvas.getContext('2d');

    let image = await Canvas.loadImage("https://media.discordapp.net/attachments/599423019709890570/625098897181769729/JPEG_20190919_175054.jpg?width=400&height=225")

    ctx.drawImage(image, 0, 0, 800, 450)

    const { body: buffer } = await snekfetch.get(member.user.avatarURL);
    const avatar = await Canvas.loadImage(buffer);
    ctx.globalAlpha = 0
    ctx.strokeStyle = couleur;
    ctx.moveTo(400, 20);
    ctx.lineTo(400, 420);
    ctx.stroke();
    ctx.globalAlpha = 1
    ctx.fillStyle = couleur; 
    ctx.font = '40px Arial black';
    ctx.textAlign = "center";
    ctx.fillText(member.user.tag, 400, 280)
    ctx.font = '50px Arial black';
    ctx.fillText("Bienvenue !", 400, 345)
    ctx.font = '30px Arial black';
    ctx.fillText("Le serveur compte à présent " + member.guild.memberCount + " membres !", 400, 400)
    ctx.globalAlpha = 1;
    ctx.beginPath();
    ctx.strokeStyle = couleur;
    ctx.fillStyle = couleur;
    ctx.lineWidth = 10;
    ctx.arc(400, 120, 97, 0, 6.28, false)
    ctx.fill()
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(400, 120, 95, 0, 6.28, false);
    ctx.clip();
    ctx.stroke();
    ctx.closePath();
    ctx.drawImage(avatar, 305, 25, 195, 195);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'avatar.png');

    await bvn_channel.send(attachment) 

}