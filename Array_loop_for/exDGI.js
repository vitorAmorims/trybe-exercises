/*
Desafio
Crie um programa que leia 6 valores. Você poderá receber valores negativos e/ou positivos como entrada, devendo desconsiderar os valores nulos. Em seguida, apresente a quantidade de valores positivos digitados.

Entrada
Você receberá seis valores, negativos e/ou positivos.

Saída
Exiba uma mensagem dizendo quantos valores positivos foram lidos assim como é exibido abaixo no exemplo de saída. Não esqueça da mensagem "valores positivos" ao final.
*/
let n1 = 70;
let n2 = 67;
let n3 = 77;
let n4 = 99;
let n5 = 23;
let n6 = 1;
let total = 0;
if (n1 >= 1 && n1 != null){
  total += 1;
}
if (n2 >= 1 && n2 != null){
  total += 1;
}
if (n3 >= 1 && n3 != null){
  total += 1;
}
if (n4 >= 1 && n4 != null){
  total +=1;
}
if (n5 >= 1 && n5 != null){
  total +=1;
}
if (n6 >= 1 && n6 != null){
  total +=1;
}

console.log(`${total} valores positivos`);