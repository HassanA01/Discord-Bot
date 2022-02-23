const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-'; 

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

for(const file of commandFiles) {

    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.once('ready', ()=> {

    console.log('Anikebot is online! Sheeesh');
});


client.on('message', message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return; 

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(command === 'ping'){
        message.channel.send('Pogchamp');
    } else if (command == 'youtube') {

        message.channel.send('https://www.youtube.com/channel/UChWV1__wqff1zU3h6SPj3iQ');
    }

});

client.login('ODM1MzI2NzYxNDE1MzQ0MTY4.YIN0qw.X1Xy_XP7quWxFQ3amhoF7jpT6Sc');

