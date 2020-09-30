/*Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.*/
const assert = require('assert');
const { type } = require('os');
function secondThirdSmallest(array) {
    if (typeof (array) !== 'object') {
        throw new Error ("Por favor, insira um array com elementos number!")
    }
    let results = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            let x;
            if (array[i] < array[j]) {
                x = array[i];
                array[i] = array[j];
                array[j] = x;
            }
        }
    }
    results.push(array[1],array[2]);
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

//primeiro executei a função e não obtive retorno.

/*
1 - adicionado módulo assert.
2 - executei a função.
3 - adicionado teste para confirmar a função.
4 - adicionado teste para verificar a função está retornando o resultado esperado.
5 - ao adicionar string como parametro, forcei o retorno da função com erro no teste.
6 - inseri condição para analisar o typeof string com retorno de mensagem de erro.
7 - adicionei teste para tratar o param string na função secondThirdSmallest. 
8 - adicionado teste para tratar o param number ou undefined.
9 - adicionado teste para tratar o param object.
10 - adicionado teste para tipo de dados diferente de object, removidos os outros testes desnecessários.
*/
let carro = {}; 
assert.strictEqual(typeof(secondThirdSmallest), 'function');
assert.deepStrictEqual(secondThirdSmallest(parameter), result);
// assert.deepStrictEqual(secondThirdSmallest('a'), result); //forcei o erro da função
// console.log(secondThirdSmallest('a'));
assert.throws(() => {
    secondThirdSmallest('a');
});
