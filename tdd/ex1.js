const assert = require('assert');
// escreva a função addOne aqui
function addOne (myArray) {
    let output = [];
        for (let i = 0; i < myArray.length; i++) {
            output.push(myArray[i] + 1);
        }
    return output;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6]; //esperado da função, e somar 1 em cada elemento do array myArray
const output = addOne(myArray); //o returno da função addOne, será atribuido a uma variavel.

assert.strictEqual(typeof addOne, 'function'); 
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
