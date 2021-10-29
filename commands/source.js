module.exports = {
    name: "source",
    description: "sends a link to the repository",
    execute(message, args) {
        message.channel.send("Open source at this repository.\nhttps://github.com/5tatic/big_floppa_discord");
    }
}
