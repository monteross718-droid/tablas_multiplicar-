function generarTablas() {
    let contenedor = document.getElementById("contenedorTabla");
    let numero = Number(document.getElementById("txtNumero").value);
    let contenido = "";

    for (let i = 1; i <= 10; i++) {
        contenido += "<tr><td>" + numero + " × " + i +
                     "</td><td>" + (numero * i) + "</td></tr>";
    }

    contenedor.innerHTML = contenido;
}