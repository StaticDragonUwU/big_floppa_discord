const Discord = require("discord.js");
// update this file if you update i guess
module.exports = {
    name: "updatelog",
    description: "Newest changes to floppa",
     async execute(message, args) {
         const updateembed = new Discord.MessageEmbed()
         .setTitle("**New Commands!**")
         .setColor(message.guild.me.displayColor)
         .setImage("https://i.kym-cdn.com/entries/icons/original/000/034/421/cover1.jpg")
         .setDescription(`Added more music commands to Big Floppa.`)
         .addFields(
             { name: "**New Commands:**", value: `\`\`\`diff\n+ f;pitch [number], changes pitch of a song {0.3 - 2}\n+ f;speed [number]: changes speed of a song {0.3 - 2}\nThese two commands are incompatible with eachother, only one at a time can be used, or you will recieve a conflict error.\n\`\`\`` },
          )
         .setFooter("Arguments with [] around them are required, arguments with () are optional.")
         message.channel.send(updateembed)
     }
}