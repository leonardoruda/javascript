let log = new Log(document.querySelector('.log'));

let hero = new Knight('Karmaan');
let monster = new Hobgoblin();

const stage = new Stage(
    hero, 
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();
console.log(hero);
console.log(monster);