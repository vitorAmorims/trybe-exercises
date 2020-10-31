const ex5 = require("./ex5");

/*Utilizando jest.spyOn, faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa.
No mesmo teste, se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros
 */

describe("testando requisição", () => {
    // afterEach(() => {
    //     ex5.retorneCaixaAlta.mockRestore();
    // })
  test("Mockando a função retorneCaixaAlta, faça implementação para retornar caixa baixa.", () => {
    const primeiro = jest
      .spyOn(ex5, "retorneCaixaAlta")
      .mockImplementation((param) => param.toLowerCase());
    expect(primeiro("LOVE")).toBe("love"); // qual seu retorno
    expect(primeiro).toHaveBeenCalled(); // se a função foi chamada
    expect(primeiro).toHaveBeenCalledTimes(1) // quantas vezes foi chamada
    expect(primeiro).toHaveBeenCalledWith('LOVE'); // foi chamada e com quais parâmetros
    ex5.retorneCaixaAlta.mockRestore();
  });
  test('Chame a função retorneCaixaAlta, e obtenha o retorno apropriado', () => {
    expect(ex5.retorneCaixaAlta('deus')).toBe('DEUS');
  })
});
