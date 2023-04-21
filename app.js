const {Client,Intents,MessageActionRow,MessageButton,MessageEmbed,Collection,MessageSelectMenu} = require("discord.js");
const config = require("./ayarlar");
const client = new Client({intents: 32767});

require("./util/eventLoader")(client)
require("./util/slashHandler")(client)

client.login(config.token);