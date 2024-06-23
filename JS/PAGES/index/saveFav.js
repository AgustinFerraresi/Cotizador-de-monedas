"use strict";

//me traigo todos los elementos que tengan la clase checkbox estos se guardan en la var checkboxes en forma de NodeList (funciona muy similar a un array)
let checkboxes = document.querySelectorAll(".checkbox");
console.log("muestro los checkboxes ",checkboxes);

let button = document.getElementById("button");

//aca se guardaran todas las monedas que tengan el checkbox activo
let favorites = []; 

function cargarFavoritos() {
    
}

function revisarCheckBoxes() {
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            favorites.push(index);
        }
    });  
    save();
    console.log("estoy dentro de revisarCheckBoxes",favorites)  
}

// Guarda el arreglo 'favoritas' en el Local Storage, convirtiéndolo a formato JSON
function save() {
    localStorage.setItem('monedasFavoritas', JSON.stringify(favorites));

    //lo guardo en una variable para poder mostrarlo por consola y ver que se este guardando bien
    let seleccionadas = localStorage.getItem("monedasFavoritas");
    console.log("funcion save",seleccionadas);
}

/*
document.addEventListener('DOMContentLoaded', function() {
    revisarCheckBoxes();
    console.log("se llama a la funcion revisarCheckBoxes");
});
*/

button.onclick = revisarCheckBoxes;


/* 
se me ocurre recorrer todos los checkboxes que esten en local storage (si estan alli quiere decir que fueron seleccionados) al principio de la pagina
y ponerles estado de active a los mismo asi se logra mantener el estado de los mismos 
*/