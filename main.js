const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "r!";
 
const fs = require('fs');
const { type } = require('os');

//  const huh = what
//  const who = huh
//  const what = who
 
// hhttps://cdn.discordapp.com/attachments/765814562489630724/774498840363401256/RADION_1.png
 

client.on('ready', () => {
    console.log('Bot = On');
       
    });

client.on('ready', () => { client.user.setActivity('r!help for list of commands'); });

client.login('Nzc0NDk0MzcyMzM4MDczNjAx.X6YmFw.bCDDLCbTVTTRBXLer6NZFfkZXTE');

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();


	 if (command === 'help') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('COMMAND LIST')
        .setDescription('```\nhelp, about, add-me```')
	    .setTimestamp()
	    .setFooter('USE r! BEFORE ALL COMMANDS');

        message.channel.send(exampleEmbed);
	}
    if (command === 'about') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('About Me!')
        .setDescription('**PLEASE NOTE THAT RADION IS IN BETA DEVELOPMENT, MANY FEATURES HAVE NOT BEEN CODED SUCH AS MUSIC FEATURES**\nHeya\nI am a Discord Bot created by <@336419799594827778>\nMy main features are simple commands!\nTo learn more about me, feel free to ask my creator <@336419799594827778>')
	    .setTimestamp()
	    .setFooter('Heya!');

        message.channel.send(exampleEmbed);
    }
    if (command === 'add-me') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('CLICK ME', 'https://discord.com/oauth2/authorize?client_id=774494372338073601&scope=bot&permissions=2146958847')
        .setURL('https://discord.com/oauth2/authorize?client_id=774494372338073601&scope=bot&permissions=2146958847')
        .setImage('https://cdn.discordapp.com/attachments/765814562489630724/774498840363401256/RADION_1.png')
        .setDescription('Add Radion To Your Server By Clicking The Title')
	    .setTimestamp()
	    .setFooter('Have Fun With Me!');

        message.channel.send(exampleEmbed);
    }
    if (command === 'testing') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`${message.author}`,)
        
        .setTitle('test')
        .setDescription('huh??')
	    .setTimestamp()
	    .setFooter('Radion', 'https://cdn.discordapp.com/attachments/765814562489630724/774498840363401256/RADION_1.png');

        message.channel.send(exampleEmbed);
    }
    
});


// Moderation


client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0]) {
        case 'kick' :

        const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user);

            if (member) {
                member.kick({reason: 'ask mod for reason'}).then(() =>{
                    message.reply(`${user.tag} has been kicked`)
                    })


                } else {
                    message.reply*("That user isn\'t in the guild")
            } 

            } else { 
                message.reply('you need to specify a user')
            }
            break;

        
    }
});

//banned

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0]) {
        case 'ban' :

        const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user);

            if (member) {
                member.ban({reason: 'ask mod for reason'}).then(() =>{
                    message.reply(` ${user.tag} has been kicked`)
                    })


                } else {
                    message.reply*("That user isn\'t in the guild")
            } 

            } else { 
                message.reply('you neet to specify a user')
            }
            break;

        
    }
});

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0]) {
        case 'r!clear' :

        const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user);

            if (member) {
                message.reply({reason: 'you were bad!'}).then(() =>{
                    message.reply(`messages were cleared`)
                    })


                } else {
                    message.reply*("That number doesnt exist")
            } 

            } else { 
                message.reply('you neet to specify a number')
            }
            break;

        
    }
});

// MUTE
client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0]) {
        case 'r!mute' :

        const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user);

            if (member) {
                member.mute({reason: 'you were bad!'}).then(() =>{
                    message.reply(`${user.tag} has been muted`)
                    })


                } else {
                    message.reply*("That user isn\'t in the guild")
            } 

            } else { 
                message.reply('you need to specify a person')
            }
            break;

        
    }
});



// MUSIC


const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "r!";
 
const fs = require('fs');
const { type } = require('os');

//  const huh = what
//  const who = huh
//  const what = who
 
// hhttps://cdn.discordapp.com/attachments/765814562489630724/774498840363401256/RADION_1.png
 

client.on('ready', () => {
    console.log('Bot = On');
       
    });

client.on('ready', () => { client.user.setActivity('r!help for list of commands'); });

client.login('Nzc0NDk0MzcyMzM4MDczNjAx.X6YmFw.bCDDLCbTVTTRBXLer6NZFfkZXTE');

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();


	 if (command === 'help') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('COMMAND LIST')
        .setDescription('```\nhelp, about, add-me```')
	    .setTimestamp()
	    .setFooter('USE r! BEFORE ALL COMMANDS');

        message.channel.send(exampleEmbed);
	}
    if (command === 'about') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('About Me!')
        .setDescription('**PLEASE NOTE THAT RADION IS IN BETA DEVELOPMENT, MANY FEATURES HAVE NOT BEEN CODED SUCH AS MUSIC FEATURES**\nHeya\nI am a Discord Bot created by <@336419799594827778>\nMy main features are simple commands!\nTo learn more about me, feel free to ask my creator <@336419799594827778>')
	    .setTimestamp()
	    .setFooter('Heya!');

        message.channel.send(exampleEmbed);
    }
    if (command === 'add-me') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('CLICK ME', 'https://discord.com/oauth2/authorize?client_id=774494372338073601&scope=bot&permissions=2146958847')
        .setURL('https://discord.com/oauth2/authorize?client_id=774494372338073601&scope=bot&permissions=2146958847')
        .setImage('https://cdn.discordapp.com/attachments/765814562489630724/774498840363401256/RADION_1.png')
        .setDescription('Add Radion To Your Server By Clicking The Title')
	    .setTimestamp()
	    .setFooter('Have Fun With Me!');

        message.channel.send(exampleEmbed);
    }
    if (command === 'testing') {
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`${message.author}`,)
        
        .setTitle('test')
        .setDescription('huh??')
	    .setTimestamp()
	    .setFooter('Radion', 'https://cdn.discordapp.com/attachments/765814562489630724/774498840363401256/RADION_1.png');

        message.channel.send(exampleEmbed);
    }
    
});


// Moderation


client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0]) {
        case 'kick' :

        const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user);

            if (member) {
                member.kick({reason: 'ask mod for reason'}).then(() =>{
                    message.reply(`${user.tag} has been kicked`)
                    })


                } else {
                    message.reply*("That user isn\'t in the guild")
            } 

            } else { 
                message.reply('you need to specify a user')
            }
            break;

        
    }
});

//banned

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0]) {
        case 'ban' :

        const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user);

            if (member) {
                member.ban({reason: 'ask mod for reason'}).then(() =>{
                    message.reply(` ${user.tag} has been kicked`)
                    })


                } else {
                    message.reply*("That user isn\'t in the guild")
            } 

            } else { 
                message.reply('you neet to specify a user')
            }
            break;

        
    }
});

client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0]) {
        case 'r!clear' :

        const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user);

            if (member) {
                message.reply({reason: 'you were bad!'}).then(() =>{
                    message.reply(`messages were cleared`)
                    })


                } else {
                    message.reply*("That number doesnt exist")
            } 

            } else { 
                message.reply('you neet to specify a number')
            }
            break;

        
    }
});

// MUTE
client.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ");
    
    switch (args[0]) {
        case 'r!mute' :

        const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user);

            if (member) {
                member.mute({reason: 'you were bad!'}).then(() =>{
                    message.reply(`${user.tag} has been muted`)
                    })


                } else {
                    message.reply*("That user isn\'t in the guild")
            } 

            } else { 
                message.reply('you need to specify a person')
            }
            break;

        
    }
});



