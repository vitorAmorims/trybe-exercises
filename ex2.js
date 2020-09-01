/*
1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
n = 5

*****
*****
*****
*****
*****
*/

let matriz = [];
function gerarAsterisk (param){
  let ast = '*'
  let linhas = param;
  let colunas = param;
  if (param > 1){
    for (let i = 0; i < param; i++){
      matriz.push([]);
      matriz[i].push(new Array(colunas));
      for (j = 0; j < param; j++){
        matriz[i][j] = ast;
      }
    }
  }else{
    console.log("Parâmetro indevido para função.");
  }
  return console.table(matriz);
}
gerarAsterisk(3); //função para retornar Array com *


function gerarAster (param){
  let simbolo = "*";
  let inputlinha = '';
  if (param > 1){
    for (let linha = 0; linha < param; linha++){
      inputlinha = inputlinha + simbolo;
    }
    for (linha = 0; linha <param; linha++){
      console.log(inputlinha);  
    }
  }else{
    console.log("Parâmetro indevido para função.");
  }
  return inputlinha;
}
gerarAster(6) //fuunção para retornar String *


//padrão
let n = 5;
let lineIndex;
let symbol = '*';
let inputLine = '';

for (lineIndex = 0; lineIndex < n; lineIndex++) {
  inputLine = inputLine + symbol;
};
for (lineIndex = 0; lineIndex < n; lineIndex++) {
  console.log(inputLine);
};
console.log(inputLine);
