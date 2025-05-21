function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const estatura = parseFloat(document.getElementById('estatura').value);

  if (isNaN(peso) || isNaN(estatura) || estatura <= 0) {
    alert("Por favor, introduce valores válidos.");
    return;
  }

  const imc = peso / (estatura * estatura);
  alert("Tu IMC es: " + imc.toFixed(2));
}
