/*Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)
*/
//inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda.
let produtoA = new Array;
let produtoB = new Array;

produtoA.push(100,200); //produtosA[0] possui o custo e produtosA[1] possui o preço de venda
produtoB.push(55,150);

impostoA = ((produtoA[0] / 100)*20) //sob os produtos incide 20% de imposto.
impostoB = ((produtoB[0] / 100)*20)
lucroA = produtoA[1] - (produtoA[0]+impostoA); //lucro = preço de venda - (preço de custo + imposto)
lucroB = produtoB[1] - (produtoB[0]+impostoB);
console.log(`Ao vender 1000 peças do produto A haverá lucro de ${lucroA*1000}`);
console.log(`Ao vender 1000 peças do produto B haverá lucro de ${lucroB*1000}`);

