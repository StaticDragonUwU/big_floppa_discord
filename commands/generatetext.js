module.exports = {
    name: "generatetext",
    description: "stolen from jeffery epstein",
    async execute(message, args) {
            const db = require("quick.db")
            const puppeteer = require("puppeteer")
              if (db.get(`workingonit${message.guild.id}`) === true) return message.channel.send(`sorry ${message.member.displayName}, but ${db.get(`whoasked${message.guild.id}`)} just gave me some really good input. I'll look at yours after i generate some text for them.`)
              if (!args[0]) return message.channel.send("This command needs input. Example: f;generatetext Today I was walking down the street when I was struck by lightning.")
              db.set(`workingonit${message.guild.id}`, true)
              db.set(`whoasked${message.guild.id}`, message.author.username)
              setTimeout(() => {
                db.delete(`workingonit${message.guild.id}`)
                  db.delete(`whoasked${message.guild.id}`)
              }, 30000)
              const question = args.join(" ")
              const browser = await puppeteer.launch({ headless: true })
              message.channel.startTyping()
              const page = await browser.newPage()
              await page.goto("https://6b.eleuther.ai/")
              await page.type(".prompt-textarea", question)
              await page.click(".button-primary")
              let finishedloading;
              var inter1 = setInterval(async () => {
                const text = await page.evaluate(() => {
                  if (!document.getElementsByClassName("loader-text")[0]) {
                    
                    return true
                  }  
                  else return false
                })
                if (text) {
                  clearInterval(inter1)
                  finishedloading = text
                }
              }, 3000)
              var interval = setInterval(async () => {
                if (finishedloading === true) {
                  message.channel.stopTyping()
                  const result = await page.evaluate(() => {
                    try {
                    document.getElementsByClassName("prompt-in-result-bold")[0].remove()
                    return document.getElementsByClassName("result-text")[0].innerHTML
                    } catch (error) {
                      return "Error Generating."
                    }
                  })
                  var res = `**${question}**${result}`
                  try {
                  message.channel.send(`**${question}**${result}`)
                  } catch (error) {
                    message.channel.send(`Couldn't send the message (possibly too long)`)
                  }
                  db.delete(`workingonit${message.guild.id}`)
                  db.delete(`whoasked${message.guild.id}`)
                  await browser.close()
                  clearInterval(interval)
                }
              }, 1000)
            }
          }
    
