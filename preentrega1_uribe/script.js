function calcularCotizacion() {
    // Obtener los valores ingresados por el usuario
    const servicio1 = document.getElementById("servicio1").checked;
    const servicio2 = document.getElementById("servicio2").checked;
    const servicio3 = document.getElementById("servicio3").checked;

    const montoTotal = parseFloat(document.getElementById("montoTotal").value);
    const cuotas = parseInt(document.getElementById("cuotas").value);

    const precioBase = parseFloat(document.getElementById("precioBase").value);
    const impuestos = parseFloat(document.getElementById("impuestos").value);
    const descuentos = parseFloat(document.getElementById("descuentos").value);

    // Calcular el costo total de los servicios seleccionados
    let costoTotal = 0;

    if (servicio1) {
        costoTotal += 50;
    }

    if (servicio2) {
        costoTotal += 75;
    }

    if (servicio3) {
        costoTotal += 100;
    }

    // Calcular el costo total con pagos en cuotas
    let cuotaMensual = 0;

    if (montoTotal > 0 && cuotas > 0) {
        cuotaMensual = montoTotal / cuotas;
    }

    // Calcular el valor final del producto
    let valorFinal = precioBase;

    if (impuestos > 0) {
        valorFinal += (precioBase * impuestos) / 100;
    }

    if (descuentos > 0) {
        valorFinal -= (precioBase * descuentos) / 100;
    }

    // Mostrar los resultados
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
      <p>Costo Total de los Servicios Seleccionados: $${costoTotal}</p>
      <p>Cuota Mensual: $${cuotaMensual.toFixed(2)}</p>
      <p>Valor Final del Producto: $${valorFinal.toFixed(2)}</p>
    `;
}