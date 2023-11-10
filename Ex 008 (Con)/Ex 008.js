var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${minuto} minutos.`)
if (hora >= 00 && hora <= 05) {
    console.log('Boa Madrugada!')
} else if (hora <= 12) {
    console.log('Bom Dia!')
} else if (hora >= 13 && hora <= 18) {
    console.log('Boa Tarde!')
} else if(hora >= 19 && hora <= 23) {
    console.log('Boa Noite!')
} else {
    console.log('Hora inválida!')
}
