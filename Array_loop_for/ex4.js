/*
Com o mesmo código do exercício anterior, caso valor final da media seja maior que 20, imprima a mensagem: "valor de média maior que 20". Caso não seja, imprima a mensagem: "valor de média menor ou igual a 20";
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;
let media = 0;
for (let i = 0; i < numbers.length; i++){
    total += (numbers[i]);
    media = total / numbers.length;
}
if (media > 20){
    console.log("Valor de média maior que 20.");
}else{
    console.log("valor de mpedia menor ou igual a 20.");
}
console.log(`O vetor possui ${numbers.length} elementos.`);
console.log(`A soma dos elementos no vetor é ${total}`);
console.log(`A média dos elementos contidos no vetor é ${media}`);