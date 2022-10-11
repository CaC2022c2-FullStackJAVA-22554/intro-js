/*
    Las pruebas las hacemos sobre la consola del browser.
*/

// Obtener por ID (único elemento)
const laCaja =  document.getElementById("caja");

// Obtener por tipo de etiqueta (retorna un HTMLCollection)
const losLabels = document.getElementsByTagName("label");

// Obtener por clase (retorna un HTMLCollection)
const losVerdes = document.getElementsByClassName("verde");

// Usando selectores de CSS
const laCaja2 = document.querySelector("#caja"); // Por ID
const losLabels2 = document.querySelectorAll("label"); // Por tag
const losVerdes2 = document.querySelectorAll(".verde"); // Por class
const losVerdesDeLaCaja = document.querySelectorAll("#caja .verde"); // Combinados
const losParrafosDeLaCaja = document.querySelectorAll("#caja p"); // Combinados