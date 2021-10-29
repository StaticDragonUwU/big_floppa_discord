const Discord = require('discord.js')

module.exports = {
	name: 'kanyerest',
	description: 'returns a random kanye quote',
	 async execute(message, args) {

		const fetch = require('node-fetch')
		
		
		
		
		 const result = await fetch(`https://api.kanye.rest/`).then(response => response.json());
		
		
		
		
		 
		let resultsEmbed = new Discord.MessageEmbed()
         .setColor(message.guild.me.displayColor)
         .setImage('https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed00f17d4a99d0006d2e738%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D154%26cropX2%3D4820%26cropY1%3D651%26cropY2%3D5314')
         .setTitle(`"${result.quote}" \n-Kanye West`)
       
		
		 try {
			 
		 message.channel.send(resultsEmbed)
         } catch(error) {
             message.channel.send(':x: An unknown error occured.')
         }
}};