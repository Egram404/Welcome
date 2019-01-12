const Discord = require("discord.js");
const client = new Discord.Client();
//const token = require("./settings.json").token;;
const fs = require("fs");

client.on("ready",() => {
	console.log("I'm online supreme");
});

client.on('guildMemberAdd', member => {
	console.log('User ' + member.user.username + ' as join the server');
	member.guild.channels.get('480929688605425694').send(`-Ꮃelcome ${member.user.username} To **__Versače.__**`)
});

client.login(process.env.BOT_TOKEN);
