/*
Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.
*/
function retorneCaixaAlta(param) {
    let result;
    result = param.toUpperCase();
    return result;
}
// console.log(retorneCaixaAlta('params'))
const retornePrimeiraLetra = (param) => {
    let result;
    result = param[0];
    return result;
}
// console.log(retornePrimeiraLetra('param'))
function retornarStringsConcatenadas(param, param1) {
    let result;
    result = param + param1;
    return result;
}
// console.log(retornarStringsConcatenadas('param', 'param1'))
module.exports = { retorneCaixaAlta, retornePrimeiraLetra, retornarStringsConcatenadas }