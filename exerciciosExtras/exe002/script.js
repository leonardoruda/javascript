let form = document.createElement('input')
form.setAttribute('type', 'number')
form.setAttribute('id', 'ifn')
let fn = document.getElementById('ifn')
let valores = []
let p = document.querySelector('div > p')
p.innerHTML = 'Vamos adicionar números ao nosso vetor!'
let p2 = document.createElement('p')
p.appendChild(p2)
let button = document.createElement('button')
let analisar = document.createElement('button')
button.setAttribute('onclick', 'adicionar()')
analisar.setAttribute('onclick', 'analise()')
button.innerHTML = `Adicionar`
analisar.innerHTML = `Analisar`
let res = document.getElementById('res')
let output = document.createElement('output')
//output.setAttribute('id', 'rn')
res.appendChild(output)

let c = 1
p2.innerHTML = `Digite um número na posição ${0}: `
p2.appendChild(form)
p2.appendChild(button)
p2.appendChild(analisar)

function adicionar () {
    p2.innerHTML = `Digite um número na posição ${c}: `
    p2.appendChild(form)
    p2.appendChild(button)
    p2.appendChild(analisar)
    c++
    //valores[c] = (Number(ifn.value))
    valores.push(Number(ifn.value))
    output.innerHTML = `${valores}`
    ifn.value = ''
    ifn.focus()
    res.innerHTML = `Valor ${valores} adicionado na posição ${c-1}!`
}

function analise () {
    if (valores.length == 0) {
        alert('Por favor, adicione algum número para analisar!')
    } else {
        res.innerHTML = `Você adicionou ${valores.length} números.`
        res.innerHTML += `<br>Dentre eles, x são pares e y são ímpares.`
        res.innerHTML += `<br> A soma destes valores dá s.`
        res.innerHTML += `<br> A média de todos eles é m.`
    }
    
}