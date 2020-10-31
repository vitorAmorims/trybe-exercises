const { intersectionTypeAnnotation } = require("@babel/types");

// função para gerar números aleatórios de 1 à 100
const randomNumber = () => Math.floor(Math.random() *100 + 1);

// fn recebe param inteiro, e retornar true ou false caso o número aleatório sejá divisible pelo param.
const isDivisible = number => (randomNumber() % number === 0);

module.exports = { isDivisible, randomNumber }
