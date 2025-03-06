# 🎰 **Sorteador Inteligente da Mega-Sena** 🎰 

💡 **NESTE PROJETO: MEGA-SENA ARRANJO RANDÔMICO**  

💡 **Próximo Projeto? Em andamento um projeto de estudos matemáticos com foco em: Analise Fatorial - Arranjos - Permutação - Lógica Boolean e Criptografia - PROJETO ENIGMA**  


![Mega-Sena](https://loterias.caixa.gov.br/PublishingImages/Mega-Sena/Mega-Sena-Cabecalho.png)  

### 🏆 **Uma abordagem inteligente e equilibrada para o sorteio de números!**  

## 📌 **Sobre o Projeto**  
Este projeto foi desenvolvido com um **sistema avançado de sorteio** utilizando **bibliotecas matemáticas simples**, como `Math.random()` e `Math.floor()`, para gerar números dentro de faixas específicas. A principal sacada aqui é a **divisão por quadrantes**, um método que distribui os números sorteados de forma mais estratégica.  

📌 **Destaques do código:**  
✔️ Utiliza **4 quadrantes principais** para equilibrar a distribuição dos números.  
✔️ Adiciona **2 números extras**, que aumentam a aleatoriedade, mas ainda seguem uma lógica dividida em **meio a meio**.  
✔️ Ordenação automática com `sort()`, garantindo números sempre organizados.  
✔️ Exibição dinâmica no HTML utilizando `forEach()`.  
✔️ Pode ser facilmente incrementado para gerar um maior número de sorteios.  

---

## 🔢 **Como os Números São Escolhidos?**  

O código divide os **60 números possíveis** em **4 quadrantes principais**:  

| Quadrante | Intervalo de Números |  
|-----------|----------------------|  
| 🟢 **Q1** | 1 a 15 |  
| 🔵 **Q2** | 16 a 30 |  
| 🟡 **Q3** | 31 a 45 |  
| 🔴 **Q4** | 46 a 60 |  

Além disso, são adicionados **dois números extras** para aumentar a aleatoriedade:  
- 🔄 **Número Extra 1:** Escolhido entre **1 e 30**  
- 🔄 **Número Extra 2:** Escolhido entre **31 e 60**  

Essa abordagem garante um sorteio **mais balanceado**, mantendo um bom nível de aleatoriedade sem que os números fiquem excessivamente concentrados em uma única região.  

---

## ⚙️ **Como Funciona o Código?**  

1️⃣ O código começa com a função `gerarNumero(min, max)`, que utiliza `Math.random()` e `Math.floor()` para gerar um número dentro de um intervalo especificado.  

2️⃣ Um loop `for` gera **10 conjuntos de números**, armazenando-os em um array de **ranges predefinidas**.  

3️⃣ A função `sort()` organiza os números em **ordem crescente** para facilitar a visualização.  

4️⃣ Os números são então **inseridos dinamicamente no HTML** utilizando `forEach()`.  

---

## 🚀 **Como Executar?**  

Basta clonar o repositório e abrir o arquivo `index.html` no navegador!  


git clone https://github.com/luizoryone/MegaSenha.git
cd sorteador-megasena


Ou simplesmente acesse **[aqui](https://luizoryone.github.io/MegaSenha/)** para testar online!  

---

## 🎨 **Captura de Tela**  

![Exemplo de Sorteio](https://luizoryone.github.io/MegaSenha/)  

---

## 📜 **Código-Fonte Principal (JS)**  


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

        numeros.sort((a, b) => a - b);

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

gerarSorteios();


---

## 📜 **E vamos a Conclusão**  

Este projeto demonstra como um simples **uso de lógica matemática** pode criar um sorteador **mais equilibrado e estratégico**. A abordagem de **divisão por quadrantes** e a escolha de **números extras** são diferenciais que tornam este sistema mais interessante e flexível.  

💡 **Quer aprimorar o código?**  
- 📌 Adapte para gerar mais números por sorteio.  
- 📌 Melhore a interface gráfica com animações.  
- 📌 Integre um sistema de estatísticas para analisar os números mais sorteados.  

**🔗 Siga-me no GitHub e contribua com sugestões e melhorias! 🚀**  

---

✍️ **Desenvolvido por:**  
**Luiz Oryone Moraes Lira** 🏆  

📌 **Licença:** MIT 🔓  

---


Caso queira ajustes, me avise! 🚀🎰
