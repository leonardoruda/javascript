let form = document.createElement('input')
form.setAttribute('type', 'number')
form.setAttribute('id', 'ifn')
let fn = document.getElementById('ifn')
let valores = []
let p = document.querySelector('div > p')
p.innerHTML = 'Vamos adicionar números ao nosso vetor!'
let p2 = document.createElement('p')
p.appendChild(p2)
var button = document.createElement('button')
button.setAttribute('onclick', 'adicionar()')
button.innerHTML += `Adicionar`
let res = document.getElementById('res')
let output = document.createElement('output')
output.setAttribute('id', 'rn')
res.appendChild(output)

let c = 1
p2.innerHTML = `Digite um número na posição ${0}: `
p2.appendChild(form)
p2.appendChild(button)


function adicionar () {
    p2.innerHTML = `Digite um número na posição ${c}: `
    p2.appendChild(form)
    p2.appendChild(button)
    c++
    //valores[c] = (Number(ifn.value))
    valores.push(Number(ifn.value))
    output.innerHTML = `${valores}`
    ifn.value = ''
    ifn.focus()
}

