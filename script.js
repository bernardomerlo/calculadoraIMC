function calcularIMC() {
    var alturaCm = document.getElementById('altura').value;
    var peso = document.getElementById('peso').value;

    // Validar se ambos os campos foram preenchidos
    if (alturaCm === "" || peso === "") {
        alert("Por favor, preencha ambos os campos.");
        return;
    }

    // Converter altura de centímetros para metros
    var alturaMetros = alturaCm / 100;

    // Calcular o IMC
    var imc = peso / (alturaMetros * alturaMetros);

    // Exibir o resultado
    var resultadoElemento = document.getElementById('final');
    resultadoElemento.textContent = 'Seu IMC é: ' + imc.toFixed(2);

    if (imc < 16.9) {
        resultadoElemento.textContent = 'Seu IMC é: ' + imc.toFixed(2) + " e está MUITO ABAIXO DO PESO";
    } else if (imc < 18.4) {
        resultadoElemento.textContent = 'Seu IMC é: ' + imc.toFixed(2) + " e está abaixo do peso";
    } else if (imc < 24.9) {
        resultadoElemento.textContent = 'Seu IMC é: ' + imc.toFixed(2) + " e está no peso normal";
    } else if (imc < 29.9) {
        resultadoElemento.textContent = 'Seu IMC é: ' + imc.toFixed(2) + " e está acima do peso";
    } else if (imc < 34.9) {
        resultadoElemento.textContent = 'Seu IMC é: ' + imc.toFixed(2) + " e está com obesidade I";
    } else if (imc < 40) {
        resultadoElemento.textContent = 'Seu IMC é: ' + imc.toFixed(2) + " e está com obesidade II";
    } else {
        resultadoElemento.textContent = 'Seu IMC é: ' + imc.toFixed(2) + " e está com obesidade III";
    }
}