const btnBuscar = document.getElementById("busca");
const btnConcelho = document.getElementById("concelho");
var concelho = 1;

async function buscarConcelho() {
    url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)

    const dados = await resposta.json()
    concelho = dados.slip.advice

    resultado.innerHTML = `<p>${concelho}</p>`
}

async function traduzir(texto) {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=en|pt`;
    const resposta = await fetch(url);
    const dados = await resposta.json();
    return dados.responseData.translatedText;
}

btnBuscar.addEventListener("click", () => {
    buscarConcelho().then(() => {
        traduzir(concelho).then((textoTraduzido) => {
            resultado.innerHTML = `<p>${textoTraduzido}</p>`;
        });
    });
});