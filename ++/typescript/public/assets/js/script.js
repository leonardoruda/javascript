"use strict";
const botao = document.querySelector('button');
botao.addEventListener('click', () => console.log('Clicou!'));
function somar(n1, n2) {
    if (n1 > 10) {
        return n1 + n2;
    }
    return;
}
