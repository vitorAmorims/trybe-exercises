const assert = require('assert')

//Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
//Dica: use parâmetro rest.

// function sum(...rest) {
//     return rest.reduce((acumulador, number) => acumulador + number);
// }
// console.log(sum(1,2,3))

const sum = (...rest) => {
    return rest.reduce((acumulador, number) => acumulador + number,0);
}
// console.log(sum())

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)