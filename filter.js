//O método filter() cria um novo array com todos os elementos que passaram no teste

//var newArray = arr.filter(callback[, thisArg])

let numeros = [1,4,11,30];

//exemplo
// function fmaiores (element) {
//     return element > 10;
// }

// let maiores = numeros.filter(fmaiores);
// console.log(maiores);

//exemplo1
// let maiores = numeros.filter((element) => {
//     return element > 10;
// });
// console.log(maiores);

let carros = [];
let bmw = {
    ano: 2020,
    cor: 'branco',
    modelo: 'X6'
};
let Volkswagem = {
    ano: 2019,
    cor: 'prata',
    modelo: 'GLI'
};
let GM = {
    ano: 2017,
    cor: 'vermelho',
    modelo: 'Cruze'
}

carros.push(bmw, Volkswagem, GM);
// console.log(carros);

//filtrar carros de cor branco

let pesquisarCarrosBrancos = carros.filter((element) => {
    return element.cor === 'vermelho'
});
// console.log(pesquisarCarrosBrancos);

const listaDePessoas = [
    {nome: 'Vitor', email: 'vtamrims@gmail.com', nota: 100},
    {nome: 'Lucas', email: 'lucas@gmail.com', nota: 150},
    {nome: 'Silvia', email: 'silvia@gmail.com', nota: 115},
    {nome: 'Alvin', email: 'alvin@gmail.com', nota: 70}
];

const listaDeAprovados = listaDePessoas.filter( (aluno) => {
    return aluno.nota >= 100;
});
console.log(listaDeAprovados);
