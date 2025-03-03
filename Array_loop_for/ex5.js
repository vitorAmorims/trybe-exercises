/*
Utilizando for, descubra qual o maior valor contido no array e imprima-o;
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//quis fazer estrutura de ordenação, ao inves de métodos internos sort() e invert()
for (let i = 0; i < numbers.length - 1; i++){
    for (let j = i + 1; j < numbers.length; j++){
        var x;
        if (numbers[i] < numbers[j]){
            x = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = x;
        }
    }
}
console.log(numbers[0]);