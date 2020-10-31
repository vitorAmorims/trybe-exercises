const math = require('./mockando');

test("#somar", () => {
  // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
  const mockSomar = jest.spyOn(math, "somar");

//   math.somar(1, 2);
math.somar(1,2);
  expect(mockSomar).toHaveBeenCalled(); // testando se a função foi chamada
  expect(mockSomar).toHaveBeenCalledTimes(1); // quantas vezes foi chamada
  expect(mockSomar).toHaveBeenCalledWith(1, 2); // quais parâmetros foram usados
  expect(mockSomar(1, 2)).toBe(3); // qual seu retorno
});