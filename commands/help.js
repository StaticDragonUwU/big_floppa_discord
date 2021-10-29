

module.exports = {
    name: "help",
    description: "list of every usable command",
     async execute(message, args) {

        
  

         const Discord = require('discord.js')
         const helpEmbed = new Discord.MessageEmbed()
          .setColor(message.guild.me.displayColor)
          .setAuthor('Big Floppa')
          .setTitle(`Here are all of Big Floppa's commands.`)
          .addFields(
          { name: '**API / Web**', value: "kanyerest, floprestroom, floppadefine, image, generatetext"},
          { name: '**Server**', value: "newrole, lockchannel, unlockchannel, say, bulkdel" },
          { name: '**Music**', value: "play, stop, skip, earrape, unearrape, volume, loop, leave, someoneplayingshit, pause, resume, search, lyrics, bassboost, deepslow, nightcore, speed, pitch, defaults, modifiers" },  
          { name: '**Users**', value: "addrole, removerole, idcard, status" },
          { name: '**Media Interaction**', value: "ytdl, igdl" },
          { name: '**Bot**', value: "updatelog" },
          )
          .setDescription(`**Happy Flopping!**`)
          .setThumbnail('https://media.discordapp.net/attachments/684171493688737797/779478205127327764/flopp.png?width=440&height=475')
          message.channel.send(helpEmbed)
          
     }}
