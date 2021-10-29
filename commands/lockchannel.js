module.exports = {
	name: 'lockchannel',
	description: 'makes channel read only',
	execute(message, args) {
		
		const Discord = require("discord.js");
		
		
			const snakeEmbed = new Discord.MessageEmbed()
			.setColor(message.guild.me.displayColor)
			
			.setDescription('Done')
			
			if (message.member.hasPermission("MANAGE_CHANNELS")) {
			message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false });
			message.channel.send(snakeEmbed)
			
		   } else {
			 message.channel.send('honestly no, you need **Manage Channels**')
			 console.log(`${message.author.username} tried to lock a channel without permission!`)
	}
}};