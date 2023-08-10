const qs = (e) => document.querySelector(e);

let log = new Log(qs('.log'));
let hero1 = new Knight('Karmaan');
let hero2 = new Sorcerer('Mordekaiser');

let monster1 = new Goblin();
let monster2 = new Hobgoblin();

const stage = new Stage(
    hero1, hero2,
    qs('#char1'),
    qs('#char2'),
    monster1, monster2,
    qs('#monster1'),
    qs('#monster2'),
    log
)

stage.start();