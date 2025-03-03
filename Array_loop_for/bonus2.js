/*
Ordene o array numbers em ordem decrescente e imprima seus valores;
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
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
console.log(numbers);