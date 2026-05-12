/* Js del lado del servidor */

console.log("Hola Mundo JS con node")

/* calculo */
let edad1= 12
let edad2= 34 

console.log("Edad promedio: ")
console.log((edad1+edad2)/2)

/* medir el tiempo de proceso */

console.time("miProceso")

for(let i = 0; i<100000000; i++)
{

}

console.timeEnd("miProceso")

/* Objetos tipo tabla */

let usuarios= [
    {nombre:"ivan", edad: 38},
    {nombre:"isay", edad: 38},
];

console.table(usuarios)