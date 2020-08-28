/*Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

Porcentagem >= 90 -> A

Porcentagem >= 80 -> B

Porcentagem >= 70 -> C

Porcentagem >= 60 -> D

Porcentagem >= 50 -> E

Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/


function analisarAluno (param){
    if (param > 100 || param < 0){
            console.log('Não atende os requisitos');
    }else{
        if (param >= 90){
            console.log(`Nota ${param}, classificação A`);
        }else if (param >= 80 && param < 90){
            console.log(`Nota ${param}, classificação B`);
        }else if (param >= 70 && param < 80){
            console.log(`Nota ${param}, classificação C`);
        }else if (param >= 60 && param < 70){
            console.log(`Nota ${param}, classificação D`);
        }else if (param >= 50 && param < 60){
            console.log(`Nota ${param}, classificação E`);
        }else{
            console.log(`Nota ${param}, classificação F`);
        }
    }
}
analisarAluno(40);
