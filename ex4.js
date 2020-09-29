const assert = require('assert');

function myFizzBuzz(num) {
  let msg;
  if (typeof num !== 'number') {return false;}
  if (num % 3 === 0 && num % 5 === 0) {msg = 'fizzbuzz'; return msg;}  
  if (num % 3 === 0) {msg = 'fizz'; return msg;}
  if (num % 5 === 0) {msg = 'buzz'; return msg;}
}
// implemente seus testes aqui
assert.strictEqual(typeof myFizzBuzz, 'function');

//assert.deepStrictEqual(actual, expected[, message])

//1- Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz', "Mensagem de erro para ex1");

// //2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(9), 'fizz', "Mensagem de erro para ex2");

//3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(5), 'buzz', "mensagem de erro para o exercício 3");

//4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno
//é o esperado
// assert.deepStrictEqual(myFizzBuzz(17), 'false', "mensagem de erro para questão 4");

//Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz('a'), 'false', "mensagem de erro da questão 5");