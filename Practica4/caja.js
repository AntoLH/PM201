console.log("Sistema de Caja");

// funcion para mostrar pedidos
function mostrarCaja(pedidos) {

    console.log("\n=== CAJA ===");

    console.table(pedidos);

    // reduce()
    let subtotalGeneral = pedidos.reduce(function(acumulador, pedido) {
        return acumulador + pedido.subtotal;
    }, 0);

    let ivaGeneral = pedidos.reduce(function(acumulador, pedido) {
        return acumulador + pedido.iva;
    }, 0);

    let totalGeneral = pedidos.reduce(function(acumulador, pedido) {
        return acumulador + pedido.total;
    }, 0);

    console.log("Subtotal: $" + subtotalGeneral);
    console.log("IVA: $" + ivaGeneral);
    console.log("Total: $" + totalGeneral);
}

module.exports = {
    mostrarCaja
};