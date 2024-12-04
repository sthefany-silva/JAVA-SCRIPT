 function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   if (fano.value.length == 0 || fano.value > ano){
    window.alert('[ERRO] Verifique o ano e tente novamente')
   } else {
    var fsex = document.getElementsByName('radisex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
        gênero = 'homem'
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'criança.homem.jpg')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', 'jovem.homem.jpg')
        } else if(idade < 50){
            //adulto
            img.setAttribute('src', 'adulto.homem.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'idoso.homem.jpg')
        }
    } else if (fsex[1].checked){
        gênero = 'mulher'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src', 'criança.mulher.jpg')
        } else if (idade < 21){
            img.setAttribute('src', 'jovem.mulher.jpg')
        } else if(idade < 50){
            //adulto
            img.setAttribute('src', 'adulta.mulher.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'idosa.mulher.jpg')
        }
    }
   
   }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
 }