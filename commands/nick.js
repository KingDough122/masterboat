module.exports = {
    name: "nick",
    aliases: ["setnickname" , "nick"],
    description: "change someones name",
    run: async (client, message, args) => {
      let perm = message.member.hasPermission("ADMINISTRATOR")
      if(!perm) return message.channel.send("No perms")
  
    let user = message.mentions.members.first()
    if(!user) return message.channel.send("user is needed")
  
      let name = args.slice(1).join(" ")
      if(!name) return message.channel.send("name is needed")
  
      user.setNickname(name)
  
      message.channel.send(`${user.user.tag}'s name have changed to ${name}`)
  
    }
  } 