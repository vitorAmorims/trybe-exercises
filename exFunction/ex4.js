/*

Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.

*/
let nomes = new Array;
nomes.push("Vitor","Lucas","Silvia","Benjamin");
console.log(nomes);// output array 

//function manual
function manual (nomes){
    let maiorPalavra;
    for (let i = 0; i < nomes.length; i++){
        maiorPalavra = nomes[0];
        if (maiorPalavra.length < nomes[i].length){
            maiorPalavra = nomes[i]
        }
    }
return console.log('A maior palavra do vetor é: '+maiorPalavra);
}
manual(nomes);

//function for in 
function ForIn (nomes){
    let maiorPalavra;
    for (let chave in nomes){
        maiorPalavra = nomes[0];
        if (maiorPalavra.length < nomes[chave].length){
            maiorPalavra = nomes[chave];
        }
    }
    return console.log('A maior palavra do vetor é: '+maiorPalavra);
}
ForIn(nomes);