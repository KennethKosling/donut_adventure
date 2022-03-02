function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

class Hero {
    constructor(name, health, weapons, catchPhrases) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        };
        this.catchPhrases = ['i\'m fresher than day old pizza',
        'you can\'t count my calories']
    }

    talkSass(){
        console.log(this.catchPhrases[getRandomInt(0, 2)])
    }

    announceHealth(){
        console.log(this.health)
    }

    fight(){
        console.log('I\'m ready to rumble')
    }
}

const dougie = new Hero('Dougie the Donut')

dougie.talkSass()