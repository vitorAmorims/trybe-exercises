/*Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

Valor esperado no console:

Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
*/
//criação do primeiro objeto 
let info = {
personagem: "Margarida",
origem: "Pato Donald",
nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
recorrente: "Sim"
};

//criação do segundo objeto
let info2 = {
personagem: "Tio Patinhas",
origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
nota: "O último MacPatinhas",
recorrente: "Sim"
};

for (let propriedade in info){
    if (info[propriedade] === info.recorrente &&
        info[propriedade] === "Sim" &&
        info2[propriedade] === "Sim"
        ){
        console.log("Ambos recorrentes");
    }else{
        console.log(info[propriedade] + " e "+info2[propriedade]);
    }
}

for (let teste in info){ //for in para ver a lógica. //ok entendido
    if (info[teste] === "Sim" && info[teste] === "Sim" && info2[teste] === "Sim"){
        console.log(true);
    }else{
        console.log(false);
    }
}