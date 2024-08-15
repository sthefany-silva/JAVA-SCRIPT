function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manhã.jpg'
         document.body.style.background = '#635866'
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#F9C56F'
    } else {
        img.src = 'imagens/noite.jpg'
         document.body.style.background = '#013777'
    }
}
