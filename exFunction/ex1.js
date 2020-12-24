/*
Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara.
verificaPalindrome("arara");
Retorno esperado: true
verificaPalindrome("desenvolvimento");
Retorno esperado: false
*/
function palindrome (param){
    let palavra = param;
    let reverse = param.split("").reverse().join("");
    if (palavra === reverse){
        console.log(true);
    }else{
        console.log(false);
    }
}
palindrome('ana');