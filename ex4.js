/*
Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.
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