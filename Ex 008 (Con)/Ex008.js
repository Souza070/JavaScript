var idade = 17
    console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota.')
} else {
    /*} else if (idade > 18) {
        console.log('voto opcional'.
    }*/
    if (idade < 18 || idade > 65) {
     console.log('Voto é opcional.')   
    } else {
        console.log('Voto é obrigatório.')
    }
}