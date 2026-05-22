console.log("Sistema de Caja");

// funcion para mostrar pedidos
function mostrarCaja(pedidos) {

    let totalAcumulado = 0;

    console.log("\nLista de pedidos:");

    console.table(pedidos);

    for (let i = 0; i < pedidos.length; i++) {

        totalAcumulado += pedidos[i].total;

    }

    console.log("Total acumulado: $" + totalAcumulado);
}

module.exports = {
    mostrarCaja
};