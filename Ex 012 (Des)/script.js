function contar() {
    let início = document.getElementById('txti')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if (início.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(início.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

    if (i < f) {
        // Contagem crescente
        for(let c = i ; c <= f ; c += p) {
            res.innerHTML += ` ${c} \u{1F449} `
        }
    } else {
        // Contagem regressiva
        for (let c = i ; c >= f ; c -= p) {
            res.innerHTML += ` ${c} \u{1F449} `
        }
    }
         res.innerHTML += `\u{1F3C1} ` 
    } 
    
}