module.exports = {
	name: 'removerole',
	description: 'remove roll from user',
	execute(message, args) {
		
		let taggedmember = message.mentions.members.first();
		let role = message.mentions.roles.first()
		
		if (message.member.hasPermission("MANAGE_ROLES")) {
         
			
			if (!taggedmember) {
				return message.channel.send('You need to tag someone.')
			} else if (!role) {
				return message.channel.send('Tag a role to add.')
			} else if (!role && !taggedmember) {
				return message.channel.send('Tag a person and a role.')
			}
		if (message.member.roles.highest.position > role.position) {
			



			taggedmember.roles.remove(role).catch(console.error);
			message.channel.send(`Role ${role} has been removed from user ${taggedmember.user}`) 
			return
		  } else {
			message.channel.send('You are missing permissions to remove this role!')
			console.log(`${message.author.username} tried to remove a role from ${taggedmember.user} without permission!`)
	}
		}}}
