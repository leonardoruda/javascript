class Character {

    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;
    dead = false;

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
        this.attack = 6;
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

    constructor(hero1, hero2, hero1El, hero2El, monster1, monster2, monster1El, monster2El, logger) {
        this.hero1 = hero1;
        this.hero2 = hero2;
        this.hero1El = hero1El;
        this.hero2El = hero2El;

        this.monster1 = monster1;
        this.monster1El = monster1El;
        this.monster2 = monster2;
        this.monster2El = monster2El;
        this.logger = logger;
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
        let partyLife = (this.hero1.life + this.hero2.life);
        let denLife = this.monster1.life + this.monster2.life;

        //heroes
        this.hero1El.querySelector('.name').innerHTML = `${this.hero1.name} — ${this.hero1.life.toFixed(2)} HP`;
        let h1Pct = (this.hero1.life / this.hero1.maxLife) * 100;
        this.hero1El.querySelector('.bar').style.width = `${h1Pct}%`;

        this.hero2El.querySelector('.name').innerHTML = `${this.hero2.name} — ${this.hero2.life.toFixed(2)} HP`;
        let h2Pct = (this.hero2.life / this.hero2.maxLife) * 100;
        this.hero2El.querySelector('.bar').style.width = `${h2Pct}%`;

        //monsters
        this.monster1El.querySelector('.name').innerHTML = `${this.monster1.name} — ${this.monster1.life.toFixed(2)} HP`;
        let m1Pct = (this.monster1.life / this.monster1.maxLife) * 100;
        this.monster1El.querySelector('.bar').style.width = `${m1Pct}%`;

        this.monster2El.querySelector('.name').innerHTML = `${this.monster2.name} — ${this.monster2.life.toFixed(2)} HP`;
        let m2Pct = (this.monster2.life / this.monster2.maxLife) * 100;
        this.monster2El.querySelector('.bar').style.width = `${m2Pct}%`;


        if (partyLife <= 0) {
            this.logger.addMessage('<hr>Os MONSTROS venceram!!<hr><hr>');
            this.logger.listEl.scrollTop = this.logger.listEl.scrollHeight;
            return;
        } else if (denLife <= 0) {
            this.logger.addMessage('<hr>Os HERÓIS venceram!!<hr><hr>');
            this.logger.listEl.scrollTop = this.logger.listEl.scrollHeight;
            return;
        }

        this.logger.listEl.scrollTop = this.logger.listEl.scrollHeight;
    }

    doAttack(attacker, attacked) {

        let atkF = (Math.random() *2).toFixed(2);
        let atk = attacker.attack * atkF;

        let defF = (Math.random() *2).toFixed(2);
        let def = attacked.defense * defF;

        this.logger.addMessage(`> ${attacker.name} está atacando ${attacked.name}...`);

        if(attacked.life <=0) {
            this.logger.addMessage('Atacando cachorro morto! <hr>');
            this.logger.listEl.scrollTop = this.logger.listEl.scrollHeight;
            return;
        }

        if (!attacked.dead) {
            if(atk > def) {
                attacked.life -= atk;
                this.logger.addMessage(`${attacker.name} causou <strong>${atk.toFixed(2)}</strong> de dano em ${attacked.name}! <hr>`);
            } else {
                this.logger.addMessage(`${attacked.name} conseguiu defender! <hr>`);
            }
        }

        if (attacked.life <= 0) {
            this.killed(attacked);
        }

        this.update();

    }

    killed(killed) {
        let fighters = [
            this.hero1, this.hero2, this.monster1, this.monster2 
        ];
        let fightersEl = [
            this.hero1El, this.hero2El, this.monster1El, this.monster2El
        ]

        killed.dead = true;

        //check each fighter's status, disabling attacks if dead!
        fighters.forEach((f, i) => {
            if (f._life <= 0) {

                if(f.dead) {
                    fightersEl[i].querySelector('.attack1-btn').disabled = true;
                    fightersEl[i].querySelector('.attack2-btn').disabled = true;

                    if (killed.name === f.name) {
                        this.logger.addMessage(`<strong>${killed.name}</strong> foi morto em batalha! <hr>`);
                    }
                }

                //alt longer, lesser method:
                // let deadEl;
                // switch(f.name) {
                //     case 'Goblin':
                //         deadEl = this.monster1El;
                //     break;
                //     case 'Hobgoblin':
                //         deadEl = this.monster2El;
                //     break;
                //     case this.hero1.name:
                //         deadEl = this.hero1El;
                //     break;
                //     case this.hero2.name:
                //         deadEl = this.hero2El;
                //     break;
                // }
                // deadEl.querySelector('.attack1-btn').disabled = true;
                // deadEl.querySelector('.attack2-btn').disabled = true;
            };
            
        });
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
        this.listEl.innerHTML = 'Começa a batalha!';

        this.list.forEach((i) => this.listEl.innerHTML += `<li>${i}</li>`);
    }
}