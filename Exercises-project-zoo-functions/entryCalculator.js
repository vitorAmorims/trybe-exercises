/*
 Implemente a função entryCalculator:
Retorna 0 se nenhum argumento for passado
Retorna 0 se um objeto vazio for passado
Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos
*/

let prices = {
    'Adult': 49.99,
    'Senior': 24.99,
    'Child': 20.99
};

// parte 1
function entryCalculator(entrants) {
    if (!entrants) {
        return 0;
    }
}
// console.log(entryCalculator());

// parte 2
function entryCalculator1(entrants) {
    if (entrants = {}){
        return 0;
    }
}
// console.log(entryCalculator1({}))

// parte 3
// Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos
const entrants = {Adult: 1, Senior: 1, Child: 1};
// console.log(entrants);
function entryCalculator2(entrants) {
    const {Adult, Senior, Child} = entrants;
    let total;
    total = (Adult * prices.Adult) + (Senior * prices.Senior) + (Child * prices.Child);
    return total;
}
// console.log(entryCalculator2(entrants)); //Adult 49.99, Senior 24,99 e Child 20,99

//outra maneira de fazer
function entryCalculator3(entrants) {
    const {Adult, Senior, Child} = entrants;
    const {Adult: adPrices, Senior: sePrices, Child: chPrices } = prices;
    let total;
    total = (Adult * adPrices) + (Senior * sePrices) + (Child * chPrices)
    return total;
}
console.log(entryCalculator3(entrants))