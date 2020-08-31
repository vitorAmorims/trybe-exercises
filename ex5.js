/*
4- Depois, faça uma pirâmide com n asteriscos de base
n = 5

  *
 ***
*****
*/

function resolver (param){
    let lineIndex;
    let columnIndex;
    let symbol = '$'; //troquei o simbolo $
    let inputLine = '';
    let inputPosition = param;
    for (lineIndex = 0; lineIndex < param; lineIndex += 2){
        for (columnIndex = 0; columnIndex < param; columnIndex++){
            if (columnIndex > lineIndex){
                inputLine += '';
            }else{
                inputLine += symbol;
            }
        }
        console.log(inputLine);
        inputLine = '';
        inputPosition--;
    }
}
resolver(5);