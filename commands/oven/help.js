const fs = require('node:fs');
const path = require('node:path');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


const help = fs.readdirSync('imgs/help').filter(fileName => fileName !== ".DS_Store");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Rules references')
        .addStringOption(option =>
            option.setName('category')
                .setRequired(true)
                .addChoices(
                    { name: 'order', value: 'order' },
                    { name: 'forte', value: 'forte' }
                )
        )
    ,
    async execute(interaction) {
        console.log(`${interaction.user.username}`);
        await interaction.reply({
            files: [{
                attachment: `imgs/help/goetic/Goetic Handout.png`
            }],
            ephemeral: true
        });
    },
};