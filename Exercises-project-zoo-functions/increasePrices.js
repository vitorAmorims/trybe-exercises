/*
- Implemente a função increasePrices:
Ao passar uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais
*/

//porcentagem 5% 10%

//taxa (1+(5/100)) (1+(10/100))

let prices = {
    'Adult': 49.99,
    'Senior': 24.99,
    'Child': 20.99
};

function increasePrices(porcentagem) {
    let newPrices = Object.assign({}, prices);
    const tax = (1+(porcentagem/100));
    console.log(tax);
    const {Adult, Senior, Child} = newPrices;
    prices.Adult = Number(parseFloat(Adult * tax).toFixed(2));
    prices.Senior = Number(parseFloat(Senior * tax).toFixed(2));
    prices.Child = Number(parseFloat(Child * tax).toFixed(2));
}
increasePrices(10);
console.log(prices);
increasePrices(5);
