/* 
    Pedir al usuario nombre y en qué año nació.
    La máquina procesa y luego lo saluda y
    le indica cuántos años tiene.
*/

let nombreDelUsuario;
let anioDeNacimiento;
let edad;
let anioActual;

// ENTRADA
/* La próxima clase levantaremos los datos del form  */
nombreDelUsuario = "Juan"; // HARDCODEADO
anioDeNacimiento = 2000; // HARDCODEADO

anioActual = new Date().getFullYear();

// PROCESO
edad = anioActual - anioDeNacimiento;

// SALIDA(S)
console.log("Hola " + nombreDelUsuario + ", tenés " + edad + " años.");