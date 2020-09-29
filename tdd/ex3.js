const assert = require('assert');
// escreva a função addAllnumbers aqui
function addAllnumbers (numbers) {
    let output = 0;
    output = numbers.reduce(function (accumulator, currentValue) {
        accumulator += currentValue;
        return accumulator;
    });
    return output;
}
const numbers = [9, 23, 10, 3, 8];
const expected = 53; //soma dos elementos do array numbers
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
// console.log(addAllnumbers (numbers));