const { stripIndents, oneLine } = require('common-tags');
const Discord = require("discord.js");
const bot = new Discord.Client();

let prefix = "r!";
let owner = "335082465561673728"; 

bot.on("ready", () => {
    bot.user.setGame(prefix + "yardım | " + bot.guilds.size + " Sunucu | Rahatsız Adam Tekrardan Doğuyor | Bir Ölür Bin Diriliriz!") 
    console.log("Bağlandım!")   
});

 

bot.on("message", message => {
    

    if (message.content === prefix + "ping") {
        message.reply("**Benim Pingim `" + bot.ping + "` ms 🏓** ");
      }
      if (message.content.startsWith("r!avatar")) {
        let user = message.mentions.users.first();
        if (message.mentions.users.size < 1) return message.reply('Kimin Avatarını İstediğini Yazmalısını').catch(console.error);
        const embed = new Discord.RichEmbed()
        .setColor(0x00BFFF)
        .setTimestamp()
        embed.setImage(`${user.avatarURL}`)
        return message.channel.sendEmbed(embed);
    }
      if (message.content.toLowerCase() === "sa") {    
        message.reply("**as** ");
        message.react("👋🏼")

      }

    if (message.content.toLowerCase() === prefix + 'reload') {
        const embed = new Discord.RichEmbed()
        message.delete()
        if (message.author.id !== '335082465561673728' ) {
          message.reply('`reload` komutunu kullanmak için gerekli izne sahip değilsin!');
        } else {
          message.channel.sendMessage(`<@335082465561673728> ***Yeniden Başlıyorum*** 📮 `).then(message => {
          console.log(`BOT: Bot yeniden başlatılıyor...`);
          process.exit(0);
        })
       }
      }
      if (message.content.toLowerCase() === prefix + 'temizle') {
        if (message.author.id !== '335082465561673728' ) {
            message.reply('`temizle` komutunu kullanmak için gerekli izne sahip değilsin!');
          } else {
            message.channel.bulkDelete(100);
            message.channel.sendMessage(":white_check_mark:  `100` adet mesaj başarılı bir şekilde silindi!");
   }
  }

    if (message.content === prefix + "sunucubilgi") {
        const embed = new Discord.RichEmbed()

        .setAuthor(message.author.username, message.author.avatarURL)

            .addField("Sunucu Adı", message.guild.name, true)

            .addField("Sunucu ID", message.guild.id, true)

            .addField("Sunucu Sahibi", message.guild.owner, true)

            .addField("Toplam Üye Sayısı", message.guild.memberCount, true)

            .addField("AFK Süresi", message.guild.afkTimeout, true)

            .setFooter("Oluşturulma Tarihi " + message.guild.createdAt)

            .setColor(0xa0522d)

        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "yardım") {
        const embed = new Discord.RichEmbed()       

        .setAuthor(message.author.username, message.author.avatarURL)
           
           .addField('= ___Moderasyan Komutları___ =','***YAKINDA***')

           .addField(' = ___Bot Komutları___ =','r!yardım = Botun Bütün komutları gösterir.\nr!sunucbilgi = Sunucu hakkındabilgi verir. \nr!bot-bilgi = Bot hakkında bilgi verir.\nr+ping = Botun pingini gösterir.')

           .addField('= ___Kullanıcı Komutları___ =', 'r!avatar = Etiketlenen kişinin avatarını gösterir.\nr!bdavet = Botun davet linkini gösterir. \nr!dsunucu = Botun destek sunucusunu gösterir')

           .addField('= ___Eğlence Komutları___ =', 'r!kurabiye = Size kurabiye verir.\nr!çay-iç = Sıcak Bir Çay Verir. ')

           .addField('•__Yapımcı__', 'Batu#2016')
        
            .addField('•__Yaparken Yardım Eden__','🔥Tufan Şahin🔥#7771')

           .setColor(0x6a5acd)

        return message.channel.sendEmbed(embed)
    }
    if (message.content === prefix + "dsunucu") {
        const embed = new Discord.RichEmbed()

            .addField('https://goo.gl/AXrEa1','***Yukardaki linkten botun destek sunucusuna ulaşabilirsin***')

            .setColor(0x97ffff)
        
        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "bdavet") {
        const embed = new Discord.RichEmbed()

            .addField('https://goo.gl/zPpnnF','***Yukardaki linkten botun davet edebilirsiniz***')

            .setColor(0x97ffff)
        
        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "çay-iç") {
        const embed = new Discord.RichEmbed()

        .setAuthor(message.author.username, message.author.avatarURL)

        .addField(message.author.username,"***Sıcak Bir Çay İçiyor***")

        .setImage("https://geekyapar.com/wp-content/uploads/2017/01/%C3%87ay-Tarihi-5-1.jpg")

            .setColor(0x97ffff)
        
        return message.channel.sendEmbed(embed)
    }
    
        if (message.content === prefix + "lahmacun") {
        const embed = new Discord.RichEmbed()

        .setAuthor(message.author.username, message.author.avatarURL)

        .addField(message.author.username,"***Güzel Bir Lahmacun Yemekte!***")

        .setImage("http://ladyandpups.com/wp-content/uploads/2014/10/lahmacun-and-ayran21.jpg")

            .setColor(0x97ffff)
        
        return message.channel.sendEmbed(embed)
    }


    if (message.content === prefix + "bot-bilgi") {
        const embed = new Discord.RichEmbed()

        .setAuthor(message.author.username, message.author.avatarURL)

            .addField("Bot Sahibi", `<@${owner}>`, true)

            .addField("Version", "0.0.2", true)

            .addField("Toplam Sunucu Sayısı", bot.guilds.size, true)

            .addField("Toplam Kullanıcı Sayısı", bot.users.size, true)
            
            .addField("Toplam Kanal Sayısı", bot.channels.size, true)

            .addField("Kitaplık Türü", "discord.js")

            .setColor(0x97ffff)
        
        return message.channel.sendEmbed(embed)
    }

    if (message.content === prefix + "kurabiye") {
        message.channel.sendMessage(`Canım gel buraya sana kurabiye vereceğim! <@${message.author.id}>`)
        message.react("🍪")
    }
});

bot.on("message", message => {

    const kufur = ["amk", "aq"];
    if (kufur.some(word => message.content.includes(word)) ) {
        message.reply("***Sen Kime Küfür Ediyorsun Lan Küfür Yasak Eğer Çok İstiyorsan adamla adama özelden küfür et!Chati kirletmeye hakkın yok***")
        message.delete()
    }
});

bot.login("NDI3MDc5NDQ4OTUzNjE4NDMy.DZfUPw.22YMsxizZtq9ZU6p62KgZu64icI")

