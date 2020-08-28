/*
Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
*/
let n1 = (Math.floor(Math.random() * 10 + 1));
let n2 = (Math.floor(Math.random() * 10 +1));
let n3 = (Math.floor(Math.random() * 10 + 1));
console.log(`O valor de n1 ${n1}.`);
console.log(`O valor de n1 ${n2}.`);
console.log(`O valor de n1 ${n3}.`);

if (n1 > n2 && n1 > n3){
    console.log(`${n1} é maior que ${n2} é ${n3}`);
}else if (n2 > n3){
    console.log(`${n2} é maior que ${n1} é ${n3}`);
}else{
    console.log(`${n3} é o maior!`);
}