const Discord = require('discord.js');


exports.run = async function(client, msg) {
  
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

client.send(exampleEmbed);
  
}

exports.conf = {
  enabled: false, // Komut aktif mi ?
  guildOnly: true, // Komut sadece sw de mi kullanılabilir ?
  aliases: ['', '', ''],
  permLevel: 0 // Yetki seviyesi 0 Herkes, 2 Ban yetkisi olanlar, 3 Adminler, 4 Bot Owner
};

exports.help = {
  name: 'profilolustur', // Komut ismi
  description: 'Açıklama gerek yok', // Komut açıklama
  usage: 'Kullanım gerek yok' // Komut kullanım
};