/*Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop -> diagonals
*/

/* posso resolver o exercício de duas maneiras, criando um array e iterando o array.
Caso encontrar o item na matriz, output será o comando para respectiva peça.
//Poderia tambbém fazer função binária, para pesquisa.... pendente fazer aqui também.
let xadrez = new Array; 
xadrez.push("peao");
xadrez.push("torre");
xadrez.push("cavalo");
xadrez.push("bispo");
xadrez.push("rainha");
xadrez.push("rei");
console.log(xadrez);

let jogar = window.prompt('Digite a peça para executar a jogada');
let peca = jogar.toLocaleLowerCase();
for (let i = 0; i < xadrez.length; i++){
    if (peca == xadrez[i]){
        console.log("Execute uma jogada");
    }else{
        console.log("Não existe está peça");
    }
}
*/

//forma simples de resolver o problema.
let peca = "rei";
    switch (peca){
        case 'peao':
            console.log('Peao andou uma casa para frente, ou andar lateral para comer peça.');
            break;
        case 'torre':
            console.log('Andar n casas horizontal ou verticalmente');
            break;
        case 'bispo':
            console.log('Andar x casas lateralmente');
            break;
        case 'rainha':
            console.log('Andar para qualquer lado e quantas casas quiser');
            break;
        case 'rei':
            console.log('Andar uma casa para qualquer direção');
            break
        default:
            console.log('Não encontrei a peça');
    }

    