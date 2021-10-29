module.exports = {
	name: 'addrole',
	description: 'add role to user',
	 execute(message, args) {
		let member = message.mentions.members.first();
		let role = message.mentions.roles.first()
	
		
		if (message.member.hasPermission("MANAGE_ROLES")) {
		
			if (!member) {
				return message.channel.send('You need to tag someone.')
			} else if (!role) {
				return message.channel.send('Tag a role to add.')
			} else if (!role && !member) {
				return message.channel.send('Tag a person and a role.')
			}
			if (message.member.roles.highest.position > role.position) {
			member.roles.add(role).catch(console.error);
			message.channel.send(`Role ${role} has been added to user ${member.user}`) 
		
			
		} else {
			message.channel.send('You are missing permissions to give these roles!')
		
}


		}}}