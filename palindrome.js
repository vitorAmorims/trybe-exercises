// --- Instruções
// Dado um string, retorna verdadeiro se o string for um palíndromo
// ou falso se não for. Palíndromos são cordas que
// forma a mesma palavra se for invertida. * Inclua * espaços
// e pontuação para determinar se a string é um palíndromo.
// --- Exemplos:
// palíndromo ("abba") === verdadeiro
// palíndromo ("abcdefg") === falso

function palindrome(str) {
    let newString = str.split('').reverse().join('');
    if (newString === str) {
        return true;
    } else {
        return false;
    }
}
palindrome('amor');
module.exports = palindrome;