/*Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova que receba um parâmetro e retorne seu dobro. Faça os testes necessários. Solução:
*/
const { beforeEach } = require('@jest/globals');
const ex3 = require('./ex3')

describe('Testando a requisição', () => {

    test('utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação.', () => {
        ex3.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
        expect(ex3.randomNumber(10,2,3)).toBe(60);
    })
    test('utilizando o mock, defina o valor default para fn e confirme o seu devido retorno', () => {
        ex3.randomNumber.mockReset();
        ex3.randomNumber = jest.fn().mockReturnValue(4);
        ex3.randomNumber();
        expect(ex3.randomNumber()).toBe(4);
    });
    test('Utilizando o mock, crie uma nova implementação que receba um parâmetro e retorne dobro', () => {
        ex3.randomNumber.mockReset();
        ex3.randomNumber = jest.fn().mockImplementation((a) => a * 2);
        expect(ex3.randomNumber(5)).toBe(10);
    });
})

