function mostrar() {
    let reader = new FileReader()
    let arq = document.getElementById('img').files[0]

    reader.onloadend = function() {
        let img = document.createElement('img')
        img.src = reader.result
        img.width = 200
        document.getElementById('area').appendChild(img)
    }
    reader.readAsDataURL(arq)
}



