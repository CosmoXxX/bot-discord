
  module.exports.run = (client, message, args) => {
    const name = args.join(" ").filter(a => ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," ","1","2","3","4","5","6","7","8","9"].includes(a.toLowerCase())).join("");
    if (!name) return message.reply("Veuillez saisir le nom d'un skin!");
    //if(name.length < 1) return message.reply("Le pseudo est trop court!");
    const { MessageEmbed } = require("discord.js");
    const embed = new MessageEmbed()
    .setColor("#0040ff")
      .setTitle(`**Télécharger le skin de ${name}**`)
      .setURL(`https://minotar.net/download/${name}`)
      .setImage(`https://minotar.net/body/${name}/100.png`);
    message.channel.send(embed).catch(err => message.reply("Skin Minecraft introuvable");
  }
module.exports.config = {
    name: "mcskin",
    aliases: [],
  usage: '*mcskin <pseudo du joueur>',
  d: "Affiche le skin d'un joueur Minecraft"
}
