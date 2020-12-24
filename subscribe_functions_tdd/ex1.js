const assert = require('assert');
//Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const greetPeople = (people) => {
  let greeting = [];
  let msg = 'Hello ';
  
  for (const person in people) {
    greeting.push(msg + people[person]);
  }
  return greeting;
};
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
console.table(greetPeople(parameter)); //1 - executei a func para ver o seu retorno
assert.deepStrictEqual(greetPeople(parameter), result);