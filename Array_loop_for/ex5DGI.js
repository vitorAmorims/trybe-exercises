/*Desafio
Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.

Entrada
Você receberá um valor inteiro N (0 < N < 1000000).

Saída
Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha, caso contrário será apresentada a seguinte mensagem: “Presentation Error”.

Exemplo de Entrada	Exemplo de Saída
576

576
5 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
1 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
0 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00
*/
let notas = [5, 1]; //100,50,20,10, 5,2,1
let notaCem = 0;
let notaUm = 0;
let resto = 0;
let valor = (Math.floor(Math.random() * (500 - 300) + 1));
notaCem = valor / 5//notas[0];
resto = valor - (Math.floor(notaCem) * notas[0]); 
notaUm = resto / notas[1];
console.log(`${valor}`);
console.log(`${Math.floor(notaCem)}`);
console.log(`${notaUm}`);
//console.log(`${Math.floor(notaUm)}`);