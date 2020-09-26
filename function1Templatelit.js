let frase1 = "Tryber x aqui!"
function templateLiteral (param) {
    frase1 = frase1.replace("x", param);
    return console.log(frase1);
}
templateLiteral("bebeto");

//Arrow function
const templateLiteral1 = (param) => {
    let frase = "Tryber x aqui!";
    frase = frase.replace("x", param);
    return console.log(frase);
}
templateLiteral1("ensinando");

let skills = ["determinação", "auto-didata", "html", "css", "javascript"];

function fskills (param) {
    for (let i = 0; i < skills.length -1; i++) {
        for (let j = 0; j < skills.length; j++) {
            let x;
            if (skills[i] < skills[j]) {
                x = skills[i];
                skills[i] = skills[j];
                skills[j] = x;
            }
        }
    }
    console.log(`${frase1} Minhas cinco principais habilidades são:`)
    for (let i = 0; i < skills.length; i++) {
        console.log(`\n ${i}-${skills[i]}`);
    }
        
}
fskills(frase1);