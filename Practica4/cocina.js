
function hacerCafe() {
    return new Promise(function(resolve, reject) {
        
        setTimeout(function() {
           
            let probabilidad = Math.random();

            if (probabilidad < 0.5) {
                // 50% de probabilidad de que salga todo bien
                resolve("El cafe esta listo para el cliente.");
            } else if (probabilidad < 0.75) {
                // 25% de probabilidad de que falte algo
                reject("Falta ingrediente: Nos quedamos sin cafe o sin agua.");
            } else {
                // 25% de probabilidad de error grave
                reject("Error en cocina: La maquina hizo corto o se quemo la resistencia.");
            }
        }, 2500);
    });
}

function menuCocina(
    rl,
    inventario,
    promociones,
    regresarMenu
) {

    console.log("\n| MENU COCINA |");
    console.log("1.- Agregar producto");
    console.log("2.- Listar inventario");
    console.log("3.- Editar producto");
    console.log("4.- Borrar producto");
    console.log("5.- Buscar postres");
    console.log("6.- Ver promociones");
    console.log("7.- Regresar");
    console.log("8.- Preparacion de cafe");

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

        // Promesas 
        else if (opcion == "8") {
            
            console.log("\nRecibiendo orden de cafe... preparandolo, aguanta un rato.");
            
            hacerCafe()
                .then(function(mensajeExito) {
                    console.log("\n[EXITO] " + mensajeExito);
                })
                .catch(function(mensajeError) {
                    console.log("\n[PROBLEMA] " + mensajeError);
                })
                .finally(function() {
                    menuCocina(rl, inventario, promociones, regresarMenu);
                });
        }
        // 

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