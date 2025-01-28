const fs = require('node:fs');

class RandomEffect {
    constructor(effectList) {
        this.effectType = effectList;
        this.effectPath = `../assets/lists/effects/${effectList}.js`
        console.log(`looking in ${this.effectPath} for effects`)
        this.effects = require(this.effectPath)
    }

    print = () => {
        for (let effect of this.effects) {
            console.log(effect)
        }
    }

    getRandom = () => {
        return this.effects[Math.floor(Math.random() * (this.effects.length))]
    }
}

module.exports = RandomEffect