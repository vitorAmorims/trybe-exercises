// --- Instruções
// Escreva um programa que o console registre os números
// de 1 a n. Mas para múltiplos de três impressão
// “fizz” em vez do número e para os múltiplos
// de cinco imprime “buzz”. Para números que são múltiplos
// de três e cinco imprimem “fizzbuzz”.
// --- Exemplo
// fizzBuzz (5);
// 1
// 2
// efervescer
// 4
// zumbido

function fizzBuzz(n) {
    for (let index = 1; index <= n; index += 1) {
        if (index % 3 === 0 && index % 5 === 0) {
            console.log('fizzbuzz');
        } else if (index % 5 === 0){
            console.log("buzz");
        } else if (index % 3 === 0) {
            console.log("fizz");
        } else {
            console.log(index);
        }
    }
}
// fizzBuzz(15);
module.exports = fizzBuzz;