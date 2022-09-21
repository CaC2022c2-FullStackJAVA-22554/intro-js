/* 
    Pedir al usuario nombre y en qué año nació.
    La máquina procesa y luego lo saluda y
    le indica cuántos años tiene.
*/
function procesar(e) {
    e.preventDefault();
    let nombreDelUsuario;
    let anioDeNacimiento;
    let edad;
    let anioActual;

    // ENTRADA
    nombreDelUsuario = document.getElementById("inputNombre").value; 
    anioDeNacimiento = document.getElementById("inputFechaNac").value;

    // PROCESO
    anioActual = new Date().getFullYear();
    anioDeNacimiento = parseInt(anioDeNacimiento);
    edad = anioActual - anioDeNacimiento;

    // SALIDA(S)
    console.log("Hola " + nombreDelUsuario + ", tenés " + edad + " años.");
}

document.getElementById("elForm").onsubmit = procesar;