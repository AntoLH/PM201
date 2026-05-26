function menuClientes(rl, productos, promociones, pedidos, regresarMenu) {

    console.log("\n=== MENU CLIENTES ===");
    console.log("1 = Ver productos");
    console.log("2 = Ver promociones");
    console.log("3 = Productos baratos");
    console.log("4 = Productos caros");
    console.log("5 = Bebidas");
    console.log("6 = Crear pedido");
    console.log("7 = Ver pedidos");
    console.log("8 = Regresar");

    rl.question("Seleccione una opcion: ", function(opcion) {

        switch(Number(opcion)) {

            case 1:

                // forEach()
                productos.forEach(function(producto) {

                    console.log(
                        producto.id +
                        " - " +
                        producto.nombre +
                        " - $" +
                        producto.precio
                    );

                });

                menuClientes(
                    rl,
                    productos,
                    promociones,
                    pedidos,
                    regresarMenu
                );

                break;

            case 2:

                console.table(promociones);

                menuClientes(
                    rl,
                    productos,
                    promociones,
                    pedidos,
                    regresarMenu
                );

                break;

            case 3:

                // filter()
                let baratos = productos.filter(
                    p => p.precio < 100
                );

                console.table(baratos);

                menuClientes(
                    rl,
                    productos,
                    promociones,
                    pedidos,
                    regresarMenu
                );

                break;

            case 4:

                let caros = productos.filter(
                    p => p.precio >= 100
                );

                console.table(caros);

                menuClientes(
                    rl,
                    productos,
                    promociones,
                    pedidos,
                    regresarMenu
                );

                break;

            case 5:

                let bebidas = productos.filter(
                    p => p.categoria === "Bebida"
                );

                console.table(bebidas);

                menuClientes(
                    rl,
                    productos,
                    promociones,
                    pedidos,
                    regresarMenu
                );

                break;

            case 6:

                rl.question("Ingrese ID del producto: ", function(idProducto) {

                    rl.question("Ingrese cantidad: ", function(cantidad) {

                        // find()
                        let producto = productos.find(
                            p => p.id === Number(idProducto)
                        );

                        if (producto) {

                            // destructuring
                            let { nombre, precio } = producto;

                            let subtotal = precio * Number(cantidad);
                            let iva = subtotal * 0.16;
                            let total = subtotal + iva;

                            pedidos.push({
                                producto: nombre,
                                cantidad: Number(cantidad),
                                subtotal: subtotal,
                                iva: iva,
                                total: total
                            });

                            console.log("Pedido creado");

                        } else {

                            console.log("Producto no encontrado");

                        }

                        menuClientes(
                            rl,
                            productos,
                            promociones,
                            pedidos,
                            regresarMenu
                        );
                    });
                });

                break;

            case 7:

                console.table(pedidos);

                menuClientes(
                    rl,
                    productos,
                    promociones,
                    pedidos,
                    regresarMenu
                );

                break;

            case 8:

                regresarMenu();

                break;

            default:

                console.log("Opcion no valida");

                menuClientes(
                    rl,
                    productos,
                    promociones,
                    pedidos,
                    regresarMenu
                );
        }
    });
}

module.exports = {
    menuClientes
};