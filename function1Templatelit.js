function templateLiteral (param) {
    let frase = "Tryber x aqui!";
    frase = frase.replace("x", param);
    return console.log(frase);
}
templateLiteral("bebeto");

//Arrow function
const templateLiteral1 = (param) => {
    let frase = "Tryber x aqui!";
    frase = frase.replace("x", param);
    return console.log(frase);
}
templateLiteral("ensinando");

