/*
    7) Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que permita ingresar cant números reales, correspondientes a las estaturas de un equipo de jugadores de baloncesto (en metros). La computadora debe mostrar la estatura promedio.
 */

/*
do { // 1..N
    cant = parseInt(prompt("¿Cuántas estaturas vas a ingresar?"));
} while(cant <= 0);
*/


let estatura;
let promedio;
let sumEstaturas = 0;

let cant = parseInt(prompt("¿Cuántas estaturas vas a ingresar?"));
while(cant <= 0) { // 0..N
    cant = parseInt(prompt("ERROR. ¿Cuántas estaturas vas a ingresar?"));
}

for (let i = 1; i <= cant; i++) {
    estatura = parseFloat(prompt(`Ingrese la estatura Nº ${i}`));
    while(estatura <= 0) { // 0..N
        estatura = parseFloat(prompt(`ERROR. Ingrese la estatura Nº ${i}`));
    }
    sumEstaturas = sumEstaturas + estatura;
}

promedio = sumEstaturas / cant;

console.log(`La estatura promedio es ${promedio} m.`)