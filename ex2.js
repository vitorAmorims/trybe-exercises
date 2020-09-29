const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
assert.strictEqual(typeof myRemove, 'function');

//1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
//assert.deepStrictEqual(actual, expected[, message])
assert.deepStrictEqual(myRemove([1,2,3,4], 3), [1,2,4], "mensagem ex1");

//2 - Verifique se a chamada myRemove([1, 2, 3, 4], 1) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove([1,2,3,4],3),[1, 2, 3, 4],"mensagem de erro ex 2");

//3- Verifique se o array passado por parâmetro não sofreu alterações
let array = [1, 2, 3, 4];
//detalhe o ex. pede array passado por parâmetro não alterações;
assert.deepStrictEqual(myRemove(array, [1, 2, 3, 4]), [1, 2, 3, 4], "Mensagem de erro do ex 3");


/* teste com método assert*/
// var x = { a : { n: 0 } };
// var y = { a : { n: 0 } };
// var z = { a : { n: '0' } };
// assert.strictEqual(x, y, "Não são iguais");