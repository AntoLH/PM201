function menuCocina(rl, inventario, regresarMenu) {

    console.log("\n |-Menu Cocina-|");
    console.log("1.-Agregar");
    console.log("2.-Listar");
    console.log("3.-Editar");
    console.log("4.-Borrar");
    console.log("5.-Regresar");

    rl.question("Que opcion quieres? ", function(opcion) {

        if (opcion == "1") {

            rl.question("Nombre: ", function(nombreItem) {

                rl.question("Cantidad: ", function(cantidadItem) {

                    var nuevoProducto = {
                        id: inventario.length + 1,
                        nombre: nombreItem,
                        cantidad: parseInt(cantidadItem)
                    };

                    inventario.push(nuevoProducto);

                    console.log("Producto guardado");

                    menuCocina(rl, inventario, regresarMenu);
                });
            });
        }

        else if (opcion == "2") {

            console.table(inventario);

            menuCocina(rl, inventario, regresarMenu);
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

                    menuCocina(rl, inventario, regresarMenu);
                });
            });
        }

        else if (opcion == "4") {

            rl.question("Pon el id que vas a borrar: ", function(idBorrar) {

                var nuevoInventario = [];

                for (var i = 0; i < inventario.length; i++) {

                    if (inventario[i].id != idBorrar) {

                        nuevoInventario.push(inventario[i]);

                    }
                }

                inventario.length = 0;

                for (var i = 0; i < nuevoInventario.length; i++) {

                    inventario.push(nuevoInventario[i]);

                }

                console.log("Ya se borro");

                menuCocina(rl, inventario, regresarMenu);
            });
        }

        else if (opcion == "5") {

            regresarMenu();
        }

        else {

            console.log("Esa opcion no existe");

            menuCocina(rl, inventario, regresarMenu);
        }
    });
}

module.exports = {
    menuCocina
};