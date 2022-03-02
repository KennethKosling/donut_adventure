//Random Function

function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}


//Hero Class and Instantiation

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

    fight(enemy){
        console.log('I\'m ready to rumble!')
        let weapon = this.weapons.sugarShock
        console.log(weapon)
        // enemy.health -= weapon
        console.log(enemy.name + ' got hit by sugarShock! His health is now at ' + enemy.health + '!')
    }
}

const dougie = new Hero('Dougie the Donut')


//Enemy Class and Instantiation

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

    fight(hero) {
        console.log('I\'m gonna flatten you like a slice of pepperoni!')
        let weapon = this.weapons.pepperoniStars
        hero.health -= weapon
        console.log(hero.name + ' got hit by pepperoniStars! His health is now at ' + hero.health + '!')
    }
}

const rat = new Enemy('Pizza Rat')


//Story Start

dougie.talkSass()
rat.talkSmack()

dougie.announceHealth()
rat.announceHealth()

dougie.fight(rat)
rat.fight(dougie)