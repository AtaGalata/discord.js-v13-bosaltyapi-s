const {REST} = require('@discordjs/rest');
const {Routes} = require('discord-api-types/v9');
const {Collection} = require("discord.js")
const fs = require("fs")
const config = require("../ayarlar");

module.exports = client => {
    client.slashInteractions = new Collection();

    let globalSlashCommands = [];
    let yüklenenSlash = []
    var sayi = 0

    fs.readdir("./komutlar/", (err, files) => {
        if (err) return console.log(err);
        files.forEach(f => {
            if(!f) return;
            if(!f.endsWith(".js")) return;
            let cmd = require(`../komutlar/${f}`);
            client.slashInteractions.set(cmd.name, cmd);
            globalSlashCommands.push(cmd.command);
            yüklenenSlash.push(cmd.name)
        })
        sayi += files.length
    });

    setTimeout(() => {
        yüklenenSlash.forEach(i => {
            //console.log("Yüklenen Slash Komutu : "+i)
        })
        console.log(`[✓] - Slash Komutlar Yüklendi ! (${sayi} tane)`)
    }, 500);


    let rest = new REST({version: '9'}).setToken(config.token);
    client.on("ready", async () => {
        try {
            await rest.put(
                Routes.applicationCommands(client.user.id), {
                    body: globalSlashCommands
                },
            );
            console.log('[✓] - Slash Komutlar Ayarlandı !');
        } catch (error){
            return console.log(error)
        } 
    });
}

