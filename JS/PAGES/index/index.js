"use strict";

let select = document.getElementById("selector-monedas");
let listaMonedas = document.getElementById("lista-monedas")
//console.log(select.value);


//en estas variables lo que se va a guardar son los datos de la api 
let datosApi; //aca se guardan los datos de los dolares
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

 /* 
    console.log(datosApi);    
    console.log(real);
    console.log(pesoChileno);
    console.log(pesoUruguayo);
 */
    if (select.value == "todas") {
        let i = 0;

        //-----------------------agrego todos los dolares-----------------------
        while (i < datosApi.length) {

            let nuevoItemDolar = document.createElement("li");
            nuevoItemDolar.innerHTML = 
            `
            <div>
                <h4>${datosApi[i].casa}</h4> <span class="compra">COMPRA $${datosApi[i].compra}</span><span class="venta">VENTA $${datosApi[i].venta}</span>
                <input type="checkbox" class="checkbox" id="${i}">
                <label for="${i}" class="label-checkbox"><img src="..//..//IMG/desmarcado.png" alt="" id="img${i}"></label>
            </div>
            `
            nuevoItemDolar.className = `${datosApi[i].moneda}`;
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
        nuevoItemEuro.id = `${euro.moneda}`;
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
        nuevoItemReal.id = `${real.moneda}`;
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
        nuevoItemPesoChileno.id = `${pesoChileno.moneda}`;
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
        nuevoItemPesoUruguayo.id = `${pesoUruguayo.moneda}`;
        listaMonedas.appendChild(nuevoItemPesoUruguayo);
    }

    //___________________________________________
    //aca se guardara un node list (un array) con todos los objetos html que conicidan con la clase
    let checkboxes = document.querySelectorAll(".checkbox");
    
    checkboxes.forEach(checkbox => {

        let img = document.getElementById(`img${checkbox.id}`)
        let traigoCheckboxes = localStorage.getItem(checkbox.id);   
            if (traigoCheckboxes && traigoCheckboxes === "true") {
                checkbox.checked = true;
                img.setAttribute("src","..//IMG/marcado.png");
            }else{
                checkbox.checked = false;
                img.setAttribute("src","..//IMG/desmarcado.png");
            }
    });
    
    //se añade un listener a cada checkbox
    checkboxes.forEach(checkbox => {    
        /*cada vez que se cambie el estado del checkbox se llamara a la funcion la cual guarda su estado en la key con el nombre
        del ID del checkbox cuando cambie el estado del checkbox el nuevo estado se guardará en la key ya creada*/

        checkbox.addEventListener("change",function() {
            localStorage.setItem(checkbox.id,checkbox.checked);

            let img = document.getElementById(`img${checkbox.id}`)
            if (checkbox.checked) {
                img.setAttribute("src","..//IMG/marcado.png");
            }else{
                img.setAttribute("src","..//IMG/desmarcado.png");
            }

        })
    });
    
    
}

/* RECORDATORIO
Tengo que hacer que cambie la imagen de la estrella cuando el checkbox este activo
de momento deje que se vea el checkbox para ver que todo funcione despues hay que ponerle tamaño 0px
CUIDADO!
tengo que pensar como se van a mostrar las imagenes del label cuando se cargue la pagina porque si el checkbox
ya estaba seleccionado la imagen debe ser una y si no lo esta debe de ser otra
se me ocurre quizas recorrer todas las monedas cuando se cargue la pagina y ahi aplicar las imagenes
para esto se usa local storage
*/

function mostrarMonedas() {
    let dolares = document.getElementsByClassName("USD");
    let euro = document.getElementById("EUR");
    let real = document.getElementById("BRL");
    let pesoChileno = document.getElementById("CLP");
    let pesoUruguayo = document.getElementById("UYU")

    if (select.value == "dolar") {

        for (let dolar of dolares) {
                dolar.style.display = "grid";
        }

        euro.style.display = "none";
        real.style.display = "none";
        pesoChileno.style.display = "none";
        pesoUruguayo.style.display = "none";

    }else if(select.value == "euro"){

        for (let dolar of dolares) {
            dolar.style.display = "none";
        }

        euro.style.display = "grid";
        real.style.display = "none";
        pesoChileno.style.display = "none";
        pesoUruguayo.style.display = "none";

    }else if(select.value == "real-brasileño"){

        for (let dolar of dolares) {
            dolar.style.display = "none";
        }

        real.style.display = "grid";
        euro.style.display = "none";
        pesoChileno.style.display = "none";
        pesoUruguayo.style.display = "none";

    }else if(select.value == "peso-chileno"){
        
        for (let dolar of dolares) {
            dolar.style.display = "none";
        }

        pesoChileno.style.display = "grid";
        euro.style.display = "none";
        real.style.display = "none";
        pesoUruguayo.style.display = "none";

    }else if(select.value == "peso-uruguayo"){

        for (let dolar of dolares) {
            dolar.style.display = "none";
        }

        pesoUruguayo.style.display = "grid";
        euro.style.display = "none";
        real.style.display = "none";
        pesoChileno.style.display = "none";

    }
    else if (select.value == "todas"){
        for (let dolar of dolares) {
            dolar.style.display = "grid";
        }

        pesoUruguayo.style.display = "grid";
        euro.style.display = "grid";
        real.style.display = "grid";
        pesoChileno.style.display = "grid";
    }
}

main();
select.onchange = mostrarMonedas, main;

//saveFav------------------------------------------------------------------------------------




















/**
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
    //localStorage.setItem('monedasFavoritas', JSON.stringify(favorites));

    //lo guardo en una variable para poder mostrarlo por consola y ver que se este guardando bien
    //let seleccionadas = localStorage.getItem("monedasFavoritas");
    console.log("funcion save",seleccionadas);
}

/*
document.addEventListener('DOMContentLoaded', function() {
    revisarCheckBoxes();
    console.log("se llama a la funcion revisarCheckBoxes");
});


button.onclick = revisarCheckBoxes;


/* 
se me ocurre recorrer todos los checkboxes que esten en local storage (si estan alli quiere decir que fueron seleccionados) al principio de la pagina
y ponerles estado de active a los mismo asi se logra mantener el estado de los mismos 

*/