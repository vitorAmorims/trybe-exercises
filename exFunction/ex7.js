/*
Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
Valor de teste: "trybe" e "be"
Valor esperado no retorno da função: true
verificaFimPalavra("trybe", "be");
Retorno esperado: true
verificaFimPalavra("joaofernando", "fernan");
Retorno esperado: false
*/
function comparar (param, param1){
    let nome_inverso = '';
    let nome1_inverso = '';
    let nome = param.toUpperCase().toString();
    let nome1 = param1.toUpperCase().toString();
    console.log(nome);    
    for (let i = nome.length -1; i >= 0; i--){
        nome_inverso += nome[i];
    }
   for (let j = nome1.length - 1; j >= 0; j--){
        nome1_inverso += nome1[j];
    }
    console.log(nome1_inverso[0]+nome1_inverso[1]);
    
    if (nome_inverso[0] === nome1_inverso[0] && nome_inverso[1] === nome1_inverso[1]){
        console.log(true);
    }else{
        console.log(false);
    }
    
}
(comparar("trybe","be"));