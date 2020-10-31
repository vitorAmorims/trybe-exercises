/*Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
*/

// função para gerar números aleatórios de 1 à 100
const randomNumber = () => Math.floor(Math.random() * 100 + 1);

module.exports = { randomNumber };