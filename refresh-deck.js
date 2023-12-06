const Deck = require('./utils/deck')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Alright which deck huh\n', deckName => {
    const refresher = new Deck(deckName);
    refresher.refresh();
    console.log(`Alright buddy we refreshed ${deckName}`)
    readline.close();
});