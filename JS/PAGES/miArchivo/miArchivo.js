"use strict";

let datos = JSON.parse(localStorage.getItem("monedas")); //es un array
let favs = [] //aca se guardaran las cotizaciones que esten marcadas como favoritas
let listaMonedas = document.getElementById("lista-monedas");
let contenidoPrincipal = document.getElementById("contenido-principal");

let ls = JSON.parse(localStorage.getItem("monedas"));
console.log("ls")
console.log(ls)

datos.forEach(cotizacion => {
    if (cotizacion.estado) {
        favs.push(cotizacion);
    }
});



function buscarYEliminar() {
    let valorBorrar = this.closest('button');
    let listItem = this.closest('li');
    console.log(valorBorrar)

    listItem.style.display = 'none';

    console.log("valorBorrar id = ",valorBorrar.id)
    console.log("valorBorrar name (aca se guarda la fecha) = ",valorBorrar.name)

    for (let i = 0; i < ls.length; i++) {
        if (valorBorrar.id == ls[i].id && valorBorrar.name == ls[i].fecha) {
            console.log("estoy en el if del for")
            
            let array = Array.from(ls);
            array.splice(i,1);

            console.log("array",array);

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

    } else {
        let mensaje = document.createElement("p");

        mensaje.innerHTML = "no hay cotizaciones guardadas";
        contenidoPrincipal.appendChild(mensaje);
    }
});


function eliminar() {
    // trae el elemento li mas cercano al botón que fue clickeado
    

    if (elementoLi) {
        // cambia el display del li a none
        //elementoLi.style.display = 'none';

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
    boton.onclick = buscarYEliminar;
});

console.log("favs");
console.log(favs);