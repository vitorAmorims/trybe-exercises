//O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

let numeros = [1,2,3,4,5,6];
const dobro = numeros.map((number) => {
    return number * 2;
});
console.log(dobro);

const negativos = numeros.map((number) => {
    return number * -1;
});
console.log(negativos);

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];
//const listProducts = [{ Arroz: 2.99 },...]

const produtosEprecos = products.map((produto, prices) => {
    return { product: produto }
})