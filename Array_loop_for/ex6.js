/*
Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
function somarImpares (numbers){
    let tot_impares = 0;
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 == 1){
            tot_impares += 1;
        }
    }
    if (tot_impares == 0){
        console.log("nenhum valor impar encontrado");
    }else{
        console.log(`Este array possui ${tot_impares} impares.`);
    }
}
somarImpares(numbers);;
