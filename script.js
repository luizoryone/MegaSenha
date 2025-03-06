function gerarNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarSorteios() {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    for (let i = 0; i < 10; i++) {
        let numeros = [
            gerarNumero(1, 15),
            gerarNumero(16, 30),
            gerarNumero(31, 45),
            gerarNumero(46, 60),
            gerarNumero(1, 30),
            gerarNumero(31, 60)
        ];

        numeros.sort((a, b) => a - b); // Ordenar os números

        let sorteioDiv = document.createElement("div");
        sorteioDiv.classList.add("sorteio");

        numeros.forEach(num => {
            let numSpan = document.createElement("span");
            numSpan.classList.add("numero");
            numSpan.innerText = num;
            sorteioDiv.appendChild(numSpan);
        });

        resultadoDiv.appendChild(sorteioDiv);
    }
}

// Sorteio inicial ao carregar a página
gerarSorteios();
// DevLops by Luiz Oryone
