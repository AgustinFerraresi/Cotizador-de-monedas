"use strict";

async function llamadaApi() {
    try {
        let response = await fetch("https://dolarapi.com/v1/dolares");
        datosApi = await response.json(); //en esta variable se guardan los datos de los dolares
    } catch (error) {
        console.error(`Error: ${error}`);
    }

    try {
        let response = await fetch("https://dolarapi.com/v1/cotizaciones/eur");
        euro = await response.json(); //en esta variable se guardan los datos del euro
    } catch (error) {
        console.error(`Error: ${error}`);
    }

    try {
        let response = await fetch("https://dolarapi.com/v1/cotizaciones/brl");
        real = await response.json(); //en esta variable se guardan los datos de los reales
    } catch (error) {
        console.error(`Error: ${error}`);
    }

    try {
        let response = await fetch("https://dolarapi.com/v1/cotizaciones/clp");
        pesoChileno = await response.json(); //en esta variable se guardan los datos del peso chileno
    } catch (error) {
        console.error(`Error: ${error}`);
    }

    try {
        let response = await fetch("https://dolarapi.com/v1/cotizaciones/uyu");
        pesoUruguayo = await response.json(); //en esta variable se guardan los datos del peso uruguayo
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}