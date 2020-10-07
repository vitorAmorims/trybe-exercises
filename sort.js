/* O método sort() ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável. A ordenação padrão é de acordo com a  pontuação de código unicode.*/
var scores = [1, 10, 2, 21]; 
console.log(scores.sort()); //não ordenou

for (let i = 0; i < scores.length; i++) { //necessário criar bloco, para ordenação correta.
    for (let j = 0; j < scores.length; j++) {
        let x
        if (scores[i] < scores[j]) {
            x = scores[i];
            scores[i] = scores[j];
            scores[j] = x;
        }
    }
}
console.log(scores);