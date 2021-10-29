

module.exports = {
    name: "prefix",
    description: "sets or views server prefix",
     async execute(message, args) {
       const db = require("quick.db")
       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You need to be an **Administrator**.')
       if (!args[0]) return message.channel.send(`This server's prefix is ${db.get(`${message.guild.id}_prefix`)}`)
       await db.set(`${message.guild.id}_prefix`, args[0])
       message.channel.send(`Set this server's prefix to ${args[0]}.`)
       
        





     }}