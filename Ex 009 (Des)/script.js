function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <  12) {
        // BOA TARDE!
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#A66F3F'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#F2784B'
    } else {
        //BOA NOITE!
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#023373'
    }
}
