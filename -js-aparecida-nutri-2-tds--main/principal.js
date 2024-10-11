var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#segundo-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");

var peso = parseFloat(tdPeso.textContent);
var altura = parseFloat(tdAltura.textContent);

var pesoEhValido = true;
var alturaEhValido = true;

if (isNaN(peso) || peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (isNaN(altura) || altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaEhValido = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturaEhValido && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2); // Formatar o IMC para duas casas decimais
}








