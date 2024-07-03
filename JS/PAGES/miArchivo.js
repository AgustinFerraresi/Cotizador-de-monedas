"use strict";

let datos = JSON.parse(localStorage.getItem("monedas")); //es un array
let favs = [] //aca se guardaran las cotizaciones que esten marcadas como favoritas
let listaMonedas = document.getElementById("lista-monedas");
let contenidoPrincipal = document.getElementById("contenido-principal");


datos.forEach(cotizacion => {
    if (cotizacion.estado) {
        favs.push(cotizacion);
    }
});

//convierto una fecha en formato 'YYYY-MM-DD' a un objeto Date
function convertirAFecha(fechaString) {
    return new Date(fechaString);
}

/*
La función retorna la diferencia en milisegundos entre las dos fechas. Esto es lo que determina el orden de los elementos a y b
Si a.fecha es anterior a b.fecha, la diferencia va ser negativa, osea que A va antes que B
Si a.fecha es posterior a b.fecha, la diferencia va a ser positiva lo que significa que A debería estas después que B
Si a.fecha es igual a b.fecha, la diferencia será cero, lo que significa que el orden de A y B no cambia.
*/
function compararPorFecha(a, b) {
    return convertirAFecha(a.fecha) - convertirAFecha(b.fecha);
}

/*aca lo que hago es usar la funcion sort en el array monedas para ordenarlo y le paso como parametro la funcion 
de comparar fechas esta funcion recibe dos parametros pero solo se pasa uno, lo que pasa es que aca el
metodo sort ya sabe que tiene que pasar dos parametros del array SE ORDENARAN DE MENOR A MAYOR*/
favs.sort(compararPorFecha);




favs.forEach(cotizacion => {
    if (favs) {
        let nuevoItem = document.createElement("li");

        //recorto el nombre de contado con liquidacion porque al ser muy largo hace que el contenedor tenga un tamaño diferente al resto
        if (cotizacion.nombre == "Contado con liquidación") {

            //tener en cuenta que el metodo toFixed devuelve un string

            nuevoItem.innerHTML =
            `
            <div>
                <h4>${cotizacion.nombre.slice(0,17)}</h4> <span class="compra">compra $${cotizacion.compra}</span><span class="venta">venta $${cotizacion.venta}</span>
                <button class="eliminar" id="${cotizacion.id}" fecha="${cotizacion.fecha}"><img src="..//IMG/trash-white.png" alt=""></button>
                <p>${cotizacion.fecha.slice(0,10)}</p>
            </div>
            `
  
        } else {
            nuevoItem.innerHTML =
            `
            <div>
                <h4>${cotizacion.nombre}</h4> <span class="compra">compra $${cotizacion.compra}</span><span class="venta">venta $${cotizacion.venta}</span>
                <button class="eliminar" id="${cotizacion.id}" fecha="${cotizacion.fecha}"><img src="..//IMG/trash-white.png" alt=""></button>
                <p>${cotizacion.fecha.slice(0,10)}</p>
            </div>
            `

        }

        listaMonedas.appendChild(nuevoItem);

    } else {
        let mensaje = document.createElement("p");

        mensaje.innerHTML = "no hay cotizaciones guardadas";
        contenidoPrincipal.appendChild(mensaje);
    }
});


function eliminar() {
    // trae el elemento li mas cercano al botón que fue clickeado
    let elementoLi = this.closest('li');

    if (elementoLi) {
        // cambia el display del li a none
        elementoLi.style.display = 'none';

        // Encuentra el índice de la cotización correspondiente en el array favs
        
        let idBoton = this.id;
        let botonFecha = this.fecha
        console.log(botonFecha)

        let indice = favs.findIndex(cotizacion => cotizacion.id == idBoton && cotizacion.fecha == botonFecha); //siempre devuelve -1

        console.log(indice)


        if (indice != -1) {
            console.log("estoy en el if")
            // Elimina la cotización del array favs
            favs.splice(indice, 1);

            // Actualiza el estado y guarda los datos en localStorage
            datos[indice].estado = false;
            localStorage.setItem("monedas", JSON.stringify(datos));
        }
    } else {
        console.error("No se encontró el elemento");
    }
}

// Asignar la función eliminar a cada botón eliminar
let botonesEliminar = document.querySelectorAll(".eliminar");
botonesEliminar.forEach(boton => {
    boton.onclick = eliminar;
});

/*

function eliminar() {
    // Obtener el nombre del botón clicado
    let nombreBoton = this.id;

    // Encontrar la cotización correspondiente en favs
    let indice = favs.findIndex(cotizacion => cotizacion.nombre === nombreBoton);

    if (indice !== -1) {
        // Ocultar el elemento en el DOM
        let cotizacionBorrar = document.getElementById(nombreBoton);
        if (cotizacionBorrar) {
            cotizacionBorrar.style.display = "none";
        }

        // Eliminar la cotización de favs y actualizar localStorage
        favs.splice(indice, 1);
        datos[indice].estado = false;
        localStorage.setItem("monedas", JSON.stringify(datos));
    }
}

// Asignar la función eliminar a cada botón eliminar
let botonEliminar = document.querySelectorAll(".eliminar");
botonEliminar.forEach(boton => {
    boton.onclick = eliminar;
});

*/



console.log("favs");
console.log(favs);


/*
"[{"id":"euro","nombre":"Euro","compra":975.59,"venta":977.03,"estado":false,"fecha":"2024-06-28T20:58:00.000Z","moneda":"EUR"},
{"id":"real","nombre":"Real Brasileño","compra":162.84,"venta":163.03,"estado":false,"fecha":"2024-06-28T20:58:00.000Z","moneda":"BRL"},
{"id":"1","nombre":"Blue","compra":1345,"venta":1365,"estado":true,"fecha":"2024-06-28T20:58:00.000Z","moneda":"USD"},
{"id":"0","nombre":"Oficial","compra":890.5,"venta":930.5,"estado":false,"fecha":"2024-06-28T15:04:00.000Z","moneda":"USD"},
{"id":"2","nombre":"Bolsa","compra":1338.5,"venta":1348.6,"estado":false,"fecha":"2024-06-28T20:58:00.000Z","moneda":"USD"},
{"id":"4","nombre":"Mayorista","compra":888.72,"venta":928.64,"estado":false,"fecha":"2024-06-28T20:58:00.000Z","moneda":"USD"},
{"id":"6","nombre":"Tarjeta","compra":1424.8,"venta":1488.8,"estado":false,"fecha":"2024-06-28T15:04:00.000Z","moneda":"USD"},
{"id":"3","nombre":"Contado con liquidación","compra":1347,"venta":1349.8,"estado":true,"fecha":"2024-06-28T20:58:00.000Z","moneda":"USD"}
,{"id":"5","nombre":"Cripto","compra":1346,"venta":1390,"estado":false,"fecha":"2024-06-28T20:58:00.000Z","moneda":"USD"}
,{"id":"pesoChileno","nombre":"Peso Chileno","compra":96.78,"venta":96.94,"estado":true,"fecha":"2024-06-28T20:58:00.000Z","moneda":"CLP"},
{"id":"pesoUruguayo","nombre":"Peso Uruguayo","compra":23.09,"venta":23.14,"estado":true,"fecha":"2024-06-28T20:58:00.000Z","moneda":"UYU"}
,{"id":"euro","nombre":"Euro","compra":975.95,"venta":977.39,"estado":true,"fecha":"2024-06-29T18:00:00.000Z","moneda":"EUR"},
{"id":"2","nombre":"Bolsa","compra":1338.5,"venta":1348.6,"estado":true,"fecha":"2024-06-30T20:56:00.000Z","moneda":"USD"}
,{"id":"euro","nombre":"Euro","compra":980.47,"venta":981.91,"estado":true,"fecha":"2024-07-01T20:55:00.000Z","moneda":"EUR"}
,{"id":"1","nombre":"Blue","compra":1385,"venta":1405,"estado":true,"fecha":"2024-07-01T20:55:00.000Z","moneda":"USD"}]"




*/