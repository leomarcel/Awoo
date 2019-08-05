const { RichEmbed } = require("discord.js");
const PREFIX = "!";
/*
module.exports.run = async (bot, message, args, con) => {
	try {
		await message.author.send(`Commands: \n\n${bot.commands.map(cmd => `\`${cmd.help.name}\``).join(", ")}`);
		message.channel.send("Help sent.");
	} catch(e) {
		message.channel.send("Could not send you a DM.");
	}
}
*/
module.exports.run = async (bot, message, args, connection) => {
	message.channel.send( {
		embed: {
			color: 1752220,
			description: "**Commands List**\n" +
				"Server prefix: " +PREFIX+ "\n" +
				"\n**:stuck_out_tongue_winking_eye: General**\n" +
				"\n" +
				PREFIX + "`avatar`: Affiche ton Avatar\n" +
				PREFIX + "`userinfo`: Information utilisateur\n" +
				PREFIX + "`sondage` *sondage*: Crée un Sondage\n" +
				PREFIX + "`icon`: Affiche l'icone du serveur\n" +
				PREFIX + "`cookie`: Offrer un cookie à quelqu'un\n" +
				PREFIX + "`say`: Parler à la place du bot (mod only)\n" +
				PREFIX + "`help`: Affiche l'aide\n" +
				PREFIX + "`bar`: Fonctionnalité du bar\n" +
				PREFIX + "`xp` ou `&`: Afficher ses Xp\n" +
				"\n**Exemple : " + PREFIX + "pay @user 100**\n" 
		}
	});
}
module.exports.help = {
	name: "help"
}