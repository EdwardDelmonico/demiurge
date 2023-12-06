const fs = require('node:fs');
const path = require('node:path');
const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
// const Card = require('./embeds/cardEmbed');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('newcard')
        .setDescription('get a card')
    ,
    async execute(interaction) {
        console.log('works');
        await interaction.reply({
            content: 'hi nerd',
            ephemeral: true,
        });
    },
};