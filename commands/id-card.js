module.exports = {
    name: "idcard",
    description: "sends a ID card image with member's information",
      async execute(message, args, statuses) {
        const Discord = require('discord.js');
        const member = message.mentions.members.first()
        const Canvas = require('canvas');
        const { BotAdmins } = require("../bot.js")
        let Owner = BotAdmins
        const BigFloppa = ['765320611773415465'] // your bot id???


        const ownerismecanvas = Canvas.createCanvas(1400, 1000);
        const ownerismectx = ownerismecanvas.getContext('2d');
        const ownerismebackground = await Canvas.loadImage('./IDCardFormatKingPng.png');
        ownerismectx.drawImage(ownerismebackground, 0, 0, ownerismecanvas.width, ownerismecanvas.height);
        const ownerismeavatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png' }));
        ownerismectx.drawImage(ownerismeavatar, 140, 200, 300, 300);
        ownerismectx.font = 'bold 55px sans-serif';
        ownerismectx.fillStyle = '#0096c3';
        ownerismectx.fillText(message.author.username, 517, 280);
        ownerismectx.font = 'bold 55px sans-serif';
        ownerismectx.fillStyle = '#0096c3';
        ownerismectx.fillText(message.author.discriminator, 517, 440);
        ownerismectx.font = 'bold 55px sans-serif';
        ownerismectx.fillStyle = '#0096c3';
        ownerismectx.fillText(message.author.id, 517, 600);
        ownerismectx.font = 'bold 55px sans-serif';
        ownerismectx.fillStyle = '#0096c3';
        ownerismectx.fillText('Bot King', 517, 755);
        const ownerismeattachment = new Discord.MessageAttachment(ownerismecanvas.toBuffer(), 'id-card.png');

        

        if (message.author.bot) return
        if (Owner.includes(message.author.id) && (!member)) {
            
    
            
      
            
    
    
            message.channel.send(ownerismeattachment)
        } else if ((member) && (BigFloppa.includes(member.id))) {
            const floppacanvas = Canvas.createCanvas(1400, 1000); 
            const floppactx = floppacanvas.getContext('2d');
            const floppabackground = await Canvas.loadImage('./IDCardFormatKingRedPng.png');
            floppactx.drawImage(floppabackground, 0, 0, floppacanvas.width, floppacanvas.height);
            const floppaavatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
            floppactx.drawImage(floppaavatar, 140, 200, 300, 300);
            floppactx.font = 'bold 55px sans-serif';
            floppactx.fillStyle = '#b9031f';
            floppactx.fillText(member.displayName, 517, 280);
            floppactx.font = 'bold 55px sans-serif';
            floppactx.fillStyle = '#b9031f';
            floppactx.fillText(member.user.discriminator, 517, 440);
            floppactx.font = 'bold 55px sans-serif';
            floppactx.fillStyle = '#b9031f';
            floppactx.fillText(member.id, 517, 600);
            
            floppactx.font = 'bold 55px sans-serif';
            floppactx.fillStyle = '#b9031f';
            floppactx.fillText('Big Floppa', 517, 755);
        
            const floppaattachment = new Discord.MessageAttachment(floppacanvas.toBuffer(), 'id-card.png');
            message.channel.send(floppaattachment)
        } else if (Owner.includes(message.author.id) && (member)) {
           if (!Owner.includes(member.id)) {
            const coolcanvas = Canvas.createCanvas(1400, 1000);
            const coolctx = coolcanvas.getContext('2d');
            const coolbackground = await Canvas.loadImage('./IDCardFormat.png');
            coolctx.drawImage(coolbackground, 0, 0, coolcanvas.width, coolcanvas.height);
            const coolavatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
            coolctx.drawImage(coolavatar, 140, 200, 300, 300);
            coolctx.font = 'bold 55px sans-serif';
            coolctx.fillStyle = '#aa0390';
            coolctx.fillText(member.displayName, 517, 280);
            coolctx.font = 'bold 55px sans-serif';
            coolctx.fillStyle = '#aa0390';
            coolctx.fillText(member.user.discriminator, 517, 440);
            coolctx.font = 'bold 55px sans-serif';
            coolctx.fillStyle = '#aa0390';
            coolctx.fillText(member.id, 517, 600);
            coolctx.font = 'bold 55px sans-serif';
            coolctx.fillStyle = '#aa0390';
            
            coolctx.font = 'bold 45px sans-serif';
            coolctx.fillStyle = '#aa0390';
            coolctx.fillText(await statuses.get(member.id), 517, 755);
            const coolattachment = new Discord.MessageAttachment(coolcanvas.toBuffer(), 'id-card.png');
            message.channel.send(coolattachment)
    
        } else
        
        message.channel.send(ownerismeattachment)
    } else if (!Owner.includes(message.author.id) && (!member)) {
        if (message.author.id === "394943602318376970") {
            const firstcanvas = Canvas.createCanvas(1400, 1000);
            const firstctx = firstcanvas.getContext('2d');
            const firstbackground = await Canvas.loadImage('./IDCardFormatKingPng.png');
            firstctx.drawImage(firstbackground, 0, 0, firstcanvas.width, firstcanvas.height);
            const firstavatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png' }));
            const crownimg = await Canvas.loadImage("./crrown.png");
            firstctx.drawImage(firstavatar, 140, 200, 300, 300);
            firstctx.drawImage(crownimg, 140, 500, 300, 300);
            firstctx.font = 'bold 55px sans-serif';
            firstctx.fillStyle = '#0096c3';
            firstctx.fillText(message.author.username, 517, 280);
            firstctx.font = 'bold 55px sans-serif';
            firstctx.fillStyle = '#0096c3';
            firstctx.fillText(message.author.discriminator, 517, 440);
            firstctx.font = 'bold 55px sans-serif';
            firstctx.fillStyle = '#0096c3';
            firstctx.fillText(message.author.id, 517, 600);
            firstctx.font = 'bold 45px sans-serif';
            firstctx.fillStyle = '#0096c3';
            firstctx.fillText("Bot Admin", 517, 755);
             
            const firstattachment = new Discord.MessageAttachment(firstcanvas.toBuffer(), 'id-card.png');
            message.channel.send(firstattachment)
        } else {
        const firstcanvas = Canvas.createCanvas(1400, 1000);
        const firstctx = firstcanvas.getContext('2d');
        const firstbackground = await Canvas.loadImage('./IDCardFormat.png');
        firstctx.drawImage(firstbackground, 0, 0, firstcanvas.width, firstcanvas.height);
        const firstavatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png' }));
        firstctx.drawImage(firstavatar, 140, 200, 300, 300);
        firstctx.font = 'bold 55px sans-serif';
        firstctx.fillStyle = '#aa0390';
        firstctx.fillText(message.author.username, 517, 280);
        firstctx.font = 'bold 55px sans-serif';
        firstctx.fillStyle = '#aa0390';
        firstctx.fillText(message.author.discriminator, 517, 440);
        firstctx.font = 'bold 55px sans-serif';
        firstctx.fillStyle = '#aa0390';
        firstctx.fillText(message.author.id, 517, 600);
        firstctx.font = 'bold 45px sans-serif';
        firstctx.fillStyle = '#aa0390';
        firstctx.fillText(await statuses.get(message.author.id), 517, 755);
         
        const firstattachment = new Discord.MessageAttachment(firstcanvas.toBuffer(), 'id-card.png');
        message.channel.send(firstattachment)
        if (!await statuses.get(message.author.id)) message.channel.send('It appears you have not set a custom status. You may do so by using the command `f;status [your-status]`.')
        }
    } else if (!Owner.includes(message.author.id) && (member)) {
        
        const canvas = Canvas.createCanvas(1400, 1000);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage('./IDCardFormat.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'png' }));
        ctx.drawImage(avatar, 140, 200, 300, 300);
        ctx.font = 'bold 55px sans-serif';
        ctx.fillStyle = '#aa0390';
        ctx.fillText(member.displayName, 517, 280);
        ctx.font = 'bold 55px sans-serif';
        ctx.fillStyle = '#aa0390';
        ctx.fillText(member.user.discriminator, 517, 440);
        ctx.font = 'bold 55px sans-serif';
        ctx.fillStyle = '#aa0390';
        ctx.fillText(member.id, 517, 600);
        ctx.font = 'bold 55px sans-serif';
        ctx.fillStyle = '#aa0390';
        ctx.font = 'bold 45px sans-serif';
        ctx.fillStyle = '#aa0390';
        ctx.fillText(await statuses.get(member.id), 517, 755);


        

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'id-card.png');
        message.channel.send(attachment)
        if (!await statuses.get(member.id)) message.channel.send('It appears this member has not set a custom status. They may do so by using the command `f;status [their-new-status]`.')
        




        
      }}
     
    
    
           
    } 
   