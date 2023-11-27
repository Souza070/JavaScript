let num = [ 5, 8, 2, 3, 9]
num[5] = 6
num.push(1)
num.length
num.sort()

console.log(num)
console.log (`O vetor tem ${num.length} posições!`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
console.log = (`O valor 8 está na posição ${pos}`)