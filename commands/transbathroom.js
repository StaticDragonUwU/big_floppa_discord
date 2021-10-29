const Discord = require('discord.js')

module.exports = {
	name: 'floprestroom',
	description: 'finds restrooms safe for genderqueer people.',
	 async execute(message, args) {
		const querystring = require('querystring');
		const fetch = require('node-fetch')
	
		
		message.channel.send(`:toilet: Searching... :toilet:`)
		const search = querystring.stringify({ query: args.join(' ') })
		const list = await fetch(`https://www.refugerestrooms.org/api/v1/restrooms/search?${search}`).then(response => response.json());
		
		if (!list.length) {
			return message.channel.send('sorry no potty')
		}
		
		
		const [answer] = list;
		let resultsEmbed = new Discord.MessageEmbed()
         .setColor(message.guild.me.displayColor)
         .setThumbnail('https://cdn.discordapp.com/attachments/773929318740000768/785914345062268998/e95fc7b02d3ed5a2138c7b4f4286bca2.png')
         .setTitle(`**Restroom found in ${answer.city}, ${answer.state}, ${answer.country}.**`)
         .addFields(
            { name: `**Location:**`, value: `>${answer.name}` },
            { name: `**Street:**`, value: `>${answer.street}` },
			{ name: `**Unisex:**`, value: `>${answer.unisex}` },
            { name: '**Directions:**', value: `>${answer.directions}` },
            { name: `**Comment:**`, value: `>${answer.comment}`},
            { name: `**Coordinates (lat, long):**`, value: `>${answer.latitude}, ${answer.longitude}`},
            { name: `**Changing Table:**`, value: `>${answer.changing_table}`},
            { name: `**Accessible:**`, value: `>${answer.accessible}`},


		 );
		 try {
			 
		 message.channel.send(resultsEmbed)
         } catch(error) {
             message.channel.send(':x: An unknown error occured.')
         }
}};