const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios');
const cheerio = require('cheerio');

const turn = () => Math.floor(Math.random() * 60 + 1);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sooth')
        .setDescription('Turns a sooth card')
    ,
    async execute(interaction) {
        console.log('turning');
        const num = turn();

        const sooth = new EmbedBuilder()
            .setURL(`https://app.invisiblesunrpg.com/soothdeck/card-${num}/`)
            .setImage(`https://app.invisiblesunrpg.com/wpsite/wp-content/uploads/2018/04/${num}.png`)

        const { data } = await axios.get(`https://app.invisiblesunrpg.com/soothdeck/card-${num}/`);
        const $ = cheerio.load(data);
        const info = $('div.entry-content');
        const title = info.find('h2').text();
        const text = [];
        info.children().children().each(function (i, elem) {
            text.push({});
            text[i] = $(this).text().trim();
        })
        const family = text[2];
        const img = `https://app.invisiblesunrpg.com/wpsite/wp-content/uploads/2018/04/${num}.png`;
        console.log(text[0]);
        sooth.setTitle(title);
        sooth.setFields({ name: 'Family', value: `${family}`, inline: true })
        await interaction.reply({ embeds: [sooth], ephemeral: false });
    },
};