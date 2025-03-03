/*
Nos exercícios de hoje, você vai fazer quinze pequenos programas. Todos trabalham a lógica condicional (if/else e switch), operadores aritméticos (+, -, *, /, %) e operadores lógicos (>, <, &&, ||)
 
2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
*/
let n1 = (Math.floor(Math.random() * 10 + 1));
let n2 = (Math.floor(Math.random() * 10 + 1));
resultadoAfirmativo = "Sim";
resultadoNegativo = "Não";

console.log(`Valor de n1 é: ${n1} e valor de n2 é: ${n2}`);
console.log(".");
console.log(".");
console.log(".");
console.log(".");
console.log(".");
if (n1 > n2){
    console.log(`n1 é maior o número.`);
}else{
    console.log(`n2 é o maior número.`);
}
