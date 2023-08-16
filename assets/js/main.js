const divResultado = document.querySelector(".container-resultado");

function calcular() {

    // Primeiro fazemos a requisição dos dados adicionados pelo usuário na página web.
    let peso = document.querySelector("#peso");
    let altura = document.querySelector("#altura");
    // Salvamos esses dados em variáveis.
    peso = Number(peso.value);
    altura = Number(altura.value);

    // Validação dos dados com o uso de uma função. Esse bloco if só será executado se a minha função retornar true.
    if (validaDados(peso, altura)) {
        // Definindo as variáveis com o usu de funções.
        let imc = calcImc(peso, altura);
        let classe = classificacao(imc);
        // Determinando o conteúdo e estilo da divResultado da página.
        divResultado.innerHTML = `O seu IMC é de: ${imc.toFixed(2)} (${classe})`
        divResultado.style.backgroundColor = "lightgreen"
        divResultado.style.padding = "10px 30px"
    }
}

// Lógica de validação dos dados passados pelo usuário.
function validaDados(peso, altura) {
    if (!peso) {
        // Determinando o conteúdo e estilo da divResultado da página.
        divResultado.innerHTML = "Entre com um peso válido!"
        divResultado.style.backgroundColor = "red"
        divResultado.style.padding = "10px 30px"
        return false;
    } else if (!altura) {
        // Determinando o conteúdo e estilo da divResultado da página.
        divResultado.innerHTML = "Entre com uma altura válida!"
        divResultado.style.backgroundColor = "red"
        divResultado.style.padding = "10px 30px"
        return false
    }
    return true;
}

// Função para cálculo de IMC.
function calcImc(peso, altura) {
    return peso / (altura * altura)
}

// Função para classificar o resultado de acordo com o seu valor.
function classificacao(imc) {
    if (imc < 18.5) {
        classe = "Abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        classe = "Peso normal"
    } else if (imc >= 25 && imc <= 29.9) {
        classe = "Sobrepeso"
    } else if (imc >= 30 && imc <= 34.9) {
        classe = "Obesidade grau I"
    } else if (imc >= 35 && imc <= 39.9) {
        classe = "Obesidade grau II"
    } else if (imc >= 40) {
        classe = "Obesidade grau III"
    }
    return classe;
}