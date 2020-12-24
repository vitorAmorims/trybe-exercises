/*
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.
*/
let numeros = new Array;
for (let i = 0; i < 10; i++){
    numeros.push(Math.floor(Math.random() * 50 + 1));
}
console.log(numeros);

function IndiceDoMaior (numeros){
    let indicemaior = 0;
    for (let indice in numeros){
        if (numeros[indicemaior] < numeros[indice]){
            indicemaior = indice;
        }
    }
    return indicemaior;
}
console.log('O indice de maior valor é: '+IndiceDoMaior(numeros));