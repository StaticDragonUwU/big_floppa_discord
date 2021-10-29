module.exports = {
	name: 'status',
	description: 'changes or checks users id status',
	 async execute(message, args) {
     const db = require("quick.db")
      const newstatus = message.content.split(' ')
       const statusset = newstatus.slice(1).join(' ')
        if (statusset.length > 28) return message.channel.send('Keep your status under 28 characters in length.')
        if (!args[0]) {
            if (db.get(`${message.author.id}_status`) == null || undefined) return message.channel.send('You have not set a custom status! Do so by using this command, but say something along with it!')
            return message.channel.send(`Your current status is: \n"${db.get(`${message.author.id}_status`)}".`)
      } else if (args[0]) {
         await db.set(`${message.author.id}_status`, newstatus.slice(1).join(' '))
         return message.channel.send(`Set your status to \n"${newstatus.slice(1).join(' ')}".`)
      }








}}
