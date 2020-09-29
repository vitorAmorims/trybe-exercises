const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
//1 - Compare dois objetos (JSON) para verificar se são idênticos ou não
//assert.deepStrictEqual(actual, expected[, message])
//verificando objetos 1 e 2
assert.deepStrictEqual(obj1,obj2, "Objetos com keys diferentes!");

//2- verificando objetos 1 e 3
// assert.deepStrictEqual(obj1, obj3, "Objetos com keys diferentes! obj1 e obj3")

//3 - verificando objettos 2 e 3
assert.deepStrictEqual(obj2, obj3, "Objetos com keys diferentes! obj2 e obj3");

