function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
 // var res = document.querySelector(div#res)
    if (fAno.value.length == 0 || Number (fAno.value) > ano) {
        window.alert(' [ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            res.style.background = '#5F37E6'
            if (idade >= 0 && idade <= 3) {
                // bebê
                img.setAttribute('src', 'imagens/bebe_m.png')
            } else if (idade <= 10) {
                // criança
                img.setAttribute('src', 'imagens/criança_m.png')
            } else if (idade <= 15) {
                // adolescente
                img.setAttribute('src', 'imagens/adolescente_m.png')
            } else if (idade <= 29) {
                // jovem
                img.setAttribute('src', 'imagens/jovem_m.png')
            } else if (idade <= 59) {
                // adulto
                img.setAttribute('src', 'imagens/adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            res.style.background = '#E58DAC'
            if (idade >= 0 && idade <= 3) {
                // bebê
                img.setAttribute('src', 'imagens/bebe_f.png')
            } else if (idade <= 10) {
                // criança
                img.setAttribute('src', 'imagens/criança_f.png')
            } else if (idade <= 15) {
                // adolescente
                img.setAttribute('src', 'imagens/adolescente_f.png')
            } else if (idade <= 29) {
                // jovem
                img.setAttribute('src', 'imagens/jovem_f.png')
            } else if (idade <= 59) {
                // adulto
                img.setAttribute('src', 'imagens/adulta.png')
            } else {
                // idosa
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        }
}