let form = document.createElement('input')
form.setAttribute('type', 'text')
form.setAttribute('oninput', 'output.innerHTML = n')
let fn = document.getElementsByTagName('input')
let n = []
let p = document.querySelector('div > p')
p.innerHTML = 'Vamos adicionar números à nossa matriz [3x2]: '
let p2 = document.createElement('p')
p.appendChild(p2)


let res = document.getElementById('res')
let output = document.createElement('output')
output.setAttribute('id', 'n')
res.appendChild(output)

function começar () {
    let button = document.createElement('button')
    button.setAttribute('onclick', 'adicionar()')
    button.innerText = 'Adicionar'
    for (let l = 1; l <= 3; l++) {
        for (let c = 1; c <=2; c++) {
            p2.innerHTML += `Digite um número na posição ${l}, ${c}: `
            p2.appendChild(form)
            n[l, c] = (Number(fn.value))
            p2.appendChild(button)
        }
        //n.push(5)
    }
}

function adicionar () {

}