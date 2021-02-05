const Discord = require('discord.js');


exports.run = async function(client, msg) {
  
  
  //Buraya komut gelecek
  
}

exports.conf = {
  enabled: true, // Komut aktif mi ?
  guildOnly: true, // Komut sadece sw de mi kullanılabilir ?
  aliases: ['varyasyonlar1', 'varyasyonlar2', 'varyasyonlar3'],
  permLevel: 0 // Yetki seviyesi 0 Herkes, 2 Ban yetkisi olanlar, 3 Adminler, 4 Bot Owner
};

exports.help = {
  name: 'ornekkomut', // Komut ismi
  description: 'Açıklama gerek yok', // Komut açıklama
  usage: 'Kullanım gerek yok' // Komut kullanım
};