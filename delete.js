const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { clientID, guildID, token } = require('./config.json');

const rest = new REST({ version: '10' }).setToken(token);

rest.delete(Routes.applicationGuildCommand(clientID, guildID, '1017288053234085918'))
    .then(() => console.log('Successfully deleted guild command'))
    .catch(console.error);