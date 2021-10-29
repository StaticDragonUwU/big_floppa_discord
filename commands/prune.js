

module.exports = {
    name: "bulkdel",
    description: "deletes x amount of messages from channel",
     async execute(message, args) {
        const amount = parseInt(args[0]);
        const member = message.mentions.members.first();
       
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
          if (!member) {
        
         if (isNaN(amount)) {
          return message.channel.send('yeah, thats not a number')
        } else if (amount > 100) {
            return message.channel.send('Please enter a number lower than or equal to 100.');
        }
         
         message.channel.bulkDelete(amount)
         message.channel.send(`Deleted ${amount} messages.`).then(message => {
            message.delete({ timeout: 5000 })
        })
        } else if (member) {
           
            if (isNaN(amount)) {
                return message.channel.send('yeah, thats not a number')
              } else if (amount > 100) {
                  return message.channel.send('Please enter a number lower than or equal to 100.');
              }
           
            message.channel.messages.fetch({
                limit: amount
            }).then((messages) => { 
                const memberMessages = [];
                messages.filter(m => m.author.id === member.id).forEach(message => memberMessages.push(message))
                message.channel.bulkDelete(memberMessages)
                message.channel.send(`Deleted ${amount} messages from user ${member}.`).then(message => {
                    message.delete({ timeout: 5000 })
                })
            })}} else return message.channel.send('You need the **Manage Messages** permission.')
        }}       
                 
       




            