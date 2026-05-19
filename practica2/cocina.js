const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var inventario = [];
var idActual = 1;

// Funcion que se llama a si misma para simular un ciclo
function mostrarMenu() {
    console.log("\n |-Menu-|");
    console.log("1.-Agregar");
    console.log("2.-Listar");
    console.log("3.-Editar");
    console.log("4.-Borrar");
    console.log("5.-Salir");
    
    rl.question("Que opcion quieres? ", function(opcion) {
        
        if (opcion == "1") {
            rl.question("Nombre: ", function(nombreItem) {
                rl.question("Cantidad: ", function(cantidadItem) {
                    
                    var nuevoProducto = {
                        id: idActual,
                        nombre: nombreItem,
                        cantidad: parseInt(cantidadItem)
                    };
                    
                    inventario.push(nuevoProducto);
                    idActual = idActual + 1;
                    console.log("Producto guardado");
                    
                    mostrarMenu(); // Volver al menu
                });
            });
        } 
        
        else if (opcion == "2") {
            // Truco para que console.table no muestre el index del array
            var tablaSinIndex = {};
            
            for (var i = 0; i < inventario.length; i = i + 1) {
                var item = inventario[i];
                // Usamos el id como la llave del objeto
                tablaSinIndex[item.id] = { 
                    nombre: item.nombre, 
                    cantidad: item.cantidad 
                };
            }
            
            console.table(tablaSinIndex);
            mostrarMenu();
        } 
        
        else if (opcion == "3") {
            rl.question("Pon el id que vas a editar: ", function(idEdit) {
                rl.question("Pon la nueva cantidad: ", function(nuevaCant) {
                    
                    // Ciclo for a la antigua para buscar
                    for (var i = 0; i < inventario.length; i = i + 1) {
                        if (inventario[i].id == idEdit) {
                            inventario[i].cantidad = parseInt(nuevaCant);
                            console.log("Ya se edito");
                        }
                    }
                    mostrarMenu();
                });
            });
        } 
        
        else if (opcion == "4") {
            rl.question("Pon el id que vas a borrar: ", function(idBorrar) {
                
                // Mala practica: crear un array nuevo en vez de mutar o filtrar bien
                var nuevoInventario = [];
                for (var i = 0; i < inventario.length; i = i + 1) {
                    if (inventario[i].id != idBorrar) {
                        nuevoInventario.push(inventario[i]);
                    }
                }
                inventario = nuevoInventario;
                console.log("Ya se borro");
                
                mostrarMenu();
            });
        } 
        
        else if (opcion == "5") {
            console.log("Adios bye bye");
            rl.close();
        } 
        
        else {
            console.log("Esa opcion no existe");
            mostrarMenu();
        }
    });
}

// Arrancar el programa
mostrarMenu();