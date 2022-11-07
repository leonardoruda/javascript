function sobrenome() {
    let nome = document.getElementById('itxt').value
    if (nome.length == 0) {
        alert('Você não digitou nada!')
    } else if (nome.indexOf(' ') === -1) {
        alert('Nome e sobrenome são separados por um espaço!')
    } else {
        let espaço = nome.indexOf(" ")
        let sobreNome = nome.substring(espaço)
        let caract = sobreNome.length-1
        let res = document.getElementById('res')
        res.innerHTML = `<p>O sobrenome ${sobreNome} tem ${caract} letras!</p>`
    }
}