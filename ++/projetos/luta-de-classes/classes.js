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
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character {

    constructor(name) {
        super(name);
        this.life = 100;
        this.maxLife = this.life;
        this.attack = 10;
        this.defense = 8;
    }
}

class Sorcerer extends Character {

    constructor(name) {
        super(name);
        this.life = 75;
        this.maxLife = this.life;
        this.attack = 14;
        this.defense = 3;
    }
}

class Goblin extends Character {

    constructor() {
        super('Goblin');
        this.life = 40;
        this.maxLife = this.life;
        this.attack = 5;
        this.defense = 4;
    };
}

class Hobgoblin extends Character {

    constructor() {
        super('Hobgoblin');
        this.life = 150;
        this.maxLife = this.life;
        this.attack = 8;
        this.defense = 6;
    }
}

class Stage {

    constructor(hero1, hero2, hero1El, hero2El, monster1, monster2, monster1El, monster2El) {
        this.hero1 = hero1;
        this.hero2 = hero2;
        this.hero1El = hero1El;
        this.hero2El = hero2El;

        this.monster1 = monster1;
        this.monster1El = monster1El;
        this.monster2 = monster2;
        this.monster2El = monster2El;
    }

    start() {
        this.update();

        this.hero1El.querySelector('.attack1-btn').addEventListener('click', () => this.doAttack(hero1, monster1));
        this.hero1El.querySelector('.attack2-btn').addEventListener('click', () => this.doAttack(hero1, monster2));

        this.hero2El.querySelector('.attack1-btn').addEventListener('click', () => this.doAttack(hero2, monster1));
        this.hero2El.querySelector('.attack2-btn').addEventListener('click', () => this.doAttack(hero2, monster2));

        this.monster1El.querySelector('.attack1-btn').addEventListener('click', () => this.doAttack(monster1, hero1));
        this.monster1El.querySelector('.attack2-btn').addEventListener('click', _ => this.doAttack(monster1, hero2));

        this.monster2El.querySelector('.attack1-btn').addEventListener('click', _ => this.doAttack(monster2, hero1));
        this.monster2El.querySelector('.attack2-btn').addEventListener('click', _ => this.doAttack(monster2, hero2));
    }

    update() {
        //heroes
        this.hero1El.querySelector('.name').innerHTML = `${this.hero1.name} — ${this.hero1.life} HP`;
        let h1Pct = (this.hero1.life / this.hero1.maxLife) * 100;
        this.hero1El.querySelector('.bar').style.width = `${h1Pct}%`;

        this.hero2El.querySelector('.name').innerHTML = `${this.hero2.name} — ${this.hero2.life} HP`;
        let h2Pct = (this.hero2.life / this.hero2.maxLife) * 100;
        this.hero2El.querySelector('.bar').style.width = `${h2Pct}%`;

        //monsters
        this.monster1El.querySelector('.name').innerHTML = `${this.monster1.name} — ${this.monster1.life} HP`;
        let m1Pct = (this.monster1.life / this.monster1.maxLife) * 100;
        this.monster1El.querySelector('.bar').style.width = `${m1Pct}%`;

        this.monster2El.querySelector('.name').innerHTML = `${this.monster2.name} — ${this.monster2.life} HP`;
        let m2Pct = (this.monster2.life / this.monster2.maxLife) * 100;
        this.monster2El.querySelector('.bar').style.width = `${m2Pct}%`;
    }

    doAttack(attacker, attacked) {
        console.log(`${attacker.name} está atacando ${attacked.name}`);

        this.update();
    }
}