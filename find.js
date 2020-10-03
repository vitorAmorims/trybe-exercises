/* O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.*/
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
// expected output: 12

const numbers = [19, 21, 30, 3, 45, 22, 15, 40];
const verify = numbers.find(element => element % 2 === 0);
console.log(verify);

/* método find faz loop e usa break no primeiro elemento que satisfaça a função callback.*/
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
        break;
    }
}

/* exemplo */
const inventory = [
    {name: 'maças', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cerejas', quantity: 5}
];

function isCherries(fruit) { 
    return fruit.name === 'cerejas';
}

console.log(inventory.find(isCherries)); 
//expected { name: 'cerejas', quantity: 5 }

/*arrow function*/
console.log(inventory.find(fruit => fruit.name = 'maças'));

