let ex2 = require('./ex2');

test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
  ex2.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(ex2.randomNumber(10, 2)).toBe(5);
  expect(ex2.randomNumber).toHaveBeenCalled();
  expect(ex2.randomNumber).toHaveBeenCalledTimes(1);
  expect(ex2.randomNumber).toHaveBeenCalledWith(10, 2);
});