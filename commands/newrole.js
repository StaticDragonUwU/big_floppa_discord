module.exports = {
	name: 'newrole',
	description: 'create a new role using specified arguments to determine permissions and perameters',
	execute(message, args) {
		const rolename = message.content.split(' ')
		let member = message.mentions.members.first();
		let role = message.mentions.roles.first()
		

		if (message.member.hasPermission("MANAGE_ROLES")) {
			

			message.guild.roles.create({ data: { name: rolename.slice(2).join(' '), color: args[0]}})
		    message.channel.send(`Role created, Name: **${rolename.slice(2).join(' ')}**, Color: **${args[0]}**.`)
		
		}}}
