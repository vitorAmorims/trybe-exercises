const { expect, test } = require('@jest/globals');
const math = require('./mockando');
jest.mock("./mockando");

test("#somar", () => {
  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled(); // Aqui testamos se função foi chamada
  expect(math.somar).toHaveBeenCalledTimes(1); // quantas vezes foi chamada
  expect(math.somar).toHaveBeenCalledWith(1, 2); // quais parâmetros foram usados
  expect(math.somar(1, 2)).toBe(3); // e qual seu retorno
});

test("#multiplicar", () => {
    math.multiplicar.mockImplementation((a, b) => a * b);
    math.multiplicar()
    expect(math.multiplicar).toBeCalled();    
});

test("Divisão", () => {
    math.dividir.mockImplementation((a,b) => a / b);
    math.dividir(10,5);
    expect(math.dividir).toHaveBeenCalled();
    // expect(math.dividir).toHaveBeenCalledWith(10,5);
    // expect(math.dividir(4,2)).toBe(2);
});