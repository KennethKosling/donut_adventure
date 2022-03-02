function random(min, max) {
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
        this.catchPhrases = ['I\'m fresher than day old pizza',
        'You can\'t count my calories']
    }

    talkSass(){
        console.log(this.catchPhrases[random(0, 2)])
    }

    announceHealth(){
        console.log(this.health)
    }

    fight(){
        console.log('I\'m ready to rumble!')
    }
}

const dougie = new Hero('Dougie the Donut')

class Enemy {
    constructor(name, health, weapons, catchPhrases) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10
        };
        this.catchPhrases = ['I\'m youtube famous',
        'I\'m more dangerous than an uncovered sewer']
    }

    talkSmack() {
        console.log(this.catchPhrases[random(0,2)])
    }

    announceHealth() {
        console.log(this.health)
    }

    fight() {
        console.log('I\'m gonna flatten you like a slice of pepperoni!')
    }
}

const rat = new Enemy('Pizza Rat')