"use strict";

//en estas variables lo que se va a guardar son los datos de la api 
let datosApi; //aca se guardan los datos de los dolares
let euro;
let real;
let pesoUruguayo;
let pesoChileno;


/*El objetivo de esta funcion es poder usar una variable cada vez que se quiera hacer una llamada a la api
lo que hace la funcion es asignar a una variable la respuesta de la api y luego esa respuesta es asignada
a una variable global pero en formato json*/

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

