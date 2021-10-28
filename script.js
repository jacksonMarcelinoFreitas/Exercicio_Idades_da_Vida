function verificar(){
    var data = new Date()
    var ano =  data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //Se estiver chekado em 0 é homem
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'CriancaMenino.png')
                document.body.style.background = '#316e46'
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'JovemHomem.png')
                document.body.style.background = '#c9c8cd'
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'AdultoHomem.png')
                document.body.style.background = '#4a4a53'
            }
            else{
                //Idoso
                img.setAttribute('src', 'IdosoHomem.png')
                document.body.style.background = '#7d5841'
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
             if (idade >= 0 && idade < 10){
            //Criança
                img.setAttribute('src', 'CriancaMenina.png')
                document.body.style.background = '#d991c9'
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'JovemMulher.png')
                document.body.style.background = '#73b1a0'
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'AdultoMulher.png')
                document.body.style.background = '#a8adb2'
            }
            else{
                //Idoso
                img.setAttribute('src', 'IdosoMulher.png')
                document.body.style.background = '#af9e8e'
            } 
        }
        res.style.textAlign = 'Center'
        res.innerHTML= `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}