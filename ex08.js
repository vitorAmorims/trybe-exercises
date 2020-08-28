/*
Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.

Bonus: use somente um if.
*/
let num = 7;
let num1 = 9;
let num2 = 2; //realizei teste para possibilidade true e false da condição ok

if (num % 2 == 0 || num1 % 2 == 0 || num2 % 2 == 0){
    console.log(true);
}else{
    console.log(false);
}