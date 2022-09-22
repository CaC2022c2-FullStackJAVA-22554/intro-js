/*
    El usuario ingresa su edad. La PC le indica si pasa o no al casino.
    Upgrade: Si es menor, decirle cuántos años le faltan para poder entrar
    Upgrade: Si se ingresa una edad negativa, informar que no es válida
    Upgrade: Hay números mágicos en tu código :@
*/

let edad;
let difEdad;
const EDAD_MINIMA = 18;

edad = parseInt(prompt("Ingresá tu edad"));

/*
if (edad >= 0) {
    if (edad >= EDAD_MINIMA) {
        console.log("Sí, pasás al casino");
    } else {
        difEdad = EDAD_MINIMA - edad;
        console.log("No, no pasás. Sos menor de edad");
        //console.log("Te faltan " + difEdad + " años para entrar"); // Sintaxis vieja
        console.log(`Te faltan ${difEdad} años para entrar`); // Sintaxis moderna
    }
    console.log("Chau");
} else {
    console.log(`${edad} no es una edad válida`);
}*/
///////////////////////////////////////////////////////////////////////////////////////////////
if (edad <= 0) {
    console.log(`${edad} no es una edad válida`);
} else if (edad >= EDAD_MINIMA) {
    console.log("Sí, pasás al casino");
} else {
    difEdad = EDAD_MINIMA - edad;
    console.log("No, no pasás. Sos menor de edad");
    console.log(`Te faltan ${difEdad} años para entrar`); // Sintaxis moderna
}