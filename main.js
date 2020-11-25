const fs = require("fs")
const discord = require("discord.js")
const prefix = "!"
const client = new discord.Client()

client.commands = new discord.Collection()


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

client.aliases = new discord.Collection()
for (const file of commandFiles) {
  const command = require(`./commands/${file}`)
  command.aliases.forEach(alias => client.aliases.set(alias, command.name))
  client.commands.set(command.name, command)
}

client.on("ready", async () => {
    console.log("Master bot is online!");
     await client.user.setActivity(" Exotic Botlist Discord Members. ", {type: "WATCHING",});
    console.log(`Activity set!`);
  })

  client.on("message", async (message) => {
    if (!message.guild) return;
    if (message.author.bot) return;
  if(message.author.bot) return
 
  if(message.content.startsWith(prefix)) {
  
  if(!message.member) message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase()
  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command))
 
  if(cmd === null ) return
 
  if(cmd) cmd.run(client, message, args) 
  if(!cmd) return
     }

     let stats = {
        total: "780912336595976233",
        member: "780912383852937218",
        bots: "780912440631754763",
        serverID: "776101752088690688"
      }
 
      client.on("guildMemberAdd", member => {
        if (member.guild.id !== stats.serverID) return;
        console.log(member.guild.id !== stats.serverID)
        client.channels.cache.get(stats.total).setName(`୨୧ 𝘛𝘰𝘵𝘢𝘭 𝘔𝘦𝘮𝘣𝘦𝘳𝘴: ${member.guild.memberCount}`);
        client.channels.cache.get(stats.member).setName(`୨୧ 𝘔𝘦𝘮𝘣𝘦𝘳𝘴: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
        client.channels.cache.get(stats.bots).setName(`୨୧ 𝘙𝘰𝘣𝘰𝘵𝘴: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
      })
 
      client.on("guildMemberRemove", member => {
        if (member.guild.id !== stats.serverID) return;
        client.channels.cache.get(stats.total).setName(`୨୧ 𝘛𝘰𝘵𝘢𝘭 𝘔𝘦𝘮𝘣𝘦𝘳𝘴: ${member.guild.memberCount}`);
        client.channels.cache.get(stats.member).setName(`୨୧ 𝘔𝘦𝘮𝘣𝘦𝘳𝘴: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
        client.channels.cache.get(stats.bots).setName(`୨୧ 𝘙𝘰𝘣𝘰𝘵𝘴: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
      })

      
    })
     
    

      client.login('Nzc5NDIzNTA3NDYwNTIyMDY0.X7gUtQ.t64qS0n6Qcp5RxDyUgSWdTMzyOI')