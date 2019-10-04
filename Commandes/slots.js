const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    const slots = [':grapes:', ':cherries:', ':lemon:'];
    const slotOne = slots[Math.floor(Math.random() * slots.length)];
    const slotTwo = slots[Math.floor(Math.random() * slots.length)];
    const slotThree = slots[Math.floor(Math.random() * slots.length)];
    const slotfour = slots[Math.floor(Math.random() * slots.length)];
    const slotfive = slots[Math.floor(Math.random() * slots.length)];
    const slotsix = slots[Math.floor(Math.random() * slots.length)];
    const slotseven = slots[Math.floor(Math.random() * slots.length)];
    const sloteight = slots[Math.floor(Math.random() * slots.length)];
    const slotnine = slots[Math.floor(Math.random() * slots.length)];
    if (slotOne === slotTwo && slotOne === slotThree || slotfour === slotfive && slotfour === slotsix || slotseven === sloteight && slotseven === slotnine) {
        const won = new Discord.RichEmbed()
            .setColor("#2ecc71")
            .addField("|-----|-----|----|", `|${slotfour}|${slotfive}|${slotsix}|`)
            .addField("|-----|-----|----|", `|${slotOne}|${slotTwo}|${slotThree}|`)
            .addField("|-----|-----|----|", `|${slotseven}|${sloteight}|${slotnine}|`)
            .setFooter( " Toutes nos félicitations " + message.author.username + " ! ");
        message.channel.send(won)
    } else {
        const lost = new Discord.RichEmbed()
            .setColor("#ad1457")
            .addField("|-----|-----|----|", `|${slotfour}|${slotfive}|${slotsix}|`)
            .addField("|-----|-----|----|", `|${slotOne}|${slotTwo}|${slotThree}|`)
            .addField("|-----|-----|----|", `|${slotseven}|${sloteight}|${slotnine}|`)
            .setFooter("Oh non " + message.author.username + " tu as perdu.");
        message.channel.send(lost)
    }
}
module.exports.help = {
    name: "slots"
}
