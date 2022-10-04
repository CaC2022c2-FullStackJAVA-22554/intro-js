// DEFINICIONES DE FUNCIONES

function mostrarArray(unArray) {
  for (let i = 0; i < unArray.length; i++) {
    console.log(unArray[i]);
  }
}

function calcularPromedio(unArrayDeNumeros) {
  return sumatoria(unArrayDeNumeros) / unArrayDeNumeros.length;
}

function sumatoria(unArrayDeNumeros) {
  let acu = 0;
  for (let i = 0; i < unArrayDeNumeros.length; i++) {
    acu = acu + unArrayDeNumeros[i];
  }
  return acu;
}

function leerNumeroPositivo(mensaje) {
  let numero = parseFloat(prompt(mensaje));
  while (numero <= 0) {
    numero = parseFloat(prompt(`ERROR. ${mensaje}`));
  }
  return numero;
}

function cargarArrayConNumerosPositivos(unArrayDeNumeros, mensaje) {
  for (let i = 0; i < unArrayDeNumeros.length; i++) {
    unArrayDeNumeros[i] = leerNumeroPositivo(`${mensaje} nº ${i+1}`);
  }
}

function mostrarValoresMayoresA(unArrayDeNumeros, valorASuperar) {
  for (let i = 0; i < unArrayDeNumeros.length; i++) {
    const valor = unArrayDeNumeros[i];
    if(valor > valorASuperar) {
      console.log(valor);
    }
  }
}

/**
 * El usuario ingresa cant edades. (Él establece la cant). La PC muestra las edades que superaron al promedio
 */
// PROGRAMA PRINCIPAL

let cant = leerNumeroPositivo("Cuántas edades querés?");
let edades = new Array(cant);
let prom;

cargarArrayConNumerosPositivos(edades, "Ingresá la edad");
prom = calcularPromedio(edades);
mostrarValoresMayoresA(edades, prom);
