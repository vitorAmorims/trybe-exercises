const assert = require('assert');

function myFizzBuzz(num) {
  let msg;
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) {msg = 'fizzbuzz'; return msg;}  
  if (num % 3 === 0) {msg = 'fizz'; return msg;}
  if (num % 5 === 0) {msg = 'buzz'; return msg;}
}
// implemente seus testes aqui
assert.strictEqual(typeof myFizzBuzz, 'function');

//1- Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(15), 'fizzbuzz', "Mensagem de erro para ex1");

// //2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(9), 'fizz', "Mensagem de erro para ex2");

//3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
assert.deepStrictEqual(myFizzBuzz(5), 'buzz', "mensagem de erro para o exercício 3");