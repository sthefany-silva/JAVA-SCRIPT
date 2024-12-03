function carregar(){
    var msg = window.document.getElementById('img')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    img.innerHTML = `Agora são ${hora} horas`
    

    if(hora >= 0 && hora < 12){
        img.src = 'manhã.2.jpg'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.2.jpg'
    } else {
        img.src = 'noite.2.jpg'
    }
}

