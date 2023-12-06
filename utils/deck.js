const fs = require('node:fs');

class Deck {
    constructor(deckName) {
        this.deckName = deckName;
        this.deckPath = `imgs/${this.deckName}`;
        this.discardPath = `imgs/discard/${this.deckName}`;
        this.deckContents = fs.readdirSync(this.deckPath).filter(fileName => fileName !== ".DS_Store");
        this.discardContents = fs.readdirSync(this.discardPath).filter(fileName => fileName !== ".DS_Store");
    }

    getPath = card => {
        return `${this.deckPath}/${card}`;
    }

    random = () => {
        const rand = Math.floor(Math.random() * this.deckContents.length);
        return this.deckContents[rand];
    }

    randomSpread = num => {
        for (let i = 0; i < num; ++i) {
            this.random();
        }
    }

    discard = card => {
        const oldPath = `${this.deckPath}/${card}`;
        const newPath = `${this.discardPath}/${card}`;

        fs.rename(oldPath, newPath, function (err) {
            if (err) throw { err };
            console.log('Moved to used')
        })
    }

    refresh = () => {
        for (let card of this.discardContents) {
            const oldPath = `${this.discardPath}/${card}`;
            const newPath = `${this.deckPath}/${card}`;
            fs.rename(oldPath, newPath, function (err) {
                if (err) throw { err };
            })
        }
        console.log(`${this.deckName} refreshed`);
    }
}

module.exports = Deck;
