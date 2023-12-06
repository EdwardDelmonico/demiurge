const Deck = require('../utils/deck');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('incant')
        .setDescription('Draws a random incantation')
    ,
    async execute(interaction) {

        const incants = new Deck('incantations');
        const res = incants.random();

        console.log(`${interaction.user.username} got ${res.slice(0, -4)}`);
        await interaction.reply({
            files: [{
                attachment: incants.getPath(res)
            }],
            ephemeral: true
        });

        incants.discard(res);
    },
};