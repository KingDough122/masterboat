const discord = require("discord.js")

module.exports = {
    name: "staffcount",
    aliases: ["staffroles"],
    description: "Get a reply with the count of the roles.",
    run: (client, message, args) => {
        let amount = message.guild.roles.cache.get("776109779449020456").members.size
    message.channel.send(`${amount} Staff Members!`)
    }
}
