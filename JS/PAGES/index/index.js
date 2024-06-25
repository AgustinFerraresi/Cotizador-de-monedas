"use strict";
let select = document.getElementById("selector-monedas");
let listaMonedas = document.getElementById("lista-monedas")



/*El objetivo de esta funcion es poder usar una variable cada vez que se quiera hacer una llamada a la api
lo que hace la funcion es asignar a una variable la respuesta de la api y luego esa respuesta es asignada
a una variable global pero en formato json*/

async function main() {
    await llamadaApi();
    async function llamar() {
        await llamadaApi();
    }
    
    //llamo cada 5 mins a la funcion para actualizar los datos de las cotizaciones 5 minutos son 300000
    setInterval(llamar,300000);

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
            <input type="checkbox" class="checkbox" id="euro">
            <label for="euro" class="label-checkbox"><img src="..//..//IMG/desmarcado.png" alt="" id="imgeuro"></label>
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
            <input type="checkbox" class="checkbox" id="real">
            <label for="real" class="label-checkbox"><img src="..//..//IMG/desmarcado.png" alt="" id="imgreal"></label>
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
            <input type="checkbox" class="checkbox" id="pesoChileno">
            <label for="pesoChileno" class="label-checkbox"><img src="..//..//IMG/desmarcado.png" alt="" id="imgpesoChileno"></label>
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
            <input type="checkbox" class="checkbox" id="pesoUruguayo">
            <label for="pesoUruguayo" class="label-checkbox"><img src="..//..//IMG/desmarcado.png" alt="" id="imgpesoUruguayo"></label>
        </div>
        `
        nuevoItemPesoUruguayo.id = `${pesoUruguayo.moneda}`;
        listaMonedas.appendChild(nuevoItemPesoUruguayo);
    }

    //aca se guardara un node list (un array) con todos los objetos html que conicidan con la clase
    let checkboxes = document.querySelectorAll(".checkbox");

    //CARGO EL ESTADO PREVIO DE LOS CHECKBOXES
    checkboxes.forEach(checkbox => {
        let img = document.getElementById(`img${checkbox.id}`)
        let traigoCheckbox = localStorage.getItem(checkbox.id);
        let traigoCheckboxParse = JSON.parse(traigoCheckbox);
        console.log(traigoCheckboxParse)
/* */
            if (traigoCheckboxParse && traigoCheckboxParse.estado == true) {
                checkbox.checked = true;
                img.setAttribute("src","..//IMG/marcado.png");
            }else{
                checkbox.checked = false;
                img.setAttribute("src","..//IMG/desmarcado.png");
            }

    });
    
    //se añade un LISTENER A CADA CHECKBOX
    checkboxes.forEach(checkbox => {    
        
        /*cada vez que se cambie el estado del checkbox se llamara a la funcion la cual guarda un objeto 
        (transformado a str el cual contiene todos los datos que seran necesario mas adelante) en la key con el nombre
        del ID del checkbox cuando cambie el estado del checkbox el nuevo estado se guardará en la key ya creada*/

        checkbox.addEventListener("change",function() {
        
            //si el id del checkbox coincide con alguna de las condiciones de los if´s se crea el objeto moneda con los datos necesarios
            //y se sube en formato json al local storage
             if (checkbox.id === "euro") {
                let moneda = {
                    id: checkbox.id,
                    nombre: euro.nombre,
                    compra: euro.compra,
                    venta: euro.venta,
                    estado: checkbox.checked,
                    fecha: euro.fechaActualizacion
                }
                localStorage.setItem(checkbox.id,JSON.stringify(moneda));

             }else if(checkbox.id === "real") {
                let moneda = {
                    id: checkbox.id,
                    nombre: real.nombre,
                    compra: real.compra,
                    venta: real.venta,
                    estado: checkbox.checked,
                    fecha: real.fechaActualizacion
                }
                localStorage.setItem(checkbox.id,JSON.stringify(moneda));

             }else if(checkbox.id === "pesoChileno") {
                let moneda = {
                    id: checkbox.id,
                    nombre: pesoChileno.nombre,
                    compra:pesoChileno.compra,
                    venta: pesoChileno.venta,
                    estado: checkbox.checked,
                    fecha: pesoChileno.fechaActualizacion
                }
                localStorage.setItem(checkbox.id,JSON.stringify(moneda));

             }else if(checkbox.id === "pesoUruguayo") {
                let moneda = {
                    id: checkbox.id,
                    nombre: pesoUruguayo.nombre,
                    compra: pesoUruguayo.compra,
                    venta: pesoUruguayo.venta,
                    estado: checkbox.checked,
                    fecha: pesoUruguayo.fechaActualizacion
                }
                localStorage.setItem(checkbox.id,JSON.stringify(moneda));
             }

             /*recorro todo datosApi (que es donde se guardan los datos de los dolares que vienen de la api) la var i la uso para poder tener
             alcance a todos los dolares cuando el usuario seleccione alguna cotizacion de un dolar se recorreran todos hasta encontrar
             la coincidencia*/
             let i = 0;
             while (i < datosApi.length) {
                if (checkbox.id == i) {
                    let moneda = {
                        id: checkbox.id,
                        nombre: datosApi[i].nombre,
                        compra: datosApi[i].compra,
                        venta: datosApi[i].venta,
                        estado: checkbox.checked,
                        fecha: datosApi[i].fechaActualizacion
                    }
                    localStorage.setItem(checkbox.id,JSON.stringify(moneda));
                }
                i = i + 1;
             }

            let img = document.getElementById(`img${checkbox.id}`)
            if (checkbox.checked) {
                img.setAttribute("src","..//IMG/marcado.png");
            }else{
                img.setAttribute("src","..//IMG/desmarcado.png");
            }
        })
    });
}

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