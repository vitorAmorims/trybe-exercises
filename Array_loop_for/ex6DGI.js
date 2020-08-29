let notas = [100,50,20,10,5,2,1];
let valor = (Math.floor(Math.random() * (500 - 300) + 1));
let notas100 = 0;
let notas50 = 0;
let notas20 = 0;
let notas10 = 0;
let notas5 = 0;
let notas2 = 0;
let notas1 = 0;
let resto;
let rest_valor;
console.log(`Valor ${valor}`);
while (rest_valor!= 0){
  notas100 = valor / notas[0];
  rest_valor = valor - (Math.floor(notas100) * notas[0]);
  notas50 = rest_valor / notas[1];
  rest_valor = rest_valor - (Math.floor(notas50) * notas[1]);
  notas20 = rest_valor / notas[2];
  rest_valor = rest_valor - (Math.floor(notas20) * notas[2]);
  notas10 = rest_valor / notas[3];
  rest_valor = rest_valor - (Math.floor(notas10) * notas[3]);
  notas5 = rest_valor / notas[4];
  rest_valor = rest_valor - (Math.floor(notas5) * notas[4]);
  notas2 = rest_valor / notas[5];
  rest_valor = rest_valor - (Math.floor(notas2) * notas[5]);
  notas1 = rest_valor / notas[6];
  rest_valor = rest_valor - (Math.floor(notas1) * notas[6]);
}


console.log(`Notas de 100 reais: ${Math.floor(notas100)}`);
console.log(`Notas de 50  reais: ${Math.floor(notas50)}`);
console.log(`Notas de 20 reais: ${Math.floor(notas20)}`);
console.log(`Notas de 10 reais: ${Math.floor(notas10)}`);
console.log(`Notas de 5 reais: ${Math.floor(notas5)}`);
console.log(`Notas de 2 reais: ${Math.floor(notas2)}`);
console.log(`Notas de 1 reais: ${Math.floor(notas1)}`);
