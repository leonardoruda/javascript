function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = 98
        var teste = document.createElement('textarea')
        teste.style.display = 'block'
        teste.style.height = '100px'
        teste.style.width = '150px'
        teste.setAttribute('placeholder', 'O que você achou? Dê a sua opinião!')
        var button = document.createElement('button')
        button.setAttribute('type', 'submit')
        button.innerText = 'Enviar'
        button.style.display = 'inline-block'

        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', '../imagens/babyboy.png')
            } else if (idade <21) {
                img.setAttribute('src', '../imagens/menino.png')
            } else if (idade < 52) {
                img.setAttribute('src', '../imagens/homem.png')
            } else {
                img.setAttribute('src', '../imagens/velho.png')

            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', '../imagens/babygirl.png')
            } else if (idade <21) {
                img.setAttribute('src', '../imagens/menina.png')
            } else if (idade < 52) {
                img.setAttribute('src', '../imagens/mulher.png')
            } else {
                img.setAttribute('src', '../imagens/velha.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img)
        res.appendChild(teste)
        res.appendChild(button)
    }
   
} 