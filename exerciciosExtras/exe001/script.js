function sobrenome() {
    let nome = document.getElementById('itxt').value
    let espaço = nome.indexOf(" ")
    let sobreNome = nome.substring(espaço)
    let caract = sobreNome.length-1
    let res = document.getElementById('res')
    res.innerHTML = `<p>O sobrenome ${sobreNome} tem ${caract} letras!</p>`
}