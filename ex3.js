const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
assert.strictEqual(typeof myRemoveWithoutCopy, 'function');

//1 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1,2,4], "mensagem de erro para o exerício 1");

//2 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1,2, 3, 4], "Mensagem de erro para questão 2");

//3 - Faça uma chamada para a função myRemoveWithoutCopy 
//e verifique se o array passado por parâmetro sofreu alterações
let array = [1,2,3,4,5];
myRemoveWithoutCopy(array, 5);
assert.deepStrictEqual(myRemoveWithoutCopy(array, 5), [1, 2, 3, 4], "Mensagem de erro questão 3");

//4 - Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], "Mensagem de erro questão 4");
