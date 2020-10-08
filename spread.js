let numeros = [1,2,3]
// let novosNumeros = [...numeros, 4];
let novosNumeros = [1, ...numeros]
console.log(novosNumeros);

function soma(a,b,c) {
    return a+b+c;
}
console.log(soma(...numeros));

//spread espalhar elementos ou valores
