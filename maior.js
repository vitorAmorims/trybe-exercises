let longestWord = ("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
function maiorPalavra (longestWord) {
let palavras = (longestWord.split(" "));
let maior = 0;
let resultado = '';
for (const palavra of palavras) {
    if (palavra.length > maior) {
        maior = palavra.length;
        resultado = palavra;
    }
}
console.log(resultado);
}
maiorPalavra(longestWord);

//Arrow function
const biggestWord = (longestWord) => {
    let words = longestWord.split(' ');
    let bigger = 0;
    let result = '';
    for (const word of words) {
        if (word.length > bigger) {
            bigger = word.length;
            result = word
        }
    }
    return console.log(result);
}
biggestWord(longestWord);

//Arrow function 1 llinha
const longestWord1 = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]
console.log(longestWord1("Antonio foi no banheiro e não sabemos o que aconteceu"))