var n1 = document.getElementById('ifn1')
var n2 = document.getElementById('ifn2')
var n3 = document.getElementById('ifn3')
var res = document.getElementById('res')

/*function contar () {
    res.innerHTML = 'Contando <br>'
    while (Number(n1.value) <= Number(n2.value)) {
        res.innerHTML += `${n1}&copy;`
        Number(n1.value) += Number(n3.value)
    }
}*/

function contar() {
    res.innerHTML = 'Contando: <br>'
    for (var c = Number(n1.value); c <= Number(n2.value); c += Number(n3.value)) {
        res.innerHTML += `${c} &copy; `
    }
    res.innerHTML += `FIM!`
}
