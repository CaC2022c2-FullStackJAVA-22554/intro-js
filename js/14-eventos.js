const btnProbar = document.getElementById("btnProbar");
const pResultado = document.getElementById("resultado");

function saludar() {
    pResultado.innerHTML = "Hola";
}

btnProbar.onclick = saludar;

///////////////////////////////////////////////////////////////////////////

const h2Conteo = document.getElementById("conteo");
const btnDecrementar = document.getElementById("btnDecrementar");
const btnReset = document.getElementById("btnReset");
const btnIncrementar = document.getElementById("btnIncrementar");
let contador = 0;

function cambiarValor(valor) {
    contador = valor;
    h2Conteo.innerHTML = valor;
}

function incrementar() {
    cambiarValor(contador + 1);
}

function decrementar() {
    cambiarValor(contador - 1);
}

function reset() {
    cambiarValor(0);
}


function cambiarColor(event) {
    // event: Parámetro con la info del evento (lo envía JS)
    // target: Es una propiedad del evento, hace referencia al componente que lo originó.
    event.target.style.background = "pink";
}

btnIncrementar.onmouseover = cambiarColor;
btnDecrementar.onmouseover = cambiarColor;
btnReset.onmouseover = cambiarColor;

btnIncrementar.onclick = incrementar;
btnDecrementar.onclick = decrementar;
btnReset.onclick = reset;

///////////////////////////////////////////////////////////////////////////////////////////

const inputNombre = document.getElementById("inputNombre");
const pLeyenda = document.getElementById("leyenda");

function procesarNombre() {
    const elNombre = inputNombre.value;
    const saludo = `Hola ${elNombre}`;
    const longitudStr = `Cant de caracteres: ${elNombre.length}`;
    pLeyenda.innerHTML = `${saludo}. ${longitudStr}`;
}

inputNombre.onkeyup = procesarNombre;
