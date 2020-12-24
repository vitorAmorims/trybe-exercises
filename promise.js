// A promise tem 3 estados. Pending, Resolved e Rejected. Quando a promise é executada ela entra automáticamente no estado Pending. Aqui é quando ela sai da fila e vai para sua "área especial". Ao voltar, ela pode voltar com um dos 2 estados, Resolved, se ocorreu tudo certo com sua execução ou Rejected, se ocorreu algum erro. É aqui que nossos parâmetros resolve e reject entram.

const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 11);
    if (number > 10 || number <= 5) {
        return reject(console.log(`Não sucesso, o número gerado foi ${number}`));
    }
    resolve(console.log(`Super sucesso! Número gerado foi ${number}`));
});
// console.log(typeof promise); output object

promise.then();