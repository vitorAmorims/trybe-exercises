/*
Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
*/
const assert = require('assert')
const greaterThanTen = (array) => {
    if (typeof(array) === 'string'  || typeof(array) === 'number' || typeof(array) === 'undefined') {
        throw 'Por favor, passe array com elementos Number!'
    }
    let results = [];
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] > 10) {
            results.push(array[i]);
        }
    }
    return results;
  };
 
const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
// console.log(greaterThanTen(parameter));
assert.strictEqual(typeof greaterThanTen,'function');
assert.deepStrictEqual(greaterThanTen(parameter), result);
assert.notDeepStrictEqual(greaterThanTen(parameter, [30]));
assert.throws(() => {
    greaterThanTen('a');
});
console.log(greaterThanTen());