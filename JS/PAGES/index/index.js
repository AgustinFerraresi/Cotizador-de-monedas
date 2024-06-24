"use strict";
let select = document.getElementById("selector-monedas");
let listaMonedas = document.getElementById("lista-monedas")

//en estas variables lo que se va a guardar son los datos de la api 
let datosApi; //aca se guardan los datos de los dolares
let euro;
let real;
let pesoUruguayo;
let pesoChileno;

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