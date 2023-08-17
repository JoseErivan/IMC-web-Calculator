const divResultado = document.querySelector(".container-resultado");

function calcular() {
    // Primeiro fazemos a requisição dos dados adicionados pelo usuário na página web.
    let peso = document.querySelector("#peso");
    let altura = document.querySelector("#altura");
    // Salvamos esses dados em variáveis.
    peso = Number(peso.value);
    altura = Number(altura.value);
    // Validamos os dados de peso e altura da entrada do usuário.
    validaDados(peso, altura);
}

// Lógica de validação dos dados passados pelo usuário.
function validaDados(peso, altura) {
    // Caso o peso inserido seja inválido entramos nesse if.
    if (!peso) {
        setMessagem("Insira um peso válido!", "resultado-errado")
        return;
    }
    // Caso a altura inserida seja inválida entramos nesse if.
    if (!altura) {
        setMessagem("Insira uma altura válida!", "resultado-errado")
        return;
    }
    // Caso os dados inseridos sejam validados com sucesso, temos a execução dos códigos abaixo.
    const imc = calcImc(peso, altura);
    return setMessagem(`O seu IMC é: ${imc.toFixed(2)} (${classificacao(imc)})`, "resultado-correto")
}

// A função setMensagem será responsável pela criação de um componente HTML 'p' para que a mensagem seja colocada dentro.
// Essa função recebe a mensagem para o usuário e a classe para o meu componente que vai alerar ele visualmente.
function setMessagem(msg, className) {
    divResultado.innerHTML = "" // Resetando o conteúdo da div.
    const paragrafo = document.createElement("p"); // Criando o elemento 'p'.
    paragrafo.classList.add(className); // Definindo sua classe.
    paragrafo.textContent = msg; // Definindo seu conteúdo.
    divResultado.appendChild(paragrafo); // Adicionando o componente a div.
}

// Função para cálculo de IMC.
function calcImc(peso, altura) {
    return peso / altura ** 2;
}

// Função para classificar o resultado de acordo com o seu valor.
function classificacao(imc) {
    const classes = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau I", "Obesidade grau II", "Obesidade grau III"]
    if (imc >= 39.9) return classes[5];
    if (imc >= 34.9) return classes[4];
    if (imc >= 29.9) return classes[3];
    if (imc >= 24.9) return classes[2];
    if (imc >= 18.5) return classes[1];
    if (imc < 18.5) return classes[0];
}