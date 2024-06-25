"use strict";


document.addEventListener("DOMContentLoaded", async function() {
    await llamadaApi();
});


let storageEuro = localStorage.getItem("euro");
let storagePesoChileno = localStorage.getItem("pesoChileno");
let storagePesoUruguayo = localStorage.getItem("pesoUruguayo");
let storageReal = localStorage.getItem("real");

let dolaresFav = [];
let favs = [];

for (let i = 0; i < localStorage.length; i++) {

    let dolar = localStorage.getItem(`${i}`);
    let dolarParseado = JSON.parse(dolar);

    if (dolarParseado && dolarParseado.value == true) {
        dolaresFav.push(dolarParseado);
    }
}

function verificarFav(moneda) {
    let monedaParse = JSON.parse(moneda);

    if (monedaParse && monedaParse.value == true) {
        favs.push(monedaParse);
    }
}

verificarFav(storageEuro);
verificarFav(storagePesoChileno);
verificarFav(storagePesoUruguayo);
verificarFav(storageReal);




//CREO LOS CONTENEDORES PARA LAS MONEDAS FAVS

