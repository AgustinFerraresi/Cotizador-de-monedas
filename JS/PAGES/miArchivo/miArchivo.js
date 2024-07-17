"use strict";

let datos = JSON.parse(localStorage.getItem("monedas")); //es un array
let favs = [] //aca se guardaran las cotizaciones que esten marcadas como favoritas
let listaMonedas = document.getElementById("lista-monedas");
let contenidoPrincipal = document.getElementById("contenido-principal");

let ls = JSON.parse(localStorage.getItem("monedas"));
console.log("ls")
console.log(ls)

if (datos) { //verifico si hay algo guardado en storage si hay y esta marcado como fav lo guardo en favs
    datos.forEach(cotizacion => {
        if (cotizacion.estado) {
            favs.push(cotizacion);
        }
    });    
}


function buscarYEliminar() {
    let valorBorrar = this.closest('button');
    let listItem = this.closest('li');

    listItem.style.display = 'none';

    for (let i = 0; i < ls.length; i++) {
        if (valorBorrar.id == ls[i].id && valorBorrar.name == ls[i].fecha) {
            console.log("estoy en el if del for")

            let array = Array.from(ls);
            array.splice(i,1);

            localStorage.setItem("monedas",JSON.stringify(array));

        }else if(i == ls.length){
            alert("Error no hay coincidencias");
        }
    }
}

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

if(!favs.length){
    let mensaje = document.createElement("p");
    mensaje.className = "noCotizaciones"
    mensaje.innerHTML = "no hay cotizaciones guardadas";
    contenidoPrincipal.appendChild(mensaje);

}else{
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
                    <button class="eliminar" id="${cotizacion.id}" name="${cotizacion.fecha}"><img src="..//IMG/trash-white.png" alt=""></button>
                    <p>${cotizacion.fecha.slice(0,10)}</p>
                </div>
                `
      
            } else {
                nuevoItem.innerHTML =
                `
                <div>
                    <h4>${cotizacion.nombre}</h4> <span class="compra">compra $${cotizacion.compra}</span><span class="venta">venta $${cotizacion.venta}</span>
                    <button class="eliminar" id="${cotizacion.id}" name="${cotizacion.fecha}"><img src="..//IMG/trash-white.png" alt=""></button>
                    <p>${cotizacion.fecha.slice(0,10)}</p>
                </div>
                `
    
            }
            listaMonedas.appendChild(nuevoItem);
        }
    });
    
}


// Asignar la función eliminar a cada botón eliminar
let botonesEliminar = document.querySelectorAll(".eliminar");
botonesEliminar.forEach(boton => {
    boton.onclick = buscarYEliminar;
});


//----imprimir-----


let botonImprimir = document.getElementById("imprimir");
let conteiner = document.getElementById("conteiner");

let header = document.getElementById("header");
let footer = document.getElementById("footer");
let menuLateral = document.getElementById("menuLateral");
let contenedorSelector = document.getElementById("contenedor-selector");
let mainContainer = document.getElementById("main-container");

function imprSelec() {
    
    header.style.display = "none"
    menuLateral.style.display = "none"
    footer.style.display = "none"
    conteiner.style.maxWidth = "none"
    conteiner.style.width = "100vw"
     
    window.print();

    conteiner.style.maxWidth = "1264px"
    header.style.display = "flex"
    footer.style.display = "grid"
    menuLateral.style.display = "flex"
    contenedorSelector.style.display = "flex"

}


function x() {
    header.style.display = "flex"
    footer.style.display = "grid"
    menuLateral.style.display = "flex"
    contenedorSelector.style.display = "flex"
    main.style.height = "847.48px"
}

// Asignar la función imprSelec correctamente al evento onclick
botonImprimir.onclick = function() {
    imprSelec();
};
