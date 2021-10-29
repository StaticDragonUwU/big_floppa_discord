const Discord = require("discord.js")
module.exports = {
	name: 'eval',
	description: 'evaluates js code, owner only',
	 execute(message, args) {
    const { BotAdmins } = require("../bot.js")
     if (BotAdmins.includes(message.author.id)) {
 
    let fs = require(`fs`);
    const fetch = require('node-fetch')
 
    const { play } = require("../bot.js") // modules imported so that they can be used within the evaluation context

    const db = require("quick.db")
    
    const beautify = require("js-beautify").js;
    var now = require("performance-now")
  
    

        const arguments = message.content.split(" ").slice(1);
       
        var start = now()
          if (owner.includes(message.author.id)) {
            
          try {
      
            const code = arguments.join(" ");
            let evaled = eval(code);
            
             
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
              var end = now()
            const evalEmbed = new Discord.MessageEmbed()
            .setColor("#00ff00")
            .setTitle(`Success!`)
            .setDescription(`**Input (Formatted):**\n\`\`\`js\n${beautify(code)}\n\`\`\`\n**Returned:**\n\`\`\`js\n${evaled === 'undefined' ? `${evaled} (ƒ)` : evaled}\n\`\`\``)
            .setFooter(`Execution time: ${(end-start).toFixed(3)} ms.`)
            .setThumbnail("https://pbs.twimg.com/profile_images/1326910764511268866/d4g2zdqr_400x400.jpg")
            .setTimestamp()
            message.channel.send(evalEmbed)
          } catch (err) {
            var end2 = now()
            const errEmbed = new Discord.MessageEmbed()
            .setColor("#e61a1a")
            .setTitle(`Error!`)
            .setDescription(`**Input (Formatted)**:\n\`\`\`js\n${beautify(arguments.join(" "))}\n\`\`\`\n**Exception:**\n\`\`\`js\n${err}\n\`\`\``)
            .setFooter(`Exception caught at ${(end2-start).toFixed(3)} ms.`)
            .setThumbnail("https://cdn.discordapp.com/attachments/684171493688737797/848089591319232532/unknown.png")
            .setTimestamp()
            message.channel.send(errEmbed)
          }
        
        } else return message.channel.send(`This command can only be used by the owner.`)
}
   }
  }