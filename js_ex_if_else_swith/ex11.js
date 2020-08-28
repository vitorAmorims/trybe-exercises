/*
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS

Salário bruto até R$ 1.556,94: alíquota de 8%

Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR

Até R$ 1.903,98: isento de imposto de renda

De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

*/
let salario_bruto;
let salario_base;
let salario_liq;

function calcularSalarioLiq (param){
    let aliquota_inss;
    let inss;
    let aliquota_ir;
    let ir;
    let parcela_reduzir;
    salario_bruto = param;
    if (salario_bruto == 1556.94){
        aliquota_inss = 8;
        inss = (salario_bruto / 100) * aliquota_inss;
        salario_base = salario_bruto - inss;
    }else if (salario_bruto >=1556.95 && salario_bruto <= 2594.92){
        aliquota_inss = 9;
        inss = (salario_bruto / 100) * aliquota_inss;
        salario_base = salario_bruto - inss;
    }else if (salario_bruto >= 2594.93 && salario_bruto <= 5189.88){
        aliquota_inss = 11;
        inss = (salario_bruto / 100) * aliquota_inss;
        salario_base = salario_bruto - inss;
    }else if (salario_bruto >= 5189.89){
        aliquota_inss = 570.88;
        inss = (salario_bruto / 100) * aliquota_inss;
        salario_base = salario_bruto - inss;
    }else{
        aliquota_inss = 0;
        inss = 0;
        salario_base = 0
    }
    /*
    Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
*/
    if (salario_base >= 1903,99 && salario_base <= 2826,65){
        aliquota_ir = 7.5;
        parcela_reduzir = 142,80; 
        ir = (((salario_base /100) * aliquota_ir) - parcela_reduzir);
        salario_liq = salario_base - ir;
    }else if(salario_base >= 2826,66 && salario_base <= 3751,05){
        aliquota_ir = 15;
        parcela_reduzir = 354,80;
        ir = (((salario_base /100) * aliquota_ir) - parcela_reduzir);
        salario_liq = salario_base - ir;
    }else if (salario_base >= 3751,06 && salario_base <= 4664,68){
        aliquota_ir = 22.5;
        parcela_reduzir = 636,13;
        ir = (((salario_base /100) * aliquota_ir) - parcela_reduzir);
        salario_liq = salario_base - ir;
    }else if(salario_base > 4664,68){
        aliquota_ir = 27.5;
        parcela_reduzir = 869,36;
        ir = (((salario_base /100) * aliquota_ir) - parcela_reduzir);
        salario_liq = salario_base - ir;
    }
    console.log(salario_liq);
}
calcularSalarioLiq(3100);
