//Rest permite que uma função receba um número indefinido de parâmetros
/*
Os operadores rest e spread permitem trabalhar com múltiplos parâmetro em funções.

Sendo o Rest utilizado para permitir que uma função receba um número indefinido de parâmetros, 

enquanto o spread permite definir um número indefinido de parâmetros para uma função, Array ou objeto.
*/

/*pread permite definir um número indefinido de parâmetros.*/

const myPackage = ['cheese', 'eggs', 'milk', 'bread'];
console.log(myPackage);

//Enquanto que no spread operator os valores de um objeto iterável são espalhados, no parâmetro rest os valores listados são agrupados em um array.

function printPackageContents(...myPackage) {
    for (const item of myPackage) {
        console.log(item);
    }
} 

/*Exemplo 1
No exemplo abaixo veremos como o operador rest permite capturar os argumentos de uma função de forma simples:
*/
function soma (...valores) {
    var total = 0

    for (const item of valores) {
      total += parseInt(item, 10)
    }

    return total
  }
//O uso das reticencias indica que todos os valores passados por parâmetros serão passados para a função como a variável valores que contem um Array de valores.

console.log(soma(1, 2, 3, 4, 50, 10, 23))

/*
Exemplo 2
No exemplo abaixo veremos como o operador rest permite capturar os argumentos de uma função de maneira simples:
*/
function getArgumentos (valor1, ...outrosValores) {
    return {
      valor1,
      outrosValores
    }
  }

console.log(getArgumentos('DevMedia', 'curte', 'Javascript'))

/*
Considere que temos uma lista de produtos e seja necessário efetuar a soma de todos os itens passados como argumento da função.
*/
const produtos = [
    { descricao: 'Papel Ofício', quantidade: 10, valor: 10.50 },
    { descricao: 'Lapis preto', quantidade: 20, valor: 0.50 }
  ]


function total (...produtos) {
return produtos
    .map(produto => produto.quantidade * produto.valor)
    .reduce((a, b) => a + b, 0)
}
console.log(total(...produtos))
//Perceba que o map foi utilizado para percorrer os itens do Array de produtos convertendo cada item em um numero a partir da soma da quantidade e valor dos produtos.
