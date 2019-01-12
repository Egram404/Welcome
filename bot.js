const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'versace');
 
  if (!channel) return;

  channel.send(`-Ꮃelcome ${member.user.username} To **__Versače.__**`);
});

client.login(process.env.BOT_TOKEN);
