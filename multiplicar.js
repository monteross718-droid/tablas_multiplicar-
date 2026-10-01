function generarTablas(){
    let contenedor = document.getElementById("contenedorTabla");
    contenedor.innerHTML = "<tr><td colspan='2'><h1>PROBANDO</h1></td></tr>";

    let contenido ="";
    for (let i=1; i<=10; i++){
        contenido += "<tr><td>5 × " + i + "</td><td>" + (5 * i) + "</td></tr>";
    }
    contenedor.innerHTML = contenido;
;}