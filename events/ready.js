const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = client => {
	client.user.setPresence({ activities: [{ name: `@${client.user.username}` , type: "WATCHING"}], status: 'dnd' });
	const channelId = "1098326154118697111"
	const guildId = "1062810906347700234"
	//joinVoiceChannel({channelId: channelId,guildId: guildId,adapterCreator: client.guilds.cache.get(guildId).voiceAdapterCreator});
	setTimeout(()=> {
		console.log(`
---------------------------------------
-------> Bot Çalışmaya başladı <-------
---------------------------------------
		`)
	},500)
}