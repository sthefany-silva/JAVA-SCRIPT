function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
       window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'homem'
            if (idade >=0 && idade < 15){
                img.setAttribute('src', 'imagens/criança-homem2.jpg')
            } else if ( idade < 30){
                img.setAttribute('src', 'imagens/jovem-homem2.jpg')
            } else if ( idade < 50){
                img.setAttribute('src', 'imagens/idoso-homem2.jpg')
            } else {

            }

        }else if (fsex[1].checked){
            gênero = 'mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/criança-mulher2.jpg')
            } else if ( idade < 21){
                img.setAttribute('src', 'imagens/jovem-mulher2.jpg')
            } else if ( idade < 50){
                img.setAttribute('src', 'imagens/idosa-mulher2.jpg')
            } else {
              
            }
        }
          res.innerHTML = `detectamos ${gênero} com ${idade} anos`
          res.appendChild(img)
    } 
}