const assert = require('assert');

// sincrono
const pushNumber = (list, number) => list.push(number);

let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

assert.deepEqual(numbers, [1, 2, 3]);

// assincrono
let numbers1 = [];

setTimeout(() => pushNumber(numbers1, 1), 3000);
pushNumber(numbers1, 2);
pushNumber(numbers1, 3);

// assert.deepEqual(numbers1, [1, 2, 3]); // essa validação falha

// para passar no teste, devemos inserir o metodo setTimeout no TDD
let numbers2 = [];

setTimeout(() => pushNumber(numbers2, 1), 3000);
pushNumber(numbers2, 2);
pushNumber(numbers2, 3);
console.log(numbers2); //output [2,3]
setTimeout(() => assert.deepEqual(numbers2, [2, 3, 1]), 3000);

const outputAssincrono = () => console.log(numbers2);
setTimeout(outputAssincrono, 3000);
// output [2,3,1] resultado assincrono

