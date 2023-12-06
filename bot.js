const fs = require('node:fs');
const path = require('node:path');
const { Client, GatewayIntentBits, Collection, SlashCommandBuilder } = require('discord.js');
const { token, clientID, guildID } = require('./config.json');
const client = new Client(
    {
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.MessageContent
        ]
    }
);

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    client.commands.set(command.data.name, command);
    console.log(`we got ${file}`)
};

client.once('ready', () => {
    console.log('The Demiurge bides its time');
});

client.on('interactionCreate', async interaction => {

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'Oh it went weird', ephemeral: true });
    }
});


client.login(token);