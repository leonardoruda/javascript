var n = document.getElementById('ifn')
var select = document.getElementById('ilist')

function tabuada() {
    if (n.value.length == 0) {
        window.alert('Por favor, digite um número para começar!')
    } else {
        select.innerHTML = ''
        for (var c = 1; c <=10; c++) {
            let option = document.createElement('option')
            option.innerHTML += `${Number(n.value)} x ${c} = ${Number(n.value)*c} <br>`
            option.value = `tab${c}`
            select.appendChild(option)
        }
    }
    
}