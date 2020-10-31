/*faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.
*/

const { test, expect } = require('@jest/globals');
const ex4 = require('./ex4');
describe('testando a requisição', () => {
    test('utillizando o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa', () => {
        ex4.retorneCaixaAlta = jest.fn().mockImplementation((param) => {
            return param.toUpperCase();
        });
        expect(ex4.retorneCaixaAlta('a')).toBe('A');
    });
    test('uma nova implementação deve retornar a última letra de uma string', () => {
        ex4.retornePrimeiraLetra = jest.fn().mockImplementation((param) => {
            return param[param.length - 1];
        });
        expect(ex4.retornePrimeiraLetra("vitor")).toBe('r');
    });
    test('Utilizando mock, a terceira função deve receber 3 strings de parametros e concatena-las', () => {
        ex4.retornarStringsConcatenadas = jest.fn().mockImplementation((param, param2, param3) => {
            return param+param2+param3;
        });
        expect(ex4.retornarStringsConcatenadas("Deus ", "eu ", "te amo!")).toBe("Deus eu te amo!");
    })

})