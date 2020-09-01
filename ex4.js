/*
3- Agora inverta o lado do triângulo. Por exemplo:
n = 5

    *
   **
  ***
 ****
*****
Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.
*/

function resolverProblema (param){
    let lineIndex;
    let columnIndex;
    let symbol = '$'; //troquei o simbolo $
    let inputLine = '';
    let inputPosition = param;

    for (lineIndex = 0; lineIndex < param; lineIndex++) {
        for (columnIndex = 0; columnIndex <= param; columnIndex++) {
            if (columnIndex < inputPosition) {
                inputLine = inputLine + ' ';
            } else {
                inputLine = inputLine + symbol;
            }
        }
    console.log(inputLine);
    inputLine = '';
    inputPosition--;
    };
}
resolverProblema(10);