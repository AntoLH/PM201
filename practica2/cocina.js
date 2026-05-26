function menuCocina(rl, inventario, regresarMenu) {

    console.log("\n |-Menu Cocina-|");
    console.log("1.-Agregar");
    console.log("2.-Listar");
    console.log("3.-Editar");
    console.log("4.-Borrar");
    console.log("5.-Buscar");
    console.log("6.-Regresar");

    rl.question("Que opcion quieres? ", function(opcion) {

        if (opcion == "1") {
            // Anidamos las preguntas para obtener todos los datos necesarios para el filtro
            rl.question("Nombre: ", function(nombreItem) {
                rl.question("Cantidad: ", function(cantidadItem) {
                    rl.question("Precio: ", function(precioItem) {
                        rl.question("Categoria (bebida/postre/otro): ", function(categoriaItem) {
                            
                            var nuevoProducto = {
                                // Usamos reduce para evitar IDs duplicados si se borran elementos
                                id: inventario.reduce((max, p) => p.id > max ? p.id : max, 0) + 1,
                                nombre: nombreItem,
                                cantidad: parseInt(cantidadItem),
                                precio: parseFloat(precioItem),
                                categoria: categoriaItem.toLowerCase()
                            };

                            inventario.push(nuevoProducto);
                            console.log("Producto guardado con exito");

                            menuCocina(rl, inventario, regresarMenu);
                        });
                    });
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
                    
                    // APLICANDO find(): Buscamos directamente el objeto a modificar
                    let productoAEditar = inventario.find(p => p.id === parseInt(idEdit));

                    if (productoAEditar) {
                        productoAEditar.cantidad = parseInt(nuevaCant);
                        console.log("Ya se edito");
                    } else {
                        console.log("No se encontro un producto con ese ID");
                    }

                    menuCocina(rl, inventario, regresarMenu);
                });
            });
        }

        else if (opcion == "4") {
            rl.question("Pon el id que vas a borrar: ", function(idBorrar) {
                
                // APLICANDO filter(): Guardamos todos los que NO sean el ID a borrar
                let sobrevivientes = inventario.filter(p => p.id !== parseInt(idBorrar));

                // Vaciamos el arreglo original sin romper la referencia en memoria
                inventario.length = 0;

                // Rellenamos con los que sobrevivieron al filtro
                for (var i = 0; i < sobrevivientes.length; i++) {
                    inventario.push(sobrevivientes[i]);
                }

                console.log("Ya se borro");
                menuCocina(rl, inventario, regresarMenu);
            });
        }

        else if (opcion == "5") {
            // INTEGRACIÓN DEL OBJETIVO DE LA IMAGEN
            console.log("\n--- OBJETIVO BUSCAR ---");
            console.log("1.- Produtos Baratos");
            console.log("2.- productos caros");
            console.log("3.- bebidas");
            console.log("4.- postres");

            rl.question("Elige un filtro: ", function(filtro) {
                let resultados = [];

                // APLICANDO filter() para cada caso de búsqueda
                if (filtro == "1") {
                    resultados = inventario.filter(p => p.precio < 50);
                } 
                else if (filtro == "2") {
                    resultados = inventario.filter(p => p.precio >= 50);
                } 
                else if (filtro == "3") {
                    resultados = inventario.filter(p => p.categoria === "bebida" || p.categoria === "bebidas");
                } 
                else if (filtro == "4") {
                    resultados = inventario.filter(p => p.categoria === "postre" || p.categoria === "postres");
                } 
                else {
                    console.log("Filtro no valido");
                }

                // Validación para imprimir la tabla solo si se encontraron datos
                if (resultados.length > 0) {
                    console.table(resultados);
                } else if (filtro >= "1" && filtro <= "4") {
                    console.log("No se encontraron resultados para esta busqueda.");
                }

                menuCocina(rl, inventario, regresarMenu);
            });
        }

        else if (opcion == "6") {
            // Cambiamos al número 6 para regresar, ya que el 5 ahora es buscar
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