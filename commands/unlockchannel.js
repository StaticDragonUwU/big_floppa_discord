

module.exports = {
	name: 'unlockchannel',
	description: 'unlocks channel',
	execute(message, args) {
		
		const Discord = require("discord.js");
		const unlockEmbed = new Discord.MessageEmbed()
		.setDescription(`done`)
		.setColor(message.guild.me.displayColor)
		
		if (message.member.hasPermission("MANAGE_CHANNELS")) {
			message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: true });
			message.channel.send(unlockEmbed) 
			return;
		 } else {
			message.channel.send(`Bro if you're using this command and you're not an admin you're obviously not in a locked channel`)
			console.log(`${message.author.username} tried to unlock a channel without permission!`)
		 }	
		}};
