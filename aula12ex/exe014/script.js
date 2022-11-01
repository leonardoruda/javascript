function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')   
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora > 0 && hora <= 12) {
        document.body.style.background = 'linear-gradient(to bottom, #8d867a, #39475b)'
        img.src = '../imagens/manha.png'
    } else if (hora > 12 && hora < 18) {
        img.src = '../imagens/tarde.png'
        document.body.style.background = 'linear-gradient(to bottom, #9f9e8b, #9c4b3b'
    } else {
        img.src = '../imagens/noite.png'
        document.body.style.background = 'linear-gradient(to bottom, #7b5d84, #172d41'
    }
}

