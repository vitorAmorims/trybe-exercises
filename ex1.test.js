const ex1 = require('./ex1');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
 ex1.randomNumber = jest.fn().mockReturnValue(10);

  expect(ex1.randomNumber()).toBe(10);
  expect(ex1.randomNumber).toHaveBeenCalled();
  expect(ex1.randomNumber).toHaveBeenCalledTimes(1);
});