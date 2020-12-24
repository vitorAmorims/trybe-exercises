/*
Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
*/
const assert = require('assert');
const removeVowels = (word) => {
  const characters = word.split('');

  for (let i = 0; i < 2; i++) {
    if (characters[i] === 'a') {
      characters[i] = 1;
    }
  }
  for (let i = 0; i < characters.length; i += 1) {
    if (characters[i] === 'a') {
      characters[i] = 2;
    } else if (characters[i] === 'e') {
      characters[i] = 3;
    } 
  }
  return characters.join('');
}
  
const parameter = 'Dayane';
const result = 'D1y2n3';
// console.log(removeVowels(parameter));
assert.strictEqual(removeVowels(parameter), result, "mensagem de erro do exercício!")