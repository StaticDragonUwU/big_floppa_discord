const BotAdmins = ['577664680496070686'] // add or remove admins

module.exports.BotAdmins = BotAdmins;
const os = require('os');
const fs = require('fs');
const chalk = require('chalk')
const Discord = require('discord.js');
const { token } = require('./config.json')
const client = new Discord.Client({ disableMentions: 'everyone' });
client.commands = new Discord.Collection();
const ytdl = require("discord-ytdl-core");
const yts = require('yt-search');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.login(token);
let globalPrefix = 'f;';

const db = require("quick.db")
const sleep = async (ms) => new Promise(resolve => setTimeout(resolve, ms))
const cyan = chalk.cyanBright;
const green = chalk.greenBright;
const magenta = chalk.magentaBright;
const yellowb = chalk.yellowBright;
const yellow = chalk.yellow;
(async () => {
 console.log(`                   _ |\\_
                   \\\` ..\\
              __,.-" =__Y=
            ."        )   
      _    /   ,    \/\_
     ((____|    )_-\ \_-\`
     \`-----'\`-----\` \`--\``)
 
console.log(yellowb`\nBig Floppa v1.4.4`)
await sleep(1000)
console.log(`Initializing...`)

})()
setTimeout(() => {
  console.log(`
${cyan('UPTIME:')} ${(process.uptime() / 60).toFixed(2)} MINUTES
${green('MEMORY:')} ${((os.totalmem() / 1024 / 1024 / 1024) - (os.freemem / 1024 / 1024 / 1024)).toFixed(2)} / ${(os.totalmem / 1024 / 1024 / 1024).toFixed(2)} GB USED 
${magenta('PROCESS MEMORY USAGE:')} ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
${yellow('TOTAL SONG COUNT:')} ${db.get('songcount')}
`);
}, 10000)  
setInterval(() => {
  console.log(`
${cyan('UPTIME:')} ${(process.uptime() / 60).toFixed(2)} MINUTES
${green('MEMORY:')} ${((os.totalmem() / 1024 / 1024 / 1024) - (os.freemem / 1024 / 1024 / 1024)).toFixed(2)} / ${(os.totalmem / 1024 / 1024 / 1024).toFixed(2)} GB USED
${magenta('PROCESS MEMORY USAGE:')} ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
${yellow('TOTAL SONG COUNT:')} ${db.get('songcount')}
`);
}, 600000)


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
  db.set('processsongcount', db.get('songcount'))
  
  
 
	console.log(green  `\nFinished!`);
  setInterval(async () => {
    var usernum = 0;
    const games = [`GTA 6`, `Minecraft`, `Youtube`, `Chess`, `Cyberpunk 2077`, `Portal 2`, `Left 4 Dead`, `TF2`, `Left 4 Dead 2`, `CS:GO`, `Stellaris`, `Roblox`, `GTA 5`, `Terraria`, `Friday Night Funkin'`]
    client.guilds.cache.forEach(guild => {
      usernum += guild.memberCount;
    })  
    setTimeout(() => {
      client.user.setPresence({
        status: 'online',
        activity: {
            name: `${db.get(`currentstatus`)} | ${usernum} users! | f;help` || `${games[Math.floor(Math.random() * games.length)]} with ${usernum} users! | f;help`,
            type: 'PLAYING',
            // `${games[Math.floor(Math.random() * games.length)]} with ${usernum} users! | f;help`
            
        }
    });
    }, 10000);
    
    
  }, 60000);
});
var connected = false;
setInterval(() => {
  if (db.get("displayad") === true && connected === false) {
    const RPC = require('discord-rpc')

    const rpc2 = new RPC.Client({
        transport: 'ipc'
    })

      rpc2.login({
        clientId: '804493260994510888'
      })
      
    rpc2.on('ready', () => {

      
       
          rpc2.setActivity({
            details: "Free Premium Music!",
            state: "Bass, Pitch, Speed, Etc.",
            largeImageKey: 'flop',
            largeImageText: 'The Biggest Floppa',
            buttons: [
              {
                label: "Top.gg Page", url: "https://top.gg/bot/765320611773415465"
              },
              {
                label: "Direct Invite", url: "https://discord.com/oauth2/authorize?client_id=765320611773415465&permissions=8&scope=bot"
              }
            ]
        })
      connected = true;
        
    });
  }
}, 15000)

async function updateCommandCounter() {
   await db.set("commandnumber", db.get("commandnumber") + 1)
}
client.on("guildCreate", async (guild) => {
  db.set(`volume_${guild.id}`, 1)
  db.set(`${guild.id}_bassboost`, 0)
  db.set(`${guild.id}_bassboost`, 0)
  db.set(`${guild.id}_deepslow`, false)
  db.set(`${guild.id}_nightcore`, false) // init dbs
  let channelID;
  let thechannels = guild.channels.cache;

  channelLoop:
  for (let key in thechannels) {
      let c = thechannels[key];
      if (c[1].type === "text") {
          channelID = c[0];
          break channelLoop;
      }
  }
  
  let thechannel = guild.channels.cache.get(guild.systemChannelID || channelID);
  
  const joinEmbed = new Discord.MessageEmbed()
  .setColor('#ffffff')
  .setAuthor('Big Floppa')
  .setTitle(`Hi! I'm **Big Floppa**, your new favorite Discord bot!`)
  .addFields(
  { name: '**API / Web**', value: "kanyerest, floprestroom, floppadefine, image, generatetext"},
  { name: '**Server**', value: "chmsg, newrole, lockchannel, unlockchannel, say, bulkdel" },
  { name: '**Music**', value: "play, stop, skip, earrape, unearrape, volume, loop, leave, someoneplayingshit, pause, resume, search, lyrics, bassboost, deepslow, nightcore, speed, pitch, modifiers, defaults" },  
  { name: '**Users**', value: "addrole, removerole, idcard, status" },
  { name: '**Media Interaction**', value: "ytdl, igdl" },
  { name: '**Bot**', value: "updatelog" },
  )
  .setDescription(`I have lots of commands, why not try a few out! My prefix is \`f;\``)
  .setThumbnail('https://media.discordapp.net/attachments/684171493688737797/779478205127327764/flopp.png?width=440&height=475')
  .setFooter(`Fun Fact: My embed color will always be the same color as my name! (except when my name doesn't have a color)`)
          
  thechannel.send(joinEmbed);
  thechannel.send(`(NEW) Also be sure to join our new support server! discord.gg/JRPZ429X6m`)
});



 

const queue = new Map();



client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});

client.on('voiceStateUpdate', (oldState, newState) => {
  
  if (oldState.channelID === null || typeof oldState.channelID == 'undefined') return;
  
  if (newState.id === client.user.id) {
    return queue.delete(oldState.guild.id);
  }
  
  if (oldState.channelID !==  oldState.guild.me.voice.channelID || newState.channel)
  return;


if (!oldState.channel.members.filter(m => !m.user.bot).size) 
  setTimeout(() => { 
    if (!oldState.channel.members.filter(m => !m.user.bot).size)
       oldState.channel.leave(); 
   }, 300000); 
  
  


  
});
 

client.on("message", async message => {


 /**
  * Downloads a youtube link as a .mp4 video, through ytdl-core.
  * @param {String} str The youtube link to download.
  */
async function YTDownload(str) {
const fs = require('fs');
 const ytdl = require('ytdl-core');


 const ytdownloadfiles = fs.readdirSync('./youtubedownloads')


const filenumber = (ytdownloadfiles.length + 1)

fs.openSync(`./youtubedownloads/big-floppa-ytdl-${filenumber}.mp4`, 'w')

   
   const stream = ytdl(str, { filter: 'audioandvideo' }).pipe(fs.createWriteStream(`./youtubedownloads/big-floppa-ytdl-${filenumber}.mp4`))
   stream.on("finish", async function() {
      
      
    
      await message.channel.send(`Here is your video!`, { files: [`./youtubedownloads/big-floppa-ytdl-${filenumber}.mp4`] }).catch(err => {
        message.channel.send('This video is over 8mb, and cannot be sent.')
        fs.writeFileSync(`./youtubedownloads/big-floppa-ytdl-${filenumber}.mp4`, '', function(){console.log('done')})
       
      })
      fs.writeFileSync(`./youtubedownloads/big-floppa-ytdl-${filenumber}.mp4`, '', function(){console.log('done')})
      
        
  







    })
}
module.exports.YTDownload = YTDownload;

if (message.author.bot) return;


  
  
  let prefix;

		if (message.content.startsWith(globalPrefix)) {
			prefix = globalPrefix;
		} else {
			
			const guildPrefix = await db.get(`${message.guild.id}_prefix`);
			if (message.content.startsWith(guildPrefix)) prefix = guildPrefix;
		}
		
		
		



  

  

  
  const serverQueue = queue.get(message.guild.id);
 
    
   if (!message.content.startsWith(prefix)) return;
   const args = message.content.slice(prefix.length).trim().split(/ +/);
   const commandName = args.shift().toLowerCase();
   
   
     
   if (message.content.startsWith(`${prefix}play`)) {

   
    updateCommandCounter()

    
   execute(message, serverQueue);
    return;
    
  } else if (message.content.startsWith(`${prefix}skip`)) {


    updateCommandCounter()
 
    skip(message, serverQueue);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {

    
    updateCommandCounter()
 
    stop(message, serverQueue);
    return;
       
  } else if (message.content.startsWith(`${prefix}volume`)) {

    if (message.member.roles.cache.find(r => r.name === "Volume Perms") || (BotAdmins.includes(message.author.id))) {
    
    
      updateCommandCounter()
    if (!serverQueue) return message.channel.send('A song must be playing first.');
    if (!args[0]) return message.channel.send(`Current volume: **${db.get(`volume_${message.guild.id}`)}**`)
    if (!parseFloat(args[0])) return message.channel.send(`Volume must be a number. Got "${args[0]}".`)
        serverQueue.volume = args[0];
        db.set(`volume_${message.guild.id}`, args[0])
        serverQueue.connection.dispatcher.setVolume(args[0])
        message.channel.send(`Setting volume to **${args[0]}**.`)
      
    } else message.channel.send('You need a role called **Volume Perms**!')

  } else if (message.content.startsWith(`${prefix}deepslow`)) {

    if (message.member.roles.cache.find(r => r.name === "Volume Perms") || (BotAdmins.includes(message.author.id))) {
      db.get(`${message.guild.id}_deepslow`) === false || null ? db.set(`${message.guild.id}_deepslow`, true) : db.set(`${message.guild.id}_deepslow`, false)
      message.channel.send(`Deepslow set to: **${db.get(`${message.guild.id}_deepslow`)}**`)
   
    } else message.channel.send('You need a role called **Volume Perms**!')

  } else if (message.content.startsWith(`${prefix}nightcore`)) {

    if (message.member.roles.cache.find(r => r.name === "Volume Perms") || (BotAdmins.includes(message.author.id))) {
      db.get(`${message.guild.id}_nightcore`) === false || null ? db.set(`${message.guild.id}_nightcore`, true) : db.set(`${message.guild.id}_nightcore`, false)
      message.channel.send(`Nightcore set to: **${db.get(`${message.guild.id}_nightcore`)}**`)
      
    } else message.channel.send('You need a role called **Volume Perms**!')
  


      } else if (message.content.startsWith(`${prefix}earrape`)) {
    
        if (message.member.roles.cache.find(r => r.name === "Volume Perms") || (BotAdmins.includes(message.author.id))) {
       
          updateCommandCounter()
          if (!serverQueue) return message.channel.send('A song must be playing first.');
        
      
                db.set(`volume_${message.guild.id}`, 1000)
                serverQueue.connection.dispatcher.setVolume(1000)
                message.channel.send(`Earraping current song.`)
                return
        } else message.channel.send('You need a role called **Volume Perms**!')
                
              
        
        
        
        
        
              
       
         } else if (message.content.startsWith(`${prefix}unearrape`)) {
      
      if (!serverQueue) return message.channel.send('A song must be playing first.');
     
      updateCommandCounter()
      serverQueue.volume = 1;
      db.set(`volume_${message.guild.id}`, 1)
          serverQueue.connection.dispatcher.setVolume(1)
          message.channel.send(`Un-Earraping(???) current song.`)
    
       } else if (message.content.startsWith(`${prefix}loop`)) {
    
          if (!serverQueue) return message.channel.send(`There's no song playing.`) 
          if (!message.member.voice.channel) return message.channel.send(`You need to be in a voice channel first.`) 
        
          updateCommandCounter()
          serverQueue.loop = !serverQueue.loop
          message.channel.send(`Looping is now ${serverQueue.loop ? `**Enabled**` : `**Disabled**`}`)
       
         
       } else if (message.content.startsWith(`${prefix}leave`)) {
    
        const voiceChannel = message.member.voice.channel
        if (!voiceChannel) return message.channel.send('You must be in a voice channel!')
        voiceChannel.leave()
         message.channel.send(`Left voice channel. Queue reset.`)
        
         updateCommandCounter()
        } else if (message.content.startsWith(`${prefix}serversinfo`)) {
          if (owner.includes(message.author.id)) {
          
            message.channel.send(`Ok, I've logged the information to the terminal.`)
            client.guilds.cache.forEach(guild => {
                console.log(`${guild.name}, with ${guild.memberCount} members, ID ${guild.id}.`)
                
                
            });
            updateCommandCounter() 
          } else return message.channel.send('Only the owner may use this command.')
    } else if (message.content.startsWith(`${prefix}pause`)) {
  
      if (!serverQueue) return message.channel.send('There is no song playing!')
      serverQueue.connection.dispatcher.pause();
      message.channel.send('Music paused.')

      updateCommandCounter()
   
    } else if (message.content.startsWith(`${prefix}speed`)) {   
  
      if (!message.member.roles.cache.find(r => r.name === "Volume Perms")) return message.channel.send("You need a role called `Volume Perms`!")
      if (!args[0]) return message.channel.send("You need to specify a number! Example: `f;speed 2` = 2x speed")
      if (isNaN(parseFloat(args[0]))) return message.channel.send("Speed amount must be a number! Example: `f;speed 3` = 3x Speed")
      if (parseFloat(args[0]) > 6 || parseFloat(args[0]) < 0.1) return message.channel.send("Maximum speed: 2x, Minimum speed: 0.3x")
      db.set(`${message.guild.id}_speed`, parseFloat(args[0]))
      message.channel.send(`Set speed to \`${db.get(`${message.guild.id}_speed`)}x\`. This will take effect next song.`)
   
      updateCommandCounter()


    } else if (message.content.startsWith(`${prefix}pitch`)) {
  
      if (!message.member.roles.cache.find(r => r.name === "Volume Perms")) return message.channel.send("You need a role called `Volume Perms`!")
      if (!args[0]) return message.channel.send("You need to specify a number! Example: `f;pitch 2` = 2x pitch")
      if (isNaN(parseFloat(args[0]))) return message.channel.send("Pitch amount must be a number! Example: `f;pitch 3` = 3x Pitch")
      if (parseFloat(args[0]) > 6 || parseFloat(args[0]) < 0.1) return message.channel.send("Maximum pitch: 2x, Minimum pitch: 0.3x")
      db.set(`${message.guild.id}_pitch`, parseFloat(args[0]))
      message.channel.send(`Set pitch to \`${db.get(`${message.guild.id}_pitch`)}x\`. This will take effect next song.`)

      updateCommandCounter()


    } else if (message.content.startsWith(`${prefix}defaults`)) {
  
      if (!message.member.roles.cache.find(r => r.name === "Volume Perms")) return message.channel.send("You need a role called `Volume Perms`!")
     
      db.set(`${message.guild.id}_pitch`, 1)
      db.set(`${message.guild.id}_bassboost`, 0)
      db.set(`${message.guild.id}_speed`, 1)
      db.set(`${message.guild.id}_nightcore`, false)
      db.set(`${message.guild.id}_deepslow`, false)
      db.set(`volume_${message.guild.id}`, 1)

      message.channel.send(`Returned music modifiers to default.`)
    
      updateCommandCounter()
    } else if (message.content.startsWith(`${prefix}modifiers`)) {
      var modEmbed = new Discord.MessageEmbed()
      .setTitle("All Modifiers:")
      .setColor(message.guild.me.displayColor)
      .setFooter(`Use the command f;defaults to return settings to default.`)
      .setDescription(`Volume: ${db.get(`volume_${message.guild.id}`)}\nBass: +${db.get(`${message.guild.id}_bassboost`)} db\nDeepslow: ${db.get(`${message.guild.id}_deepslow`)}\nNightcore: ${db.get(`${message.guild.id}_nightcore`)}\nPitch: ${db.get(`${message.guild.id}_pitch`)}x\nSpeed: ${db.get(`${message.guild.id}_speed`)}x`)
      message.channel.send(modEmbed)
   } else if (message.content.startsWith(`${prefix}bassboost`)) {

    if (!message.member.roles.cache.find(r => r.name === "Volume Perms")) return message.channel.send("You need a role called `Volume Perms`!")
    if (!args[0]) return message.channel.send("You need to specify a number! Example: `f;bassboost 3` = +3 Bass")
    if (isNaN(parseFloat(args[0]))) return message.channel.send("Bassboost amount must be a number! Example: `f;bassboost 3` = +3 Bass")
    if (parseFloat(args[0]) > 100 || parseFloat(args[0]) < -100) return message.channel.send("bro chill tf out, keep it at or below 100")
    db.set(`${message.guild.id}_bassboost`, args[0])
    message.channel.send(`Set bassboost to \`${db.get(`${message.guild.id}_bassboost`)}x\`. ${parseFloat(args[0]) <= 100 ? "This will take effect next song." : `Jesus christ, ${args[0]}? holy shit`}`)
   
   } else if (message.content.startsWith(`${prefix}resume`)) {

    if (!serverQueue) return message.channel.send('There is no song playing!')
     serverQueue.connection.dispatcher.resume();
     message.channel.send(`Music resumed.`)
     
     updateCommandCounter()

} else if (message.content.startsWith(`${prefix}someoneplayingshit`)) {
  if (!serverQueue) return message.channel.send('There is no song playing!')
  const voiceChannel = message.member.voice.channel
  voiceChannel.leave()
   message.channel.send(`Damn bro that sucks, ill leave i guess`)
  
   updateCommandCounter()
} else if (message.content.startsWith(`${prefix}search`)) {
  
  var dln = 0;
  
  var videonum = 0;
  var i = 1;
  const { videos } = await yts.search(args.join(" "));
  if (!videos) return message.channel.send("No videos found!")
  var embed1 = new Discord.MessageEmbed()
  .setColor(message.guild.me.displayColor)
            .setTitle(`Results For "${args.join(" ")}":`)
            .setDescription(`**${i}:** ${videos[videonum].title}`)
            .addFields(
              { name: "Uploaded By:", value: `${videos[videonum].author.name}​` },
              { name: "Views:", value: `${videos[videonum].views}​` },
              { name: "URL:", value: `${videos[videonum].url}​` },
              { name: "Length:", value: `${videos[videonum].timestamp}​` },
              { name: "Description:", value: `${videos[videonum].description}​` }
            )
            .setImage(videos[videonum].thumbnail)
            .setAuthor(`Requested by ${message.author.tag}`)
            .setThumbnail(message.author.displayAvatarURL({ format: "png", dynamic: true }))
            .setFooter(`${i}/30 Results`)
            
            const embedtosend = await message.channel.send(embed1);
            const filter = (reaction, user) => {
              return ['⬅️', '▶', '➡️', '⬇️', 'ℹ️'].includes(reaction.emoji.name) && user.id === message.author.id;
            };
            embedtosend.react("⬅️")
            embedtosend.react("▶")
            embedtosend.react("⬇️")
            embedtosend.react("➡️")
            embedtosend.react("ℹ️")
            const collector = embedtosend.createReactionCollector(filter);

           
            collector.on('collect', async (reaction, user) => {
              reaction.users.remove(user.id);
              if (reaction.emoji.name === '⬅️') {
               
                if (i > 1) {
      
                  videonum--;
                  i--;
                
                  var embed3 = new Discord.MessageEmbed()
                  .setColor(message.guild.me.displayColor)
                  .setTitle(`Results For "${args.join(" ")}":`)
                  .setDescription(`**${i}:** ${videos[videonum].title}`)
                  .addFields(
                    { name: "Uploaded By:", value: `${videos[videonum].author.name}​` },
                    { name: "Views:", value: `${videos[videonum].views}​` },
                    { name: "URL:", value: `${videos[videonum].url}​` },
                    { name: "Length:", value: `${videos[videonum].timestamp}​` },
                    { name: "Description:", value: `${videos[videonum].description}​` }
                  )
                  .setImage(videos[videonum].thumbnail)
                  .setAuthor(`Requested by ${message.author.tag}`)
                  .setThumbnail(message.author.displayAvatarURL({ format: "png", dynamic: true }))
                  .setFooter(`${i}/30 Results | Use ⬅️ & ➡️ to navigate, and ▶ to play your song!`)
                  embedtosend.edit(embed3)
                } 
            
                
                
                
                  } else if (reaction.emoji.name == '▶') {
                    if (!message.member.voice.channel) return message.channel.send("You need to be in a voice channel to play the song!")
                    embedtosend.reactions.removeAll();
                const anotherembed = new Discord.MessageEmbed()
                .setColor(message.guild.me.displayColor)
                      .setTitle(`Now Playing: ${videos[videonum].title}`)
                      
                      .addFields(
                        { name: "Uploaded By:", value: `${videos[videonum].author.name}​` },
                        { name: "Views:", value: `${videos[videonum].views}​` },
                        { name: "URL:", value: `${videos[videonum].url}​` },
                        { name: "Length:", value: `${videos[videonum].timestamp}​` },
                        { name: "Description:", value: `${videos[videonum].description}​` }
                      )
                      .setImage(videos[videonum].thumbnail)
                      .setAuthor(`Requested by ${message.author.tag}`)
                      .setThumbnail(message.author.displayAvatarURL({ format: "png", dynamic: true }))
                      .setFooter(`${i}/30 Results | Use ⬅️ & ➡️ to navigate, and ▶ to play your song!`)
                 
                
                    embedtosend.edit(anotherembed)
                   
                    var song = {
                      title: videos[videonum].title,
                      url: videos[videonum].url
                    };
                      if (!serverQueue) {
                        const queueContruct = {
                          textChannel: message.channel,
                          voiceChannel: message.member.voice.channel,
                          connection: null,
                          songs: [],
                          volume: 5,
                          playing: true,
                          loop: false
                        }
                    
                        queue.set(message.guild.id, queueContruct);
                    
                        queueContruct.songs.push(song);
                    
                        try {
                          var connection = await message.member.voice.channel.join();
                          queueContruct.connection = connection;
                          play(message.guild, queueContruct.songs[0]);
                        } catch (err) {
                          console.log(err);
                          queue.delete(message.guild.id);
                          return message.channel.send(err);
                        }
                      } else {
                        serverQueue.songs.push(song);
                        return message.channel.send(`${song.title} has been added to the queue!`);
                      }
                  

                    
                  } else if (reaction.emoji.name == '⬇️') {
                    if (dln > 0) return message.channel.send(`You can only download once per command!`)
                    var seconds = videos[videonum].seconds;
                    if (seconds > 360) return message.channel.send("That video is too long! (Maximum 6 minutes)")
                    message.channel.send(`Downloading...`);
                    dln++;
                    YTDownload(videos[videonum].url)
                  }
                    else if (reaction.emoji.name == '➡️') {
              
                    if (i < 30) {
                      videonum++;
                      i++;  
                      
                      var embed2 = new Discord.MessageEmbed()
                      .setColor(message.guild.me.displayColor)
                      .setTitle(`Results For "${args.join(" ")}":`)
                      .setDescription(`**${i}:** ${videos[videonum].title}`)
                      .addFields(
                        { name: "Uploaded By:", value: `${videos[videonum].author.name}​` },
                        { name: "Views:", value: `${videos[videonum].views}​` },
                        { name: "URL:", value: `${videos[videonum].url}​` },
                        { name: "Length:", value: `${videos[videonum].timestamp}​` },
                        { name: "Description:", value: `${videos[videonum].description}​` }
                      )
                      .setImage(videos[videonum].thumbnail)
                      .setAuthor(`Requested by ${message.author.tag}`)
                      .setThumbnail(message.author.displayAvatarURL({ format: "png", dynamic: true }))
                      .setFooter(`${i}/30 Results | Use ⬅️ & ➡️ to navigate, and ▶ to play your song!`)
                      embedtosend.edit(embed2)
                  
                }
              } else if (reaction.emoji.name == 'ℹ️') {
                  const infoembed = new Discord.MessageEmbed()
                .setTitle(`Information on reactions:`)
                .setDescription(`⬅️: Switch to previous search result.\n▶: Play the current search result (Must be in VC).\n⬇️: Attempt to download and send current search result.\n➡️: Switch to next search result.\nℹ️: Press to see information on the embed navigator reactions.`)
                .setTimestamp()
                .setColor(message.guild.me.displayColor)
                  message.channel.send(infoembed)
                }
                
             
            

           
           
 

     
});  
}

async function execute(message, serverQueue) {
  const args = message.content.split(" ");
     

  const voiceChannel = message.member.voice.channel
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  let song;
  if (args.includes("v=")) {
    newargs = args.substring()
  }
if (ytdl.validateURL(args[1])) {
  
  const songInfo = await ytdl.getInfo(args[1]);
  song = {
    title: songInfo.videoDetails.title,
    url: songInfo.videoDetails.video_url
  };
} else {             
  const {videos} = await yts(args.slice(1).join(" ").includes("bts") ? "GARBAGE (a song)" : args.slice(1).join(" "));
  if (!videos.length) return message.channel.send("No songs were found!");
 
  song = {
    title: videos[0].title,
    url: videos[0].url
  };
}

  
  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 1,
      playing: true,
      loop: false
    }

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    try {
      var connection = await voiceChannel.join();
      queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`${song.title} has been added to the queue!`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  message.member.voice.channel.leave()
}

async function play(guild, song) {
  
  const serverQueue = queue.get(guild.id);

  if (!song) {
    if (!serverQueue) return
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;  
  }
  if (!serverQueue) return
   let ffmpegArgs = ``;
   let ytdlObj = {
     filter: 'audioonly',
     quality: 'highestaudio',
     highWaterMark: 1 << 25,
     encoderArgs: [`-af`]
   }
   if (db.get(`${message.guild.id}_bassboost`) !== null || 0 || undefined) {
      ffmpegArgs += (`${ffmpegArgs[0] ? "," : ""}bass=g=${db.get(`${message.guild.id}_bassboost`)}`)
   }   
   if (db.get(`${message.guild.id}_deepslow`) === true) {
    if (db.get(`${message.guild.id}_nightcore`) === true) { 
      message.member.voice.channel.leave()
      return message.channel.send("Error: Deepslow cannot be enabled at the same time as Nightcore.")
    }
    ffmpegArgs += (`${ffmpegArgs[ffmpegArgs.length -1] === "," ? "" : ","}asetrate=44100*0.5`)
    ffmpegArgs += (`${ffmpegArgs[ffmpegArgs.length -1] === "," ? "" : ","}aresample=44100`)
   }
   if (db.get(`${message.guild.id}_nightcore`) === true) {
    if (db.get(`${message.guild.id}_deepslow`) === true) {
      message.member.voice.channel.leave()
      return message.channel.send("Error: Deepslow cannot be enabled at the same time as Nightcore.")
    }
    ffmpegArgs += (`${ffmpegArgs[ffmpegArgs.length -1] === "," ? "" : ","}atempo=1.01`)
    ffmpegArgs += (`${ffmpegArgs[ffmpegArgs.length -1] === "," ? "" : ","}asetrate=44100*1.35`)
   }
   if (db.get(`${message.guild.id}_speed`) !== 1) {
    if (db.get(`${message.guild.id}_nightcore`) === true) {
      message.member.voice.channel.leave()
      return message.channel.send("Error: Speed and nightcore are conflicting commands.")
    }
    if (db.get(`${message.guild.id}_deepslow`) === true) {
      message.member.voice.channel.leave()
      return message.channel.send("Error: Speed and deepslow are conflicting commands.")
    }
     if (db.get(`${message.guild.id}_pitch`) !== 1) {
      message.member.voice.channel.leave()
      return message.channel.send("Error: Pitch and Speed are conflicting commands. (Pitch changes tempo and pitch, speed changes tempo only.)")
     }
     ffmpegArgs += (`${ffmpegArgs[ffmpegArgs.length -1] === "," ? "" : ","}atempo=${db.get(`${message.guild.id}_speed`)}`)
   }
   if (db.get(`${message.guild.id}_pitch`) !== 1) {
    if (db.get(`${message.guild.id}_nightcore`) === true) {
      message.member.voice.channel.leave()
      return message.channel.send("Error: Pitch and nightcore are conflicting commands.")
    }
    if (db.get(`${message.guild.id}_deepslow`) === true) {
      message.member.voice.channel.leave()
      return message.channel.send("Error: Pitch and deepslow are conflicting commands.")
    }
    ffmpegArgs += `${ffmpegArgs[ffmpegArgs.length - 1] === "," ? "" : ","}asetrate=44100*${db.get(`${message.guild.id}_pitch`)},atempo=1/${db.get(`${message.guild.id}_pitch`)}`
   }
   ytdlObj.encoderArgs.push(ffmpegArgs)
   db.set('songcount', db.get('songcount') + 1);
  console.log(`+1 song`)
   const dispatcher = serverQueue.connection 
   
  .play(ytdl(song.url, ytdlObj), { type: "converted" } )
   
    .on("finish", () => {
      if (!serverQueue.loop) serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(1);
  serverQueue.volume = db.get(`volume_${message.guild.id}`) !== null || undefined ? parseFloat(db.get(`volume_${message.guild.id}`)) : 1
  await dispatcher.setVolume(db.get(`volume_${message.guild.id}`) !== null || undefined ? parseFloat(db.get(`volume_${message.guild.id}`)) : 1)

  
  const messages = [`Now Playing: \n**${song.title}**`, `\n**${song.title}**`, `Trash song dude... \n**${song.title}**`, `Good song, but have you heard of "Your Cum Won't Last" By OblivionFall afterDark? \n**${song.title}**`, `Don't take my children please... \n**${song.title}**`, `Binche. \n**${song.title}**`]

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  
  
  
  
     
  
  const PlayEmbed = new Discord.MessageEmbed()
   .setTitle(`Floppa Music`)
   .setColor(message.guild.me.displayColor)
   .setDescription(randomMessage)
   .setAuthor(`Requested by ${message.author.username}`)
   .setThumbnail(message.author.displayAvatarURL({ format: "png", dynamic: true }))
   .setImage("https://cdn.discordapp.com/attachments/684171493688737797/834299769991725066/floppafield.png")
   .setFooter(`Click ⚙ to see all music modifiers.`)
   
  
  serverQueue.textChannel.send(PlayEmbed)
  .then(m => {  
    const filter = (reaction, user) => {
      return '⚙'.includes(reaction.emoji.name) && user.id === message.author.id;
    };
    m.react("⚙")
    const collector = m.createReactionCollector(filter);

           
    collector.on('collect', async (reaction, user) => {
      reaction.users.remove(user.id);
      if (reaction.emoji.name === '⚙') {
        var embed = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayColor)
        .setFooter(`Use the command f;defaults to return settings to default.`)
        .setDescription(`Volume: ${db.get(`volume_${message.guild.id}`)}\nBass: +${db.get(`${message.guild.id}_bassboost`)} db\nDeepslow: ${db.get(`${message.guild.id}_deepslow`)}\nNightcore: ${db.get(`${message.guild.id}_nightcore`)}\nPitch: ${db.get(`${message.guild.id}_pitch`)}x\nSpeed: ${db.get(`${message.guild.id}_speed`)}x`)
        message.channel.send(embed)
      }
    })

  })
}
  
  module.exports.play = play;
  const command = client.commands.get(commandName)
  || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

if (!command) return; 

  try {
    command.execute(message, args);
    updateCommandCounter()
  } catch (error) {
    console.error(error);
  }
  



 

})
  
	
		
		
		
		 
		
		
		
		
		 
	
       
		
		 
			 
		 
   
  
  
  
  
   
  
  

