/**
 * 
 * Mostrar 5 veces la leyenda "Debo practicar programación", numeradas
 */

console.log("CON UN WHILE")
let cont = 1;
while (cont <= 5) {
    console.log(`${cont}) Debo practicar programación`);
    cont = cont + 1; // cont++; // cont += 1;
}

console.log("CON UN FOR")
for (let i = 1; i <= 5; i++) {
    console.log(`${i}) Debo practicar programación`);
}

/* 
    ESTO ESTÁ MAL
    cont = cont++
*/