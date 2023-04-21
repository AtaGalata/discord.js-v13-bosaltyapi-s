const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    name: 'ping',
    command: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Açıklama'),
    async run(client, int) {
      int.reply({
        content: "Merhaba", 
        ephemeral: true
      })
    }
};
