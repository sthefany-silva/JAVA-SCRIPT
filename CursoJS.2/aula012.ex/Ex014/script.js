
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    

    if(hora >= 0 && hora < 12){
        img.src = 'manhã.2.jpg'
        document.body.style.backgroundColor = '#E0CA9B'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.2.jpg'
         document.body.style.backgroundColor = '#E08244'
    } else {
        img.src = 'noite.2.jpg'
         document.body.style.backgroundColor = '#D85B6D'
    }
}

