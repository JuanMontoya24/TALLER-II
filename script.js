var ventas = [];

function agregarVenta() {
    var producto = document.getElementById("producto").value;
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var valor = parseInt(document.getElementById("valor").value);
    if (producto && cantidad && valor) {
    ventas.push({producto: producto, cantidad: cantidad, valor: valor});
    mostrarVentas();
    //  actualizarValorTotal();
    document.getElementById("valorTotal").innerHTML = "$";
    }
}

function mostrarVentas() {
    var tabla = document.getElementById("tablaVentas");
    tabla.innerHTML = "";
    for (var i = 0; i < ventas.length; i++) {
    var venta = ventas[i];
    var valorTotal = venta.cantidad * venta.valor;
    var fila = "<tr><td>" + venta.producto + "</td><td>" + venta.cantidad + "</td><td>" + venta.valor + "</td><td>" + valorTotal + "</td></tr>";
    tabla.innerHTML += fila;
    }
}

function actualizarValorTotal() {
    var valorTotal = 0;
    for (var i = 0; i < ventas.length; i++) {
    var venta = ventas[i];
    var valorTotalVenta = venta.cantidad * venta.valor;
    valorTotal += valorTotalVenta;
    }
    document.getElementById("valorTotal").innerHTML = "$" + valorTotal;
}

function calcular() {
    var num1 = parseFloat($('#num1').val());
    var num2 = parseFloat($('#num2').val());
    var num3 = parseFloat($('#num3').val());
    var num4 = parseFloat($('#num4').val());

    // Verificar que no haya números iguales
    if (num1 === num2 || num1 === num3 || num1 === num4 || num2 === num3 || num2 === num4 || num3 === num4) {
        alert("Los números no pueden ser iguales.");
        return;
    }

    // Calcular el número mayor y el número menor
    var numeros = [num1, num2, num3, num4];
    var mayor = Math.max.apply(null, numeros);
    var menor = Math.min.apply(null, numeros);

    // Eliminar el número mayor del arreglo
    numeros.splice(numeros.indexOf(mayor), 1);

    // Mostrar el resultado
    $('#resultado').html("<h5>El número mayor es " + mayor + "</h5> <h5>el número menor es " + menor + "</h5> <h5>el arreglo sin el número mayor es [" + numeros.join(", ") + "].</h5>");
}
