/*Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

Bonus: use somente um if.
*/
let num = 6;
let num1 = 7; //testei para retorno true e false.
let num2 = 10;

if (num % 2 != 0 || num1 % 2 != 0 || num2 % 2 != 0){
    console.log(true);
}else{
    console.log(false);
}