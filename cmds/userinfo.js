const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
	let target = message.mentions.users.first() || message.guild.members.get(args[1]) || message.author;

	let embed = new Discord.RichEmbed()
	.setAuthor(target.username)
	.setDescription("Information Utilisateur")
	.addField("Nom", `${target.username}#${target.discriminator}`)
	.addField("ID", target.id)
	.addField("Crée le ", target.createdAt)
	.setColor("#9B59B6")

	message.channel.send({embed: embed});
}

module.exports.help = {
	name: "userinfo"
}