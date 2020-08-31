/*
2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
n = 5

*
**
***
****
*****
*/
function resolve (param){
    let linha = 0;
    let simbolo = "*";
    let inputlinha = '';
    while (linha < param){
        inputlinha = inputlinha + simbolo;
        console.log(inputlinha);
        linha++;
    }
    return inputlinha;
}
resolve(10);