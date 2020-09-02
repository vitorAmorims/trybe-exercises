/*
Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2.
*/
const numeros = [2, 3, 2, 5, 8, 2, 3,2];
/*function InteiroMaisRepetido (param){
    let contador = 0;
    let numero = 0;
    for (let i = 0; i < param.length -1; i++){
        for (j = i + 1; j < param.length; j++){
            let x;
            if (param[i] > param[j]){
                x = param[i];
                param[i] = param[j];
                param[j] = x;
            }
        }
        if (param.indexOf(param[i]) != i){
            contador++;
        }
    }
    return contador;
}
InteiroMaisRepetido(numeros);
*/
let haduplicados = function(numeros){
    for (let i = 0; i < numeros.length; i++){
        if (numeros.indexOf(numeros[i]) != i){
            return true;
        }
    }
    return false;
}
console.log(haduplicados);
