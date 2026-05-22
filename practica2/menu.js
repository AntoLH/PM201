const readline = require("readline");

const { menuClientes } = require("./clientes");
const { menuCocina } = require("./cocina");
const { mostrarCaja } = require("./caja");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// DATOS COMPARTIDOS
let pedidos = [];

let inventario = [];

const productos = [
    { id: 1, nombre: "Hamburguesa", precio: 120 },
    { id: 2, nombre: "Pizza", precio: 250 },
    { id: 3, nombre: "Refresco", precio: 35 }
];

// MENU PRINCIPAL
function menuPrincipal() {

    console.log("\n=== MENU PRINCIPAL ===");
    console.log("1 = Clientes");
    console.log("2 = Cocina");
    console.log("3 = Caja");
    console.log("4 = Salir");

    rl.question("Seleccione una opcion: ", function(opcion) {

        switch(Number(opcion)) {

            case 1:

                menuClientes(
                    rl,
                    productos,
                    pedidos,
                    menuPrincipal
                );

                break;

            case 2:

                menuCocina(
                    rl,
                    inventario,
                    menuPrincipal
                );

                break;

            case 3:

                mostrarCaja(pedidos);

                menuPrincipal();

                break;

            case 4:

                console.log("Programa terminado");

                rl.close();

                break;

            default:

                console.log("Opcion no valida");

                menuPrincipal();
        }
    });
}
menuPrincipal();