//create a range function
//range(5) -> [1,2,3,4,5] 
//range(6,11) -> [6,7,8,9,10,11] 
//range(10,19,2) -> [10,12,14,16,18]
//range(6,2) -> [6,5,4,3,2]
//range(8,-3, 4) -> [8,4,0]

//operator ...spread/rest

function range(a,b,s = 1) { //s default = 1 para manter o padrão de retorno
    let retorno = [];
    const n1 = b === undefined ? 1 : a //operador ternário
    const n2 = b === undefined ? a : b
    const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s)
    for (let i = n1; n1 <= n2 ? i <= n2 : i >= n2; i += step) {
        retorno.push(i);
    }
    //se chamar a função com apenas 1 param, loop for n1 = 1 e n2 = ao numero que passar na função
    //se chamar a fuunção com dois param, loopp for n1 = a e n2 = b
    return retorno;
}
//range(5) -> [1,2,3,4,5] 
console.log(range(5));
//range(6,11) -> [6,7,8,9,10,11] 
console.log(range(5,11));
//range(10,19,2) -> [10,12,14,16,18]
console.log(range(10,19,2));
//range(6,2) -> [6,5,4,3,2]
console.log(range(6,2)) //retorno [], porque n1 = 6 e n2 = 2 dentro do loop for retorno = false
//necessário fazer acerto no laço for incluindo n1 <= n2 ? i <= n2 : i >= n2
//criando variável step const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s)

//range(8,-3, 4) -> [8,4,0]
//se n1 > n2, a variavel s fica negativa
console.log(range(8,-3, 4))