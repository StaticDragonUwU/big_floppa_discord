module.exports = {
	name: 'imageban',
	description: 'clown on retardes',
	 async execute(message, args) {
        const Discord = require("discord.js")
        const db = require("quick.db")
        const { BotAdmins } = require("../bot.js")
        if (BotAdmins.includes(message.author.id)) {
           const banembed = new Discord.MessageEmbed()
           .setColor('#00FF00')
           .setDescription('This user is already banned.')
           .setThumbnail('https://hotemoji.com/images/dl/7/white-heavy-check-mark-emoji-by-twitter.png')
           .setTimestamp()
           if (db.get(`imageperms${args[0]}`) === false) return message.channel.send(banembed)
           if (!args[0]) return message.channel.send("you need to say an id")
           await message.client.users.fetch(args[0]).then(banned => {
           const reason = message.content.split(" ")
           var fullreason = reason.slice(2).join(" ")
           if (!args[1]) return message.channel.send("you need a reason")
           if (!banned) return message.channel.send(`even with god ultra instinct super shitan blue kaioken x20 i could not find this user`);
           db.set(`imageperms${args[0]}`, false)
           const embed = new Discord.MessageEmbed()
           .setTitle(`Image banned user ${banned.tag}.`)
           .setColor('#FF0000')
           .addFields(
            {
               name: "Moderator", value: message.author.tag,
            },
            {
               name: "Reason", value: fullreason
            }
           )
           .setImage('https://cdn.discordapp.com/emojis/803381038147436554.png?v=1')
           .setThumbnail(banned.displayAvatarURL({ dynamic: true }))
           .setTimestamp()
           message.channel.send(embed)
           try {
               banned.send(`You were banned from using the image command.\nReason: ${reason.slice(2).join(" ")}`)
           } catch (error) {
               message.channel.send('I could not dm this user.')
           }
        });
       } else return message.channel.send('you cannot use the command')
     }
    }