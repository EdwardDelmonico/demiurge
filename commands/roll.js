const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Rolls a d10')
        .addIntegerOption(option =>
            option.setName('number')
                .setDescription('How many dice?')
                .setRequired(false)
        )
        .addIntegerOption(option =>
            option.setName('venture')
                .setDescription('Modifier?')
                .setRequired(false)
        )
    ,
    async execute(interaction) {
        const number = interaction.options.getInteger('number');
        const venture = interaction.options.getInteger('venture');

        console.log(`rolling ${number} venture ${venture}`);
        let firstRoll = '';
        if (venture) {
            firstRoll = `Modifier: ${venture}\n`
        }
        const roll = () => Math.floor(Math.random() * 10) + venture;
        firstRoll += roll().toString();

        if (number) {
            if (number > 10) {
                firstRoll = 'oh get bent'
            } else {
                for (let i = 1; i < number; ++i) {
                    firstRoll += ` **${roll()}**`
                }
            }
        }
        await interaction.reply(firstRoll);
    },
};

