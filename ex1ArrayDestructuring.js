//Use a atribuição de desestruturação para trocar os valores de a e de b forma que a receba o valor armazenado em b e b receba o valor armazenado em a.

let a = 8, b = 6;

//array destructurig

[a,b] = [b,a]

console.log(a) //expected number 6

console.log(b) //expected number 8