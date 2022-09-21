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
nombreDelUsuario = prompt("¿Cuál es tu nombre?"); 
anioDeNacimiento = prompt("¿En qué año naciste?");

// PROCESO
anioActual = new Date().getFullYear();
anioDeNacimiento = parseInt(anioDeNacimiento);
edad = anioActual - anioDeNacimiento;

// SALIDA(S)
console.log("Hola " + nombreDelUsuario + ", tenés " + edad + " años.");