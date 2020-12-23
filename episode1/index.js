const Discord = require('discord.js');
const client = new Discord.Client()
const { token } = require('./config.json');

client.on('ready', () => {
    console.log('ready to be used, Logged in')
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});


client.login(token)