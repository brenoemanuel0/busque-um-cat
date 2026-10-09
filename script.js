const btnBuscar = document.getElementById("busca");
const resultado = document.getElementById("resultado");

function buscarGato() {
    const url = `https://cataas.com/cat?t=${Date.now()}`;

    resultado.innerHTML = "Carregando... 🐱";

    const img = new Image();
    img.src = url;
    img.alt = "Gato";
    img.width = 300;

    img.onload = () => {
        resultado.innerHTML = "";
        resultado.appendChild(img);
    };

    img.onerror = () => {
        resultado.textContent = "Não foi possível buscar o gato. Tente novamente.";
    };
}

btnBuscar.addEventListener("click", buscarGato);