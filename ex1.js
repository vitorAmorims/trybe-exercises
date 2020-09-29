const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(typeof sum, 'function');
//Teste se o retorno de sum(4, 5) é 9
assert.equal(sum(4, 5), 9);
