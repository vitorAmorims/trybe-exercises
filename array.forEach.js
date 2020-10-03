const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for loop
function multiplicar (param) {
    let multiplicados = []
    for (let i = 0; i < param.length; i++) {
        multiplicados.push(param[i] * 2);
    }
    return multiplicados;
}
// console.log(multiplicar(numbers));

//Arrow functions
const multiplicarArrow = (param) => {
    for (let i in param) {
        param[i] = param[i] * 2;
    }
    return param
};
// console.log(multiplicarArrow(numbers));

//ForEach
/*O método forEach() executa uma dada função em cada elemento de um array.*/

/*valor reetornado undefined*/

//sintaxe arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);

/* percorrendo elemento, index, array */
numbers.forEach((element, index, array) => {
    console.log(`cada elemento do array: ${element}`);
    console.log(`index, posição do elemento: ${index}`);
    console.log(`Array percorrido elemento: ${array}`);
});

/* chamando a função para cada elemento do array */
const multiplicaPor2 = (element) => {
    console.log(`${element * 2}`);
};
numbers.forEach(multiplicaPor2);
