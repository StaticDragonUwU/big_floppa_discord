const Discord = require('discord.js')

module.exports = {
	name: 'floppadefine',
	description: 'cool gamer moment',
	 async execute(message, args) {
		const querystring = require('querystring');
		const fetch = require('node-fetch')
		const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
		
		const query = querystring.stringify({ term: args.join(' ') });
		
		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
		if (!list.length) {
			return message.channel.send('are you stupid? floppa cannot answer that')
		}
		
		
		const [answer] = list;
		let resultsEmbed = new Discord.MessageEmbed()
		 .setColor(message.guild.me.displayColor)
		 .setTitle(`**${answer.word}**`)
		 .setAuthor('Baby Floppa\'s INFINITE Wisdom', 'https://media.discordapp.net/attachments/684171493688737797/779478205127327764/flopp.png?width=440&height=475')
		 .setThumbnail('https://media.discordapp.net/attachments/684171493688737797/779478205127327764/flopp.png?width=440&height=475')
		 .addFields(
			{ name: `**Floppa's personal definition.**`, value: trim(answer.definition, 1024) },
			{ name: `**Floppa's examples of your word.**`, value: trim(answer.example, 1024) },
			{ name: '**WHAT!??!! Floppa got reviews!!??**', value: `👍 ${answer.thumbs_up}  👎 ${answer.thumbs_down}` }
		 );
		 message.channel.send(resultsEmbed)


}};