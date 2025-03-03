/*Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.

Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.
*/

let a = 50//(Math.floor(Math.random() * 90 + 1));
let b = 50//(Math.floor(Math.random() * 90 + 1));
let c = 80//(Math.floor(Math.random() * 90 + 1));

if (a+b+c == 180){ //validei positivo
    console.log(`ângulo a ${a}, ângulo b ${b} e ãngulo c ${c}: formam triângulo válido`);
}else{ //validei negativo
    console.log(`ângulo a ${a}, ângulo b ${b} e ãngulo c ${c}: Valores, não formam triângulo`);
}
