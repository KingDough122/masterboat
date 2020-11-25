
const discord = require("discord.js")

module.exports = {
    name: "ping",
    aliases: ["pinging"],
    description: "Get a reply with pong",
    run: async (client, message, args) => {
      message.channel.send("Pong!")
    }
  } 