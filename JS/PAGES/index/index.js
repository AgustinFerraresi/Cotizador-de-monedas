"use strict";
let select = document.getElementById("selector-monedas");
let listaMonedas = document.getElementById("lista-monedas");

// Función para obtener datos almacenados en localStorage
function obtenerDatosGuardados() {
    let datosGuardados = localStorage.getItem("monedas");

    /*Si datosGuardados no es null (es decir, si hay datos almacenados en la key "monedas"),
    lo convierte de una cadena JSON a su tipo de dato original
    Si datosGuardados es null (osea queno hay datos almacenados), devuelve un array vacio el "?" actua como un if
    y los ":" (dos puntos) actua como un else osea si la condiciones es verdadera se ejecuta el codigo que esta a la derecha
    del "?" sino se ejecuta el codigo que esta a la deracha del ":"*/

    return datosGuardados ? JSON.parse(datosGuardados) : [];
}

// Función para guardar datos en localStorage
function guardarDatos(datos) {
    localStorage.setItem("monedas", JSON.stringify(datos));
}

function busquedaReversa(array, parametro) {
    for (let i = array.length - 1; i >= 0; i--) {

        if (array[i].id == parametro) {
            return array[i];
        }
    }
    return null;
}

async function main() {
    await llamadaApi();
    
    /*
    async function llamar() {
        await llamadaApi();
    }
    
    // Llamo cada 5 mins a la función para actualizar los datos de las cotizaciones 5 minutos son 300000
    setInterval(llamar,300000);
    */

    if (select.value == "todas") {
        let i = 0;

        // Agrego todos los dólares
        while (i < datosApi.length) {
            let nuevoItemDolar = document.createElement("li");
            nuevoItemDolar.innerHTML = 
            `
            <div>
                <h4>${datosApi[i].casa}</h4> <span class="compra">COMPRA $${datosApi[i].compra}</span><span class="venta">VENTA $${datosApi[i].venta}</span>
                <input type="checkbox" class="checkbox" id="${i}">
                <label for="${i}" class="label-checkbox"><img src="..//..//IMG/desmarcado.png" alt="" id="img${i}"></label>
            </div>
            `;
            nuevoItemDolar.className = `${datosApi[i].moneda}`;
            listaMonedas.appendChild(nuevoItemDolar); 
            i = i + 1;
        }

        // Agrego el euro
        let nuevoItemEuro = document.createElement("li");
        nuevoItemEuro.innerHTML = 
        `
        <div>
            <h4>${euro.nombre}</h4> <span class="compra">COMPRA $${euro.compra}</span><span class="venta">VENTA $${euro.venta}</span>
            <input type="checkbox" class="checkbox" id="euro">
            <label for="euro" class="label-checkbox"><img src="..//..//IMG/desmarcado.png" alt="" id="imgeuro"></label>
        </div>
        `;
        nuevoItemEuro.id = `${euro.moneda}`;
        listaMonedas.appendChild(nuevoItemEuro);

        // Agrego el real brasileño
        let nuevoItemReal = document.createElement("li");
        nuevoItemReal.innerHTML = 
        `
        <div>
            <h4>${real.nombre}</h4> <span class="compra">COMPRA $${real.compra}</span><span class="venta">VENTA $${real.venta}</span>
            <input type="checkbox" class="checkbox" id="real">
            <label for="real" class="label-checkbox"><img src="..//..//IMG/desmarcado.png" alt="" id="imgreal"></label>
        </div>
        `;
        nuevoItemReal.id = `${real.moneda}`;
        listaMonedas.appendChild(nuevoItemReal);

        // Agrego el peso chileno
        let nuevoItemPesoChileno = document.createElement("li");
        nuevoItemPesoChileno.innerHTML = 
        `
        <div>
            <h4>${pesoChileno.nombre}</h4> <span class="compra">COMPRA $${pesoChileno.compra}</span><span class="venta">VENTA $${pesoChileno.venta}</span>
            <input type="checkbox" class="checkbox" id="pesoChileno">
            <label for="pesoChileno" class="label-checkbox"><img src="..//..//IMG/desmarcado.png" alt="" id="imgpesoChileno"></label>
        </div>
        `;
        nuevoItemPesoChileno.id = `${pesoChileno.moneda}`;
        listaMonedas.appendChild(nuevoItemPesoChileno);

        // Agrego el peso uruguayo
        let nuevoItemPesoUruguayo = document.createElement("li");
        nuevoItemPesoUruguayo.innerHTML = 
        `
        <div>
            <h4>${pesoUruguayo.nombre}</h4> <span class="compra">COMPRA $${pesoUruguayo.compra}</span><span class="venta">VENTA $${pesoUruguayo.venta}</span>
            <input type="checkbox" class="checkbox" id="pesoUruguayo">
            <label for="pesoUruguayo" class="label-checkbox"><img src="..//..//IMG/desmarcado.png" alt="" id="imgpesoUruguayo"></label>
        </div>
        `;
        nuevoItemPesoUruguayo.id = `${pesoUruguayo.moneda}`;
        listaMonedas.appendChild(nuevoItemPesoUruguayo);
    }

    // Cargo el estado previo de los checkboxes
    let checkboxes = document.querySelectorAll(".checkbox");
    let datosGuardados = obtenerDatosGuardados();

    checkboxes.forEach(checkbox => {
        let img = document.getElementById(`img${checkbox.id}`);
        let traigoCheckbox = busquedaReversa(datosGuardados,checkbox.id);

        if (traigoCheckbox && traigoCheckbox.estado == true) {
            checkbox.checked = true;
            img.setAttribute("src", "..//IMG/marcado.png");
            
        } else {
            checkbox.checked = false;
            img.setAttribute("src", "..//IMG/desmarcado.png");
        }
        
    });

    // Se añade un listener a cada checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function() {
            let moneda;

            if (checkbox.id === "euro") {
                moneda = {
                    id: checkbox.id,
                    nombre: euro.nombre,
                    compra: euro.compra,
                    venta: euro.venta,
                    estado: checkbox.checked,
                    fecha: euro.fechaActualizacion,
                    moneda: euro.moneda
                };
            } else if (checkbox.id === "real") {
                moneda = {
                    id: checkbox.id,
                    nombre: real.nombre,
                    compra: real.compra,
                    venta: real.venta,
                    estado: checkbox.checked,
                    fecha: real.fechaActualizacion,
                    moneda: real.moneda
                };
            } else if (checkbox.id === "pesoChileno") {
                moneda = {
                    id: checkbox.id,
                    nombre: pesoChileno.nombre,
                    compra: pesoChileno.compra,
                    venta: pesoChileno.venta,
                    estado: checkbox.checked,
                    fecha: pesoChileno.fechaActualizacion,
                    moneda: pesoChileno.moneda
                };
            } else if (checkbox.id === "pesoUruguayo") {
                moneda = {
                    id: checkbox.id,
                    nombre: pesoUruguayo.nombre,
                    compra: pesoUruguayo.compra,
                    venta: pesoUruguayo.venta,
                    estado: checkbox.checked,
                    fecha: pesoUruguayo.fechaActualizacion,
                    moneda: pesoUruguayo.moneda
                };
            } else {
                let i = 0;
                while (i < datosApi.length) {
                    if (checkbox.id == i) {
                        moneda = {
                            id: checkbox.id,
                            nombre: datosApi[i].nombre,
                            compra: datosApi[i].compra,
                            venta: datosApi[i].venta,
                            estado: checkbox.checked,
                            fecha: datosApi[i].fechaActualizacion,
                            moneda: datosApi[i].moneda
                        };
                        break;
                    }
                    i = i + 1;
                }
            }

            // Verificar si existe una moneda con la misma fecha
            let index = datosGuardados.findIndex(m => m.id === moneda.id && m.fecha === moneda.fecha);
            if (index !== -1) {
                // Actualizar el estado de la moneda existente
                datosGuardados[index].estado = moneda.estado;
            } else {
                // Agregar una nueva moneda si la fecha es diferente
                datosGuardados.push(moneda);
            }

            guardarDatos(datosGuardados);

            // Cambiar la imagen del checkbox según el estado
            let img = document.getElementById(`img${checkbox.id}`);
            if (checkbox.checked) {
                img.setAttribute("src", "..//IMG/marcado.png");
            } else {
                img.setAttribute("src", "..//IMG/desmarcado.png");
            }
        });
    });
}

function mostrarMonedas() {
    let dolares = document.getElementsByClassName("USD");
    let euro = document.getElementById("EUR");
    let real = document.getElementById("BRL");
    let pesoChileno = document.getElementById("CLP");
    let pesoUruguayo = document.getElementById("UYU");

    if (select.value == "dolar") {
        
        for (let dolar of dolares) {
            dolar.style.display = "grid";
        }

        euro.style.display = "none";
        real.style.display = "none";
        pesoChileno.style.display = "none";
        pesoUruguayo.style.display = "none";

    } else if (select.value == "euro") {

        for (let dolar of dolares) {
            dolar.style.display = "none";
        }

        euro.style.display = "grid";
        real.style.display = "none";
        pesoChileno.style.display = "none";
        pesoUruguayo.style.display = "none";

    } else if (select.value == "real-brasileño") {

        for (let dolar of dolares) {
            dolar.style.display = "none";
        }

        real.style.display = "grid";
        euro.style.display = "none";
        pesoChileno.style.display = "none";
        pesoUruguayo.style.display = "none";

    } else if (select.value == "peso-chileno") {

        for (let dolar of dolares) {
            dolar.style.display = "none";
        }

        pesoChileno.style.display = "grid";
        euro.style.display = "none";
        real.style.display = "none";
        pesoUruguayo.style.display = "none";

    } else if (select.value == "peso-uruguayo") {

        for (let dolar of dolares) {
            dolar.style.display = "none";
        }

        pesoUruguayo.style.display = "grid";
        euro.style.display = "none";
        real.style.display = "none";
        pesoChileno.style.display = "none";

    } else if (select.value == "todas") {

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
select.onchange = mostrarMonedas;


let x = localStorage.getItem("monedas");
//console.log(JSON.parse(x));