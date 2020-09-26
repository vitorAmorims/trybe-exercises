function fFatorial (numero) {
    let n = numero;
    let fatorial = 1;
    if (numero === 1) {
        return console.log(`O fatorial de ${n}! é igual à ${fatorial}.`)
    } else {
        while (numero > 0) {
            fatorial *= numero;
            numero -= 1;
        }
    }
    return console.log(`O fatorial de ${n}! é igual à ${fatorial}.`)
}
fFatorial(1);

//Arrow function
const fatorial = (numero) => {
    let n = numero;
    let fatorial = 1;
    if (numero === 1) {
        console.log(`O fatorial de ${n}! é igual à ${fatorial}.`)        
    } else {
        while (numero > 0) {
            fatorial *= numero;
            numero -= 1;
        }
    }
    console.log(`O fatorial de ${n}! é igual à ${fatorial}.`)
}
fatorial(1);

