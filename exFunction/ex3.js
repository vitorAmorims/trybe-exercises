/*
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.
*/
let numeros = new Array;
for (let i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 50 +1));
}
console.log(numeros);
function IndiceDoMenor (numeros){
    let indiceMenor = 0;
    for (let indice in numeros){
        if (numeros[indiceMenor] > numeros[indice]){
            indiceMenor = indice;
        }
    }
    return indiceMenor;
}
console.log('o menor valor do array está no indice: '+IndiceDoMenor(numeros));

//pesquisei o maior valor do array manualmente.
let menor = 0;
for (let i = 0; i < numeros.length; i++){
    if (numeros[i] > menor){
        menor = numeros[i];
    }

}
console.log('O maior valor do array é: '+ menor);