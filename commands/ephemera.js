const Deck = require('../utils/deck');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ephemera')
        .setDescription('Draws a random ephemera object')
        .addIntegerOption(option =>
            option.setName('number')
                .setDescription('How many cards?')
                .setRequired(false)
        )
    ,
    async execute(interaction) {

        const ephemera = new Deck('ephemera');
        const res = ephemera.random();

        console.log(`${interaction.user.username} got ${res.slice(0, -4)}`);
        await interaction.reply({
            files: [{
                attachment: ephemera.getPath(res)
            }],
            ephemeral: true
        });
    },
};