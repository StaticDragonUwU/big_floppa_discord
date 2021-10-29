

module.exports = {      
	name: 'ytdl',
	description: 'downloads a youtube video in mp4 format, then sends it.',
	async execute(message, args) {
    const { YTDownload } = require("../bot.js")
    if (args.length > 1) {
      return message.channel.send('Only youtube links are accepted.')
    } else if (!args[0]) {
      return message.channel.send('Please enter a youtube link to download.')
    }
    message.channel.send("Downloading...")
      YTDownload(args[0]);
    }
  };





       