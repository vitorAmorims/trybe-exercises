/*
Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
for (let i = 0; i < numbers.length; i++){
    total += numbers[i];
    console.log(total); //Eu que quis, incluir o consolo aqui, para ver a soma de cada elemento enquanto realiza iteração.
}
