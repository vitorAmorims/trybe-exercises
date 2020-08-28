/*
Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let new_number = new Array;
// exemplo que entendi...let new_number = numbers[0]*[numbers[1]]
//esperado [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
for (let i = 0; i < numbers.length; i++){
    if (i < 9){
        new_number.push(numbers[i] * numbers[i + 1]);
    }else{
        new_number.push(numbers[i] * 2);
    }
}
console.log(new_number);
