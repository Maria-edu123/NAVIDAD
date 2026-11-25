function mostrarInfo(idPersonaje) {
    var caja = document.getElementById(idPersonaje);

    if (caja.style.display === "block") {
        caja.style.display = "none";
    } else {
        caja.style.display = "block";
    }
}

var regaloElegido = "";

        function elegirOpcion(nombreRegalo) {
            regaloElegido = nombreRegalo;
            document.getElementById("cajaRegalo").value = regaloElegido;
        }

        function enviarRegalo() {
            var caja = document.getElementById("cajaRegalo");

            if (caja.value === "") {
                alert("Por favor, elige o escribe un regalo.");
                return;
            }

            alert("ENVIADO: " + caja.value);
            regaloElegido = "";
            caja.value = "";
        }

function calcularTodo() {
    var pavo = document.getElementById("cantPavo").value * 130;
    var lechon = document.getElementById("cantLechon").value * 30;
    var paneton = document.getElementById("cantPaneton").value * 35;
    var chocolate = document.getElementById("cantChocolate").value * 15;
    var ensalada = document.getElementById("cantEnsalada").value * 30;

    var total = pavo + lechon + paneton + chocolate + ensalada;
    document.getElementById("montoTotal").value = total;
}

function realizarPedido() {
    var total = document.getElementById("montoTotal").value;

    if (total === "0" || total === "") {
        alert("Por favor, coloca la cantidad de al menos un plato.");
        return;
    }

    alert("¡PEDIDO REALIZADO CON ÉXITO!\n\nMonto total de todo tu pedido: Bs." + total);

    document.getElementById("cantPavo").value = "0";
    document.getElementById("cantLechon").value = "0";
    document.getElementById("cantPaneton").value = "0";
    document.getElementById("cantChocolate").value = "0";
    document.getElementById("cantEnsalada").value = "0";
    document.getElementById("montoTotal").value = "0";
}