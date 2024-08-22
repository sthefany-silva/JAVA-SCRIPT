let num = [5, 8, 2, 9, 3]

console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1 ){
    console.log( 'O valor não foi encontrado!')
}
console.log(`o valor está na posição ${pos}`)