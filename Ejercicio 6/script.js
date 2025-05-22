function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const edad = parseInt(document.getElementById("edad").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const correo = document.getElementById("correo").value.trim();
  const resultado = document.getElementById("resultado");

  let errores = [];

  if (!nombre || nombre.length > 50) {
    errores.push("El nombre no puede estar vacío ni tener más de 50 caracteres.");
  }

  if (!apellido || apellido.length > 50) {
    errores.push("El apellido no puede estar vacío ni tener más de 50 caracteres.");
  }

  if (isNaN(edad) || edad < 18) {
    errores.push("La edad no debe ser negativa y debe ser un número válido.");
  }

  if (isNaN(altura) || altura < 0 || altura > 230) {
    errores.push("La altura debe ser un número entre 0 y 230 cm.");
  }

  if (!correo || !correo.includes("@")) {
    errores.push("El correo electrónico no puede estar vacío y debe contener '@'.");
  }

  if (errores.length === 0) {
    resultado.textContent = "Validaciones correctas. Formulario enviado.";
    resultado.className = "correcto";
  } else {
    resultado.innerHTML = errores.join("<br>");
    resultado.className = "error";
  }
}
