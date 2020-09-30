/*
Imagine que você vai construir uma máquina de venda automática (como essas que vendem refrigerante). A máquina aceita moedas e calcula a diferença do valor total que deve ser pago e o valor recebido da pessoa que compra. Essa máquina possui um conjunto de moedas. Você deve implementar a seguinte lógica: dado o valor do troco, a máquina retorna uma lista com as moedas que ela devolverá para a pessoa.*/

/*
logica:  dado o valor do troco, a máquina retorna uma lista com as moedas que ela devolverá para a pessoa.
*/

//Requisitos
/*Como uma pessoa que compra em máquinas automáticas, eu gostaria de selecionar um item, depositar o pagamento e receber o item e o troco.*/

/*Critérios de aceite
Uma chamada bem-sucedida de uma função getChange deve retornar uma lista com o valor das moedas que serão devolvidas à pessoa
Essa lista deve estar no formato decrescente de valor
É permitida a repetição do valor de moedas, por exemplo, [200, 100, 50, 20, 10, 2, 2]
Um erro com a mensagem paid value is not enough deve ser lançado se o valor pago for menor que o valor da compra
*/

/*Moedas disponíveis
As moedas serão representadas pelos valores 200, 100, 50, 20, 10, 5, 2 e 1. Abaixo, existe uma lista de correspondência com os valores em reais (R$)
200 (R$2)
100 (R$1)
50 (R$0,50)
20 (R$0,20)
10 (R$0,10)
5 (R$0,05)
2 (R$0,02)
1 (R$0,01)
A quantidade de cada moeda é infinita, imagine que isso é uma simplificação do problema.*/

/*
Exemplo
Se uma pessoa comprar itens com valor total igual a R$2,15 (ou seja, 215) e pagar R$3 (ou seja, 300), o valor do troco é R$0,85 (ou seja, 85). Para entregar esse troco à pessoa, deve-se retornar as moedas 1x R$0,50, 1x R$0,20, 1x R$0,10 e 1x R$0,05, formando assim a lista [50, 20, 10, 5].*/

/*Implementação
Finalize a implementação da função getChange(payable, paid).
payable é o valor a ser pago, ou o valor total
paid é o valor que a pessoa pagou*/

function getChange(payable, paid) {
  const coins = [200, 100, 50, 20, 10, 5, 2, 1];
  const change = [];
  const { length } = coins;
  let remaining = (paid*100) - (payable*100);
  let nota200,nota100, nota50, nota20, nota10, nota5, nota2, nota1;
  // escreva seu código aqui...
  while (remaining !== 0) {
    nota200 = Math.floor(remaining / coins[0]);
    remaining -= nota200 * coins[0];
    nota100 = Math.floor(remaining / coins[1]);
    remaining -= nota100 * coins[1];
    nota50 = Math.floor(remaining / coins[2]);
    remaining -= nota50 * coins[2];
    nota20 = Math.floor(remaining / coins[3]);
    remaining -= nota20 * coins[3];
    nota10 = Math.floor(remaining / coins[4]);
    remaining -= nota10 * coins[4];
    nota5 = Math.floor(remaining / coins[5]);
    remaining -= nota5 * coins[5];
    nota2 = Math.floor(remaining / coins[6]);
    remaining -= nota2 * coins[6];
    nota1 = Math.floor(remaining / coins[7]);
    remaining -= nota1 * coins[7];
    change.push(nota200,nota100, nota50, nota20, nota10, nota5, nota2, nota1);
  }
  return change;
}

/*
1 - entender o que está pedindo.
2 - executar a função do jeito que ela está, retornou array vazio.
*/
console.log(getChange(2.25, 3));

/*
logica:  dado o valor do troco, a máquina retorna uma lista com as moedas que ela devolverá para a pessoa.
*/
