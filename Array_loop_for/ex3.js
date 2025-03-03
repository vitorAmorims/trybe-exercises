/*
Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
let media = 0;
for (let i = 0; i < numbers.length; i++){
    total += (numbers[i]);
    media = total / numbers.length;
}
console.log(`O vetor possui ${numbers.length} elementos.`);
console.log(`A soma dos elementos no vetor é ${total}`);
console.log(`A média dos elementos contidos no vetor é ${media}`);