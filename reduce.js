/*
O método reduce()executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
*/

//sintaxe: array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))

const array1 = [1, 2, 3, 4];

//somar o valor de todos elementos de array1
const total = array1.reduce(function (element, sum) {
    return sum += element;
});
// console.log(total);

//somar o valor de todos elementos de array1 com Arrow Functions
const sum = array1.reduce((element, sum) => sum += element);
// console.log(sum);


//Exemplo2 setando acumulador
const numbers = [32, 15, 3, 2, -5, 56, 10];

//esta função será uma fn callback
const getSum = (result, number) => { //o valor inicial de result é 0 neste caso
//   console.log(result); // 32 47 50 52 47 103
  return result + number; 
  };

const sumNumbers = numbers.reduce(getSum); //NOTA: o valor inicial de result não foi declarado, e a linguagem atribui result = 0 para realizar o somatório.

/* lógica passo à passo do método reduce
1 - linha result = 0, number = 32 e return result + number = 32
2 - linha result = 32, number = 15 e return result + number = 47
3 - linha result = 46, number = 3 e return result + number = 50
... assim ao final do return result = 113
*/
// console.log(sumNumbers); // 113

const sumNumberswithDifStartValue = numbers.reduce(getSum, 1); //setando result'acumulador' inicial = 1
/* lógica passo à passo do método reduce
1 - linha result = 1, number = 32 e return result + number = 33
2 - linha result = 33, number = 15 e return result + number = 48
3 - linha result = 48, number = 3 e return result + number = 51
... assim ao final do return result = 114
*/

// console.log(sumNumberswithDifStartValue); //114

//Exemplo 3 - Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce.
const numbers3 = [50, 85, -30, 3, 15];

function highestValue () {
    let highest = 0
    for (let i = 0; i < numbers3.length; i += 1) {
        if (numbers3[i] > highest) {
            highest = numbers3[i];
        }
    }
    return console.log(highest);
}
highestValue();

const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

const bigger = numbers3.reduce(getBigger, 0);
console.log(bigger); // 85

//exemplo 4 - Para fixar ainda mais conceito de reduce, faça uma função que some todos os números pares do array:
const numbers4 = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const somarPares = numbers4
.filter((number) => number % 2 === 0)
.reduce((elemento, total) => total += elemento);
console.log(somarPares); //152

//exemplo 5 - Solução usando apenas reduce
const numbers5 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers1 = (array) => array.reduce(sumPair);

console.log(sumNumbers1(numbers5)); // 152

