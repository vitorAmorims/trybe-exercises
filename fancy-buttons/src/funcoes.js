function log() {
    console.log("Primeira mensagem");
}

function log1() {
    alert("Segunda mensagem");
}

function log2() {
    console.log("Terceira mensagem");
    const element = document.getElementById("root");
    element.style.backgroundColor = 'silver'
}

module.exports = {log, log1, log2}