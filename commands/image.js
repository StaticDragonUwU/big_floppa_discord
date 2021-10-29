const { BotAdmins } = require("../bot");

module.exports = {
	name: 'image',
	description: 'searches for an image',
  cooldown: 10,
	async execute(message, args) {
        const ms = require("ms")
        const db = require("quick.db")
        var infoembednum = 0;
        const Discord = require("discord.js")
        if (!args[0]) return message.channel.send("You need to include a query to search!")
        if (db.get(`imageperms${message.author.id}`) != null || undefined) return message.channel.send("You have been banned from using this command.")
        if (!message.channel.nsfw && args.includes("-ssoff") && !BotAdmins.includes(message.author.id)) return message.channel.send("You must be in an NSFW channel to use this command without safesearch!")
       
        var Scraper = require('images-scraper'); // could do with puppeteer but lazy
       

  

    var gears = await message.channel.send("<a:gearsd:827796212677476392> Searchin' Da Goog...")
    const google = new Scraper({
      puppeteer: {
        headless: true,
        safe: args.includes("-ssoff") ? false : true
      },
    });
    const index = args.indexOf("-ssoff");
    if (index > -1) {
    args.splice(index, 1);
    }
    
    const results = await google.scrape(args.join(" "), 30)
    var i = 1;
    var embed1 = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayColor)
        .setTitle(`Image Results For "${args.join(" ")}":`)
        .setDescription(`Image ${i}/30:`)
        .addFields(
          { name: "Name:", value: `${results[i].title}​` },
          { name: "Source:", value: `${results[i].source}​` }   
        )
        .setImage(results[i].url)
        .setAuthor(`Requested by ${message.author.username}`)
        .setThumbnail(message.author.displayAvatarURL({ format: "png", dynamic: true }))
        .setFooter(`You can include "-ssoff" anywhere in your query to disable safesearch.`)
        gears.delete()
        const embedtosend = await message.channel.send(embed1);
        const filter = (reaction, user) => {
          return ['⬅️', '🗑', '➡️', 'ℹ️'].includes(reaction.emoji.name) && (user.id === message.author.id) || (['577664680496070686', '394943602318376970'].includes(user.id));
        };
        embedtosend.react("⬅️")
        embedtosend.react("🗑")
        embedtosend.react("➡️")
        embedtosend.react("ℹ️")
         
        const collector = embedtosend.createReactionCollector(filter);

        collector.on('collect', async (reaction, user) => {
          reaction.users.remove(user.id);
            if (reaction.emoji.name === '⬅️') {
                if (i > 1) {
                  i--;
                    var embed2 = new Discord.MessageEmbed()
                    .setColor(message.guild.me.displayColor)
                    .setTitle(`Image Results For "${args.join(" ")}":`)
                    .setDescription(`Image ${i}/30:`)
                    .addFields(
                    { name: "Name:", value: `${results[i].title}​` },
                    { name: "Source:", value: `${results[i].source}​` }   
                    )
                    .setImage(results[i].url)
                    .setAuthor(`Requested by ${message.author.username}`)
                    .setThumbnail(message.author.displayAvatarURL({ format: "png", dynamic: true }))
                    .setFooter(`You can include "-ssoff" anywhere in your query to disable safesearch.`)
                    embedtosend.edit(embed2)
                }
            } else if (reaction.emoji.name === '🗑') {
                embedtosend.delete()

              } else if (reaction.emoji.name === 'ℹ️') {
                if (infoembednum === 0) {
                const infoembed = new Discord.MessageEmbed()
                .setColor(message.guild.me.displayColor)
                .setTitle(`Info about search flags:`)
                .setDescription("Search flags are used within a query to narrow your search. Big Floppa's image search has full compatibility with all of [Google's search operators.](https://ahrefs.com/blog/google-advanced-search-operators/)\nYou can use all search operators on this page within a query to narrow down your search.\nThe search flag \"-ssoff\" is not native to Google, but can be used to disable SafeSearch in your query.")
                .setThumbnail('https://cdn.discordapp.com/avatars/577664680496070686/a_7abfc56c4f998a83576371b4f0b21789.gif?size=256&f=.gif')
                message.channel.send(infoembed)
                infoembednum++;
                }
            } else if (reaction.emoji.name === '➡️') {
                if (i < 30) {
                    i++;
                      var embed3 = new Discord.MessageEmbed()
                      .setColor(message.guild.me.displayColor)
                      .setTitle(`Image Results For "${args.join(" ")}":`)
                      .setDescription(`Image ${i}/30:`)
                      .addFields(
                      { name: "Name:", value: `${results[i].title}​` },
                      { name: "Source:", value: `${results[i].source}​` }   
                      )
                      .setImage(results[i].url)
                      .setAuthor(`Requested by ${message.author.username}`)
                      .setThumbnail(message.author.displayAvatarURL({ format: "png", dynamic: true }))
                      .setFooter(`You can include "-ssoff" anywhere in your query to disable safesearch.`)
                      embedtosend.edit(embed3)
                  }
            }
        })

}
        
           
         

     }
    