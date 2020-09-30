/*Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.*/
const assert = require('assert')
function secondThirdSmallest(array) {
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
adicionado módulo assert
segundo fazer executar a função
*/
console.log(secondThirdSmallest(parameter)); 
