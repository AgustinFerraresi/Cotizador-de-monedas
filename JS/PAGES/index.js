"use strict";

let select = document.getElementById("selector-monedas");
let listaMonedas = document.getElementById("lista-monedas")
//console.log(select.value);

let datosApi;
let euro;
let real;
let pesoUruguayo;
let pesoChileno;

/*
El objetivo de esta funcion es poder usar una variable cada vez que se quiera hacer una llamada a la api
lo que hace la funcion es asignar a una variable la respuesta de la api y luego esa respuesta es asignada
a una variable global pero en formato json
*/
async function llamadaApi() {
    try {
        let response = await fetch("https://dolarapi.com/v1/dolares");
        datosApi = await response.json();
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

async function llamadaEuro() {
    try {
        let response = await fetch("https://dolarapi.com/v1/cotizaciones/eur");
        euro = await response.json();
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

async function llamadaReal() {
    try {
        let response = await fetch("https://dolarapi.com/v1/cotizaciones/brl");
        real = await response.json();
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

async function llamadaPesoChileno() {
    try {
        let response = await fetch("https://dolarapi.com/v1/cotizaciones/clp");
        pesoChileno = await response.json();
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

async function llamadaPesoUruguayo() {
    try {
        let response = await fetch("https://dolarapi.com/v1/cotizaciones/uyu");
        pesoUruguayo = await response.json();
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}


async function main() {
    await llamadaApi();
    await llamadaEuro();
    await llamadaReal();
    await llamadaPesoChileno();
    await llamadaPesoUruguayo();

    console.log(datosApi);
    console.log(euro);
    console.log(real);
    console.log(pesoChileno);
    console.log(pesoUruguayo);

    if (select.value == "todas") {
        let i = 0;

        //-----------------------agrego todos los dolares-----------------------
        while (i < datosApi.length) {

            let nuevoItemDolar = document.createElement("li");
            nuevoItemDolar.innerHTML = 
            `
            <div>
                <h4>${datosApi[i].casa}</h4> <span class="compra">COMPRA $${datosApi[i].compra}</span><span class="venta">VENTA $${datosApi[i].venta}</span>
                <input type="checkbox">
            </div>
            `
            listaMonedas.appendChild(nuevoItemDolar); 
            i = i + 1;
        }

        //-----------------------agrego el euro-----------------------
        let nuevoItemEuro = document.createElement("li");
        nuevoItemEuro.innerHTML = 
        `
        <div>
            <h4>${euro.nombre}</h4> <span class="compra">COMPRA $${euro.compra}</span><span class="venta">VENTA $${euro.venta}</span>
            <input type="checkbox">
        </div>
        `
        listaMonedas.appendChild(nuevoItemEuro);

        //-----------------------agrego el real brasileño-----------------------
        let nuevoItemReal = document.createElement("li");
        nuevoItemReal.innerHTML = 
        `
        <div>
            <h4>${real.nombre}</h4> <span class="compra">COMPRA $${real.compra}</span><span class="venta">VENTA $${real.venta}</span>
            <input type="checkbox">
        </div>
        `
        listaMonedas.appendChild(nuevoItemReal);

        //-----------------------agrego el peso chileno-----------------------
        let nuevoItemPesoChileno = document.createElement("li");
        nuevoItemPesoChileno.innerHTML = 
        `
        <div>
            <h4>${pesoChileno.nombre}</h4> <span class="compra">COMPRA $${pesoChileno.compra}</span><span class="venta">VENTA $${pesoChileno.venta}</span>
            <input type="checkbox">
        </div>
        `
        listaMonedas.appendChild(nuevoItemPesoChileno);

        //-----------------------agrego el peso uruguayo-----------------------
        let nuevoItemPesoUruguayo = document.createElement("li");
        nuevoItemPesoUruguayo.innerHTML = 
        `
        <div>
            <h4>${pesoUruguayo.nombre}</h4> <span class="compra">COMPRA $${pesoUruguayo.compra}</span><span class="venta">VENTA $${pesoUruguayo.venta}</span>
            <input type="checkbox">
        </div>
        `
        listaMonedas.appendChild(nuevoItemPesoUruguayo);
    }
}

select.onchange = main();

