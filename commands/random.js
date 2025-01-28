const { SlashCommandBuilder } = require('discord.js');
const RandomEffect = require('../utils/random-effect.js');
const fs = require('node:fs');

const effectsArray = fs.readdirSync('./assets/lists/effects')
    .filter(fileNames => fileNames !== ".DS_Store")
    .map(fileName => fileName.substring(0, fileName.lastIndexOf('.')))

const possibleEffects = []

const choices = [
    {name: 'mishap', value: 'mishap'},
    {name: 'minor-flux', value: 'minor-flux'}
]

console.log(`Array: ${effectsArray}`)
console.log(`Objects: ${possibleEffects}`)

module.exports = {
    data: new SlashCommandBuilder()
        .setName('random')
        .setDescription('Produces a desired random effect')
        .addStringOption(option =>
            option.setName('effect')
                .setDescription('What manner of effect?')
                .addChoices(...choices)
                .setRequired(true)
        ),
    async execute(interaction) {
        const effectType = interaction.options.getString('effect');

        const effect = new RandomEffect(effectType)

        console.log(`fetching ${effectType}`)
        await interaction.reply({
            content: effect.getRandom(),
            ephemeral: true
        });
    },
};

