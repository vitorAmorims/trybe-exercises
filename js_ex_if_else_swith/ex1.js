/*
Nos exercícios de hoje, você vai fazer quinze pequenos programas. Todos trabalham a lógica condicional (if/else e switch), operadores aritméticos (+, -, *, /, %) e operadores lógicos (>, <, &&, ||)

1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Faça programas para:
*/
let a = (Math.floor(Math.random() * 10 + 1)); 
let b = (Math.floor(Math.random() * 10 + 1));
//adição
console.log(`A soma de ${a} + ${b} é igual ${a+b}!`);
//subtração
console.log(`A subtração de ${a} - ${b} é igual ${a-b}!`);
//multiplicação
console.log(`A multiplicação de ${a} * ${b} é igual ${a*b}!`);
//divisão
console.log(`A divisão de ${a} / ${b} é igual ${a/b}!`);
//potência
console.log(`A potẽncia de ${a} elevado ${b} é igual ${Math.pow(a,b)}!`);
//resto
console.log(`O resto de ${a} por ${b} é igual ${a%b}!`);//operador mod, ficar atento.

