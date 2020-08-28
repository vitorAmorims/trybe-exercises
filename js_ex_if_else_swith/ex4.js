/*
Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
*/
let n1 = Math.floor(Math.random() * (10 - -10 + 1)) + -10; //gerando números inteiros aleatórios entre dois valores. Incluindo positivos e negativos.
console.log(`o valor de n1 é ${n1}`);

if (n1 > 1){
    console.log("positive");
}else if (n1 == 0){
    console.log("zero");
}else{
    console.log("negative");
}
