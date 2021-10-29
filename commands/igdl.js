const path = require("path")


module.exports = {
    name: "igdl",
    description: "ytdl, but for instagram :troled:",
    async execute(message, args) {
      if (!args[0]) return message.channel.send("You need to include an instagram link to download!")
      const pleaseWaitMessage = await message.channel.send(`Processing Request... This may take some time.`)
      const fs = require("fs")
      const puppeteer = require('puppeteer')
      const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
      const browser = await puppeteer.launch({ headless: true })
      const page = await browser.newPage()
      await page.setViewport({
        width: 1200,
        height: 800
    });
     
      await page.goto("https://instaoffline.net/")
      await sleep(2000)
      await page.type("#fileURL", args[0], { delay: 60 })
      await page.click("#submit")
      await sleep(6000)
      
      let link = await page.evaluate(() => {
        document.getElementsByClassName("col-md-6   ")[0].children[1].click()
        return document.getElementsByClassName("col-md-6   ")[0].children[1].href
      })
      setDownloadBehavior()
      
      /**
       * Returns either "reel" or "media" based off of an instagram link
       * @param {String} argument The link to test for
       * @returns {String} either "reel" or "media"
       */
      function determineMediaType(argument) {
        if (argument.includes("reel")) return "reel";
        else return "media";  
      }
      
      
     
      
      /**
       * Sets the download permissions of the page; required for headless downloads in Chromium.   
       * @returns {void} 
       */
      function setDownloadBehavior() {
        return page._client.send('Page.setDownloadBehavior', {
            behavior: 'allow', 
            downloadPath: path.resolve(`${__dirname}/igdownloadfiles`)
        });
    }
  
     
      
      
       
    
      
      
      
      
      
      await message.channel.send(`Found ${determineMediaType(args[0])}! Downloading...`)
      
      if (!link.includes("mp4")) return message.channel.send(`Error downloading: igdl currently doesn't support downloading for image files :/ (just screenshot bro)`)
      
     
      var linkFirstPart = link.split("/")[5]

      var videoName = linkFirstPart.split(".mp4")[0]
      var videoPath = `${__dirname}/igdownloadfiles/${videoName}.mp4`
      
      
      setInterval(async () => {
       
        if (fs.existsSync(videoPath)) {
          await browser.close()
          
        
          
            await message.channel.send("Here is your video!", { files: [videoPath] })
            fs.truncate(videoPath, (err) => {console.log(err)})  
            return fs.unlink(videoPath, (err) => {console.log(err)})
        
          
          
        }
      
      }, 5000)
      
      
      



     }}
