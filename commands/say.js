module.exports = {
	name: 'say',
	description: 'sends a message of users choice anonymously from bot',
	execute(message, args) {
      const usermsg = message.content.split(' ');
      let guild = message.client.guilds.cache.get(message.guild.id);
      let member = guild.member(message.author);
      
      
     
     if (message.member.hasPermission("MANAGE_MESSAGES")) {
           
     
      message.delete()
      message.channel.send(usermsg.slice(1).join(' '));
   
   return;
            

      } else return message.channel.send("You need the **Manage Messages** Permission.")
   }} 
