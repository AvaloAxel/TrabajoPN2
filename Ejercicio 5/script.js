document.getElementById("areaForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const A = parseFloat(document.getElementById("alturaA").value);
    const C = parseFloat(document.getElementById("alturaC").value);
    const B = parseFloat(document.getElementById("baseB").value);

    if (A < C) {
        document.getElementById("resultado").textContent = "Error: A debe ser mayor que C.";
        return;
    }

    const areaRectangulo = B * C;
    const areaTriangulo = (B * (A - C)) / 2;
    const areaTotal = areaRectangulo + areaTriangulo;

    document.getElementById("resultado").textContent = 
        `Área total del terreno: ${areaTotal.toFixed(2)} m²`;
});
