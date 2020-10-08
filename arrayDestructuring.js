/*
O que é atribuição de desestruturação?

A atribuição de desestruturação permite que você atribua as propriedades de uma matriz ou objeto a variáveis ​​usando uma sintaxe semelhante a literais de matriz ou objeto. Essa sintaxe pode ser extremamente concisa, embora ainda exiba mais clareza do que o acesso de propriedade tradicional.
*/

//sem destructurig
var someArray = [first, second, third]

var first = someArray[0];
var second = someArray[1];
var third = someArray[2];

//com array destructurig, código mais legível
//sintaxe: [ variable1, variable2, ..., variableN ] = array;

var [first, second, third] = someArray;

//valores padrão
var [missing = true] = [];
console.log(missing);
// true

var { message: msg = "Something went wrong" } = {};
console.log(msg);
// "Something went wrong"

/*
Isso apenas atribuirá a variável 1 por meio da variável N ao item correspondente na matriz. Se você quer declarar suas variáveis, ao mesmo tempo, você pode adicionar um var, letou constem frente à atribuição:

var [ variable1, variable2, ..., variableN ] = array;
let [ variable1, variable2, ..., variableN ] = array;
const [ variable1, variable2, ..., variableN ] = array;
Na verdade, variável é um nome impróprio, pois você pode aninhar padrões tão profundamente quanto desejar:

var [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo);
// 1
console.log(bar);
// 2
console.log(baz);
// 3
*/
