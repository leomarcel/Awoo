const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have permission to do this.").then(m => m.delete(8000));
    let str = args.join(" ",)
    //if (!str) return message.channel.send("Merci d'écrire une convocation.").then(m => m.delete(4000))
    let target = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!target) return message.channel.send("Merci d'identifier le convoquer")
    let embed = new Discord.RichEmbed()
        .setDescription("Convocation")
        .addField(str, "Convoqué : " + target + " par: " + message.author)
        .setColor("#daa520")
    message.channel.send(embed);
}

module.exports.help = {
	name: "convocation"
}

/*
let embed = new Discord.RichEmbed()
	.setAuthor(target.username)
	.setDescription("Information Utilisateur")
	.addField("Nom", `${target.username}#${target.discriminator}`)
	.addField("ID", target.id)
	.addField("Crée le ", target.createdAt)
	.setColor("#9B59B6")

	message.channel.send({embed: embed});
}


let str = args.join(" ");
if(!str) return message.channel.send("Please supply some content.");
*/
