function menuCocina(
    rl,
    inventario,
    promociones,
    regresarMenu
) {

    console.log("\n=== MENU COCINA ===");
    console.log("1.- Agregar producto");
    console.log("2.- Listar inventario");
    console.log("3.- Editar producto");
    console.log("4.- Borrar producto");
    console.log("5.- Buscar postres");
    console.log("6.- Ver promociones");
    console.log("7.- Regresar");

    rl.question("Que opcion quieres? ", function(opcion) {

        if (opcion == "1") {

            rl.question("Nombre: ", function(nombreItem) {

                rl.question("Cantidad: ", function(cantidadItem) {

                    rl.question("Categoria: ", function(categoriaItem) {

                        var nuevoProducto = {
                            id: inventario.length + 1,
                            nombre: nombreItem,
                            cantidad: parseInt(cantidadItem),
                            categoria: categoriaItem
                        };

                        inventario.push(nuevoProducto);

                        console.log("Producto guardado");

                        menuCocina(
                            rl,
                            inventario,
                            promociones,
                            regresarMenu
                        );
                    });
                });
            });
        }

        else if (opcion == "2") {

            console.table(inventario);

            menuCocina(
                rl,
                inventario,
                promociones,
                regresarMenu
            );
        }

        else if (opcion == "3") {

            rl.question("Pon el id que vas a editar: ", function(idEdit) {

                rl.question("Pon la nueva cantidad: ", function(nuevaCant) {

                    for (var i = 0; i < inventario.length; i++) {

                        if (inventario[i].id == idEdit) {

                            inventario[i].cantidad = parseInt(nuevaCant);

                        }
                    }

                    console.log("Ya se edito");

                    menuCocina(
                        rl,
                        inventario,
                        promociones,
                        regresarMenu
                    );
                });
            });
        }

        else if (opcion == "4") {

            rl.question("Pon el id que vas a borrar: ", function(idBorrar) {

                let nuevoInventario = inventario.filter(
                    item => item.id != idBorrar
                );

                inventario.length = 0;

                nuevoInventario.forEach(function(item) {

                    inventario.push(item);

                });

                console.log("Ya se borro");

                menuCocina(
                    rl,
                    inventario,
                    promociones,
                    regresarMenu
                );
            });
        }

        else if (opcion == "5") {

            let postres = inventario.filter(
                item => item.categoria === "Postre"
            );

            console.table(postres);

            menuCocina(
                rl,
                inventario,
                promociones,
                regresarMenu
            );
        }

        else if (opcion == "6") {

            console.table(promociones);

            menuCocina(
                rl,
                inventario,
                promociones,
                regresarMenu
            );
        }

        else if (opcion == "7") {

            regresarMenu();
        }

        else {

            console.log("Esa opcion no existe");

            menuCocina(
                rl,
                inventario,
                promociones,
                regresarMenu
            );
        }
    });
}

module.exports = {
    menuCocina
};