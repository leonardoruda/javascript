class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }
    set life(newLife) {
        this._life = newLife < 0? 0 : newLife;
    }
}

class Knight extends Character {
    constructor(name) {
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.life = 75;
        this.attack = 15;
        this.defense = 4;
        this.maxLife = this.life;
    }
}

class Saurian extends Character {
    constructor() {
        super('Saurian');
        this.life = 110;
        this.attack = 7;
        this.defense = 6.5;
        this.maxLife = this.life;
    }
}

class Hobgoblin extends Character {
    constructor() {
        super('Hobgoblin');
        this.life = 90;
        this.attack = 6.5;
        this.defense = 5;
        this.maxLife = this.life;
    }
}

class Stage {
    constructor(fighter1, fighter2, fighter1El, fighter2El, logObj) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.log = logObj;
    }

    start() {
        this.update();

        this.fighter1El.querySelector('button').addEventListener('click', () => this.toAttack(this.fighter1, this.fighter2));

        this.fighter2El.querySelector('button').addEventListener('click', () => this.toAttack(this.fighter2, this.fighter1));
    }

    update() {
        this.fighter1El.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.lifebar .bar').style.width = `${f1Pct}%`

        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.lifebar .bar').style.width = `${f2Pct}%`;
        
    }

    toAttack(attacker, attacked) {
        let log = document.querySelector('.log');

        if (attacked.life <= 0) {
            this.log.addMessage('Atacando cachorro morto!');
        } else if (attacker.life <= 0) {
            this.log.addMessage('Morto não ataca!');
        } else {
            let attackFactor = (Math.random() * 2).toFixed(2);
            let defenseFactor = (Math.random() * 2).toFixed(2);

            let actualAttack = attacker.attack * attackFactor;
            let actualDefense = attacked.defense * defenseFactor;

            if (actualAttack > actualDefense) {
                attacked.life -= actualAttack;
                this.log.addMessage(`${attacker.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}!`);
            } else {
                this.log.addMessage(`${attacked.name} defendeu o ataque de ${attacker.name}!`);
            };
        }

        this.update();
        log.scrollTop = log.scrollHeight;
    }
}

class Log {
    list = [];

    constructor(listEl) {
        this.listEl = listEl;
    }

    addMessage(msg) {
        this.list.push(msg);
        this.render();
    }

    render() {
        this.listEl.innerHTML = '';

        for (let i in this.list) {
            this.listEl.innerHTML += `<li>| — ${this.list[i]}</li>`;
        };
    }
}