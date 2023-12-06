const fs = require('node:fs');
const path = require('node:path');
const { EmbedBuilder } = require('discord.js');


const incants = fs.readdirSync('imgs/incantations').filter(fileName => fileName !== ".DS_Store");
const incant = incants[Math.floor(Math.random() * incants.length)];

const incantEmbed = new EmbedBuilder(incant)
    .set