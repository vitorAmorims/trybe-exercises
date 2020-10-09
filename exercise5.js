const assert = require('assert')

const myList = [1, 2, 3];

//Escreva a função swap, que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:

//Dica: use array destructuring.

// escreva swap abaixo
const swap = ([a,b,c]) => [c,b,a]; 


const swappedList = swap(myList) //atribuindo o resultado da função para variavel swappedList

console.log(swappedList[0]) //expected number 3 na posição 0
console.log(swappedList[1]) //expected number 2 na posição 1
console.log(swappedList[2]) //expected number 1 na posição 2

// assert.equal(swappedList[0], 3)
// assert.equal(swappedList[1], 2)
// assert.equal(swappedList[2], 1)