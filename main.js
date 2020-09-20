const Discord = require('discord.js');
const {Client, Attachment} = require('discord.js')
const bot = new Client();

const token = 'NzQ4NjA4NjIzODE4ODMzOTQx.X0f6HA.Ju24VudnPivXHj0DxsJXJrflf2w';

const prefix = '_';

bot.on('ready', () => {
    console.log('Commander_SP_Bot is online!');
})

bot.on('message', message =>{
   
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'send':
            const attachment = new Discord.MessageAttachment('https://cdn-www.bluestacks.com/bs-images/banner6_02.jpg')
            message.channel.send(message.author, attachment)
        break;
        case 'tree.julius.rally':
            const attachment2 = new Discord.MessageAttachment('./test1.2.2.jpg');
            message.channel.send(message.author, attachment2)
            message.channel.send('test')
        break;
    }
   
})

bot.login('NzQ4NjA4NjIzODE4ODMzOTQx.X0f6HA.Ju24VudnPivXHj0DxsJXJrflf2w');
