module.exports.run = async (client, message, args) => { 
    let query = args.slice(0).join(" ");
    if(!query) {
        return message.channel.send("⚠ Veuillez inclure un texte !");
    }

      let textResult = query.split('').map((q) => (q === ' ' ? ' ' : `||${q}||`)).join('');
      message.channel.send(`**${message.author.username}**:\n${textResult}`)
        .catch((err) => {
          if (err) {
              return message.channel.send("❌ Une erreur est survenue");
            }
        });
};

module.exports.help = {
    name: "hideletters"
}