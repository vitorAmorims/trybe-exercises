const nome = "Vitor Amorim";
const descricao = "Sou estudante de programação.";
const agradecer = "Senhor, tenha piedade de mim e me ajude!!";

function primeiraChamada() {
  return (
    <div className="App">
      <h1> {nome} </h1>
      <p> {descricao} </p>
      <p>{agradecer}</p>
    </div>
  );
}

export default primeiraChamada;
