"use strict";

//---------------PREPARO LA GRAFICA---------------
let grafico;
let etiquetas;
 
//Axis X 
etiquetas = fechas; //aca estaran todas las fechas en las que se marco el blue como una moneda favorita sin repetir fechas

//Datos
let datosLinea1 = compraBlue;
let datosLinea2 = ventaBlue;

let oficialCompra = compraOficial
let oficialVenta = ventaOficial;

let lccCompra = compraLCC;
let lccVenta = ventaLCC;

let bolsaCompra = comprabolsa;
let bolsaVenta = ventabolsa;

let criptoCompra = compracripto;
let criptoVenta = ventacripto;

let tarjetaCompra = compratarjeta;
let tarjetaVenta = ventatarjeta;

let euroCompra = compraeuro;
let euroVenta = ventaeuro;

let pesoChilenoCompra = comprapesoChileno;
let pesoChilenoVenta = ventapesoChileno;

let pesoUruguayoCompra = comprapesoUruguayo;
let pesoUruguayoVenta = ventapesoUruguayo;

let realCompra = comprareal;
let realVenta = ventareal;

const ctx = document.getElementById("miGrafica").getContext("2d");
grafico = new Chart(ctx, {
    type: "line",
    data: {
        labels: etiquetas,
        datasets: [
            //BLUE 0 y 1
            { 
                label: "Dolar Blue (compra)",
                data: datosLinea1,
                borderColor: "green",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false
            },
            {
                label: "Dolar Blue (venta)",
                data: datosLinea2,
                borderColor: "red",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            //OFICIAL 2 y 3
            { 
                label: "Dolar Oficial (compra)",
                data: oficialCompra,
                borderColor: "orange",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            {
                label: "Dolar Oficial (venta)",
                data: oficialVenta,
                borderColor: "pink",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            //LCC 4 y 5
            { 
                label: "CCL (compra)",
                data: lccCompra,
                borderColor: "blue",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            {
                label: "CCL (venta)",
                data: lccVenta,
                borderColor: "yellow",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            //BOLSA 6 y 7
            { 
                label: "Bolsa (compra)",
                data: bolsaCompra,
                borderColor: "aqua",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            {
                label: "Bolsa (venta)",
                data: bolsaVenta,
                borderColor: "beige",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            //cripto 8 y 9
            { 
                label: "Cripto (compra)",
                data: criptoCompra,
                borderColor: "blueviolet",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            {
                label: "Cripto (venta)",
                data: criptoVenta,
                borderColor: "cadetblue",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            //tarjeta 10 y 11
            { 
                label: "Tarjeta (compra)",
                data: tarjetaCompra,
                borderColor: "brown",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            {
                label: "Tarjeta (venta)",
                data: tarjetaVenta,
                borderColor: "white",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            //euro 12 y 13
            { 
                label: "Euro (compra)",
                data: euroCompra,
                borderColor: "gold",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            {
                label: "Euro (venta)",
                data: euroVenta,
                borderColor: "goldenrod",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            //peso chileno 14 y 15
            { 
                label: "Peso Chileno (compra)",
                data: pesoChilenoCompra,
                borderColor: "chocolate",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            {
                label: "Peso Chileno (venta)",
                data: pesoChilenoVenta,
                borderColor: "chartreuse",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            //peso uruguayo 16 y 17
            { 
                label: "Peso Uruguayo (compra)",
                data: pesoUruguayoCompra,
                borderColor: "rgb(0, 166, 255)",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            {
                label: "Peso Uruguayo (venta)",
                data: pesoUruguayoVenta,
                borderColor: "rgb(246, 255, 0)",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            //peso uruguayo 18 y 19
            { 
                label: "Real (compra)",
                data: realCompra,
                borderColor: "rgb(4, 255, 0)",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
            {
                label: "Real (venta)",
                data: realVenta,
                borderColor: "rgb(0, 34, 255)",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false
                
            },
        ]
    }
});

let selectorMonedas = document.getElementById("selector-monedas");
selectorMonedas.value = "todas"; //Por defecto al ingresar se mostrarán TODAS las monedas almacenadas
main(); //primera llamada a la funcion para que se actulice la grafica
selectorMonedas.onchange = main;

//me trago todos los tr para poder mostrar/ocultar los que correspondan segun el valor del select
let tablaBlue = document.getElementsByClassName("Blue");
let tablaOficial = document.getElementsByClassName("Oficial");
let tablaCCL = document.getElementsByClassName("ccl");
let tablaBolsa = document.getElementsByClassName("Bolsa");
let tablaCripto = document.getElementsByClassName("Cripto");
let tablaTarjeta = document.getElementsByClassName("Tarjeta");
let tablaEuro = document.getElementsByClassName("Euro");
let tablaPesoChileno = document.getElementsByClassName("pesoChileno");
let tablaPesoUruguayo = document.getElementsByClassName("pesoUruguayo");
let tablaReal = document.getElementsByClassName("real");

let itemsTabla ={
    Blue:tablaBlue,
    Oficial:tablaOficial,
    ccl:tablaCCL,
    Bolsa:tablaBolsa,
    Cripto:tablaCripto,
    Tarjeta:tablaTarjeta,
    Euro:tablaEuro,
    pesoChileno:tablaPesoChileno,
    pesoUruguayo:tablaPesoUruguayo,
    real:tablaReal
}

function qsy() {
    for (let i = 0; i < todas.length; i++) {
        todas[i].style.display = "table-row";
    }
}

function main() {
    if (selectorMonedas.value == "dolar-blue") {
        //blue
        grafico.data.datasets[0].hidden = false;
        grafico.data.datasets[1].hidden = false;
        //oficial
        grafico.data.datasets[2].hidden = true;
        grafico.data.datasets[3].hidden = true;
        //lcc
        grafico.data.datasets[4].hidden = true;
        grafico.data.datasets[5].hidden = true;
        //bolsa
        grafico.data.datasets[6].hidden = true;
        grafico.data.datasets[7].hidden = true;
        //cripto
        grafico.data.datasets[8].hidden = true;
        grafico.data.datasets[9].hidden = true;
        //tarjeta
        grafico.data.datasets[10].hidden = true;
        grafico.data.datasets[11].hidden = true;
        //euro
        grafico.data.datasets[12].hidden = true;
        grafico.data.datasets[13].hidden = true;
        //peso chileno
        grafico.data.datasets[14].hidden = true;
        grafico.data.datasets[15].hidden = true;
        //peso uruguayo
        grafico.data.datasets[16].hidden = true;
        grafico.data.datasets[17].hidden = true;
        //real
        grafico.data.datasets[18].hidden = true;
        grafico.data.datasets[19].hidden = true;

        grafico.data.labels = fechasBlueSR
        for (let key in itemsTabla) {
            console.log("estoy en el for del blue")
            if (key === "Blue") {
                for (let element of itemsTabla[key]) {
                    element.style.display = "table-row"; 
                }
            } else {
                for (let element of itemsTabla[key]) {
                    element.style.display = "none"; 
                }
            }
        }
    }else if (selectorMonedas.value == "dolar-oficial"){
        //blue
        grafico.data.datasets[0].hidden = true;
        grafico.data.datasets[1].hidden = true;
        //oficial
        grafico.data.datasets[2].hidden = false;
        grafico.data.datasets[3].hidden = false;
        //ccl
        grafico.data.datasets[4].hidden = true;
        grafico.data.datasets[5].hidden = true;
        //bolsa
        grafico.data.datasets[6].hidden = true;
        grafico.data.datasets[7].hidden = true;
        //cripto
        grafico.data.datasets[8].hidden = true;
        grafico.data.datasets[9].hidden = true;
        //tarjeta
        grafico.data.datasets[10].hidden = true;
        grafico.data.datasets[11].hidden = true;
        //euro
        grafico.data.datasets[12].hidden = true;
        grafico.data.datasets[13].hidden = true;
        //peso chileno
        grafico.data.datasets[14].hidden = true;
        grafico.data.datasets[15].hidden = true;
        //peso uruguayo
        grafico.data.datasets[16].hidden = true;
        grafico.data.datasets[17].hidden = true;
        //real
        grafico.data.datasets[18].hidden = true;
        grafico.data.datasets[19].hidden = true;

        grafico.data.labels = fechasOficialSR
        for (let key in itemsTabla) {
            if (key === "Oficial") {
                for (let element of itemsTabla[key]) {
                    element.style.display = "table-row"; 
                }
            } else {
                for (let element of itemsTabla[key]) {
                    element.style.display = "none"; 
                }
            }
        }
    }else if (selectorMonedas.value == "dolar-lcc"){
        //blue
        grafico.data.datasets[0].hidden = true;
        grafico.data.datasets[1].hidden = true;
        //oficial
        grafico.data.datasets[2].hidden = true;
        grafico.data.datasets[3].hidden = true;
        //llc
        grafico.data.datasets[4].hidden = false;
        grafico.data.datasets[5].hidden = false;
        //bolsa
        grafico.data.datasets[6].hidden = true;
        grafico.data.datasets[7].hidden = true;
        //cripto
        grafico.data.datasets[8].hidden = true;
        grafico.data.datasets[9].hidden = true;
        //tarjeta
        grafico.data.datasets[10].hidden = true;
        grafico.data.datasets[11].hidden = true;
        //euro
        grafico.data.datasets[12].hidden = true;
        grafico.data.datasets[13].hidden = true;
        //peso chileno
        grafico.data.datasets[14].hidden = true;
        grafico.data.datasets[15].hidden = true;
        //peso uruguayo
        grafico.data.datasets[16].hidden = true;
        grafico.data.datasets[17].hidden = true;
        //real
        grafico.data.datasets[18].hidden = true;
        grafico.data.datasets[19].hidden = true;

        grafico.data.labels = fechasLCCSR
        for (let key in itemsTabla) {
            if (key === "ccl") {
                for (let element of itemsTabla[key]) {
                    element.style.display = "table-row"; 
                }
            } else {
                for (let element of itemsTabla[key]) {
                    element.style.display = "none"; 
                }
            }
        }
    }else if (selectorMonedas.value == "dolar-bolsa"){
        //blue
        grafico.data.datasets[0].hidden = true;
        grafico.data.datasets[1].hidden = true;
        //oficial
        grafico.data.datasets[2].hidden = true;
        grafico.data.datasets[3].hidden = true;
        //llc
        grafico.data.datasets[4].hidden = true;
        grafico.data.datasets[5].hidden = true;
        //bolsa
        grafico.data.datasets[6].hidden = false;
        grafico.data.datasets[7].hidden = false;
        //cripto
        grafico.data.datasets[8].hidden = true;
        grafico.data.datasets[9].hidden = true;
        //tarjeta
        grafico.data.datasets[10].hidden = true;
        grafico.data.datasets[11].hidden = true;
        //euro
        grafico.data.datasets[12].hidden = true;
        grafico.data.datasets[13].hidden = true;
        //peso chileno
        grafico.data.datasets[14].hidden = true;
        grafico.data.datasets[15].hidden = true;
        //peso uruguayo
        grafico.data.datasets[16].hidden = true;
        grafico.data.datasets[17].hidden = true;
        //real
        grafico.data.datasets[18].hidden = true;
        grafico.data.datasets[19].hidden = true;

        grafico.data.labels = fechasbolsaSR
        for (let key in itemsTabla) {
            if (key === "Bolsa") {
                for (let element of itemsTabla[key]) {
                    element.style.display = "table-row"; 
                }
            } else {
                for (let element of itemsTabla[key]) {
                    element.style.display = "none"; 
                }
            }
        }
    }else if (selectorMonedas.value == "dolar-cripto"){
        //blue
        grafico.data.datasets[0].hidden = true;
        grafico.data.datasets[1].hidden = true;
        //oficial
        grafico.data.datasets[2].hidden = true;
        grafico.data.datasets[3].hidden = true;
        //llc
        grafico.data.datasets[4].hidden = true;
        grafico.data.datasets[5].hidden = true;
        //bolsa
        grafico.data.datasets[6].hidden = true;
        grafico.data.datasets[7].hidden = true;
        //cripto
        grafico.data.datasets[8].hidden = false;
        grafico.data.datasets[9].hidden = false;
        //tarjeta
        grafico.data.datasets[10].hidden = true;
        grafico.data.datasets[11].hidden = true;
        //euro
        grafico.data.datasets[12].hidden = true;
        grafico.data.datasets[13].hidden = true;
        //peso chileno
        grafico.data.datasets[14].hidden = true;
        grafico.data.datasets[15].hidden = true;
        //peso uruguayo
        grafico.data.datasets[16].hidden = true;
        grafico.data.datasets[17].hidden = true;
        //real
        grafico.data.datasets[18].hidden = true;
        grafico.data.datasets[19].hidden = true;

        grafico.data.labels = fechascriptoSR
        for (let key in itemsTabla) {
            if (key === "Cripto") {
                for (let element of itemsTabla[key]) {
                    element.style.display = "table-row"; 
                }
            } else {
                for (let element of itemsTabla[key]) {
                    element.style.display = "none"; 
                }
            }
        }
    }else if (selectorMonedas.value == "dolar-tarjeta"){
        //blue
        grafico.data.datasets[0].hidden = true;
        grafico.data.datasets[1].hidden = true;
        //oficial
        grafico.data.datasets[2].hidden = true;
        grafico.data.datasets[3].hidden = true;
        //llc
        grafico.data.datasets[4].hidden = true;
        grafico.data.datasets[5].hidden = true;
        //bolsa
        grafico.data.datasets[6].hidden = true;
        grafico.data.datasets[7].hidden = true;
        //cripto
        grafico.data.datasets[8].hidden = true;
        grafico.data.datasets[9].hidden = true;
        //tarjeta
        grafico.data.datasets[10].hidden = false;
        grafico.data.datasets[11].hidden = false;
        //euro
        grafico.data.datasets[12].hidden = true;
        grafico.data.datasets[13].hidden = true;
        //peso chileno
        grafico.data.datasets[14].hidden = true;
        grafico.data.datasets[15].hidden = true;
        //peso uruguayo
        grafico.data.datasets[16].hidden = true;
        grafico.data.datasets[17].hidden = true;
        //real
        grafico.data.datasets[18].hidden = true;
        grafico.data.datasets[19].hidden = true;

        grafico.data.labels = fechastarjetaSR
        for (let key in itemsTabla) {
            if (key === "Tarjeta") {
                for (let element of itemsTabla[key]) {
                    element.style.display = "table-row"; 
                }
            } else {
                for (let element of itemsTabla[key]) {
                    element.style.display = "none"; 
                }
            }
        }
    }else if (selectorMonedas.value == "euro"){
        //blue
        grafico.data.datasets[0].hidden = true;
        grafico.data.datasets[1].hidden = true;
        //oficial
        grafico.data.datasets[2].hidden = true;
        grafico.data.datasets[3].hidden = true;
        //llc
        grafico.data.datasets[4].hidden = true;
        grafico.data.datasets[5].hidden = true;
        //bolsa
        grafico.data.datasets[6].hidden = true;
        grafico.data.datasets[7].hidden = true;
        //cripto
        grafico.data.datasets[8].hidden = true;
        grafico.data.datasets[9].hidden = true;
        //tarjeta
        grafico.data.datasets[10].hidden = true;
        grafico.data.datasets[11].hidden = true;
        //euro
        grafico.data.datasets[12].hidden = false;
        grafico.data.datasets[13].hidden = false;
        //peso chileno
        grafico.data.datasets[14].hidden = true;
        grafico.data.datasets[15].hidden = true;
        //peso uruguayo
        grafico.data.datasets[16].hidden = true;
        grafico.data.datasets[17].hidden = true;
        //real
        grafico.data.datasets[18].hidden = true;
        grafico.data.datasets[19].hidden = true;

        grafico.data.labels = fechaseuroSR
        for (let key in itemsTabla) {
            if (key === "Euro") {
                for (let element of itemsTabla[key]) {
                    element.style.display = "table-row"; 
                }
            } else {
                for (let element of itemsTabla[key]) {
                    element.style.display = "none"; 
                }
            }
        }
    }else if (selectorMonedas.value == "peso-chileno"){
        //blue
        grafico.data.datasets[0].hidden = true;
        grafico.data.datasets[1].hidden = true;
        //oficial
        grafico.data.datasets[2].hidden = true;
        grafico.data.datasets[3].hidden = true;
        //llc
        grafico.data.datasets[4].hidden = true;
        grafico.data.datasets[5].hidden = true;
        //bolsa
        grafico.data.datasets[6].hidden = true;
        grafico.data.datasets[7].hidden = true;
        //cripto
        grafico.data.datasets[8].hidden = true;
        grafico.data.datasets[9].hidden = true;
        //tarjeta
        grafico.data.datasets[10].hidden = true;
        grafico.data.datasets[11].hidden = true;
        //euro
        grafico.data.datasets[12].hidden = true;
        grafico.data.datasets[13].hidden = true;
        //peso chileno
        grafico.data.datasets[14].hidden = false;
        grafico.data.datasets[15].hidden = false;
        //peso uruguayo
        grafico.data.datasets[16].hidden = true;
        grafico.data.datasets[17].hidden = true;
        //real
        grafico.data.datasets[18].hidden = true;
        grafico.data.datasets[19].hidden = true;

        grafico.data.labels = fechaspesoChilenoSR
        for (let key in itemsTabla) {
            if (key === "pesoChileno") {
                for (let element of itemsTabla[key]) {
                    element.style.display = "table-row"; 
                }
            } else {
                for (let element of itemsTabla[key]) {
                    element.style.display = "none"; 
                }
            }
        }
    }else if (selectorMonedas.value == "peso-uruguayo"){
        //blue
        grafico.data.datasets[0].hidden = true;
        grafico.data.datasets[1].hidden = true;
        //oficial
        grafico.data.datasets[2].hidden = true;
        grafico.data.datasets[3].hidden = true;
        //llc
        grafico.data.datasets[4].hidden = true;
        grafico.data.datasets[5].hidden = true;
        //bolsa
        grafico.data.datasets[6].hidden = true;
        grafico.data.datasets[7].hidden = true;
        //cripto
        grafico.data.datasets[8].hidden = true;
        grafico.data.datasets[9].hidden = true;
        //tarjeta
        grafico.data.datasets[10].hidden = true;
        grafico.data.datasets[11].hidden = true;
        //euro
        grafico.data.datasets[12].hidden = true;
        grafico.data.datasets[13].hidden = true;
        //peso chileno
        grafico.data.datasets[14].hidden = true;
        grafico.data.datasets[15].hidden = true;
        //peso uruguayo
        grafico.data.datasets[16].hidden = false;
        grafico.data.datasets[17].hidden = false;
        //real
        grafico.data.datasets[18].hidden = true;
        grafico.data.datasets[19].hidden = true;

        grafico.data.labels = fechaspesoUruguayoSR
        for (let key in itemsTabla) {
            if (key === "pesoUruguayo") {
                for (let element of itemsTabla[key]) {
                    element.style.display = "table-row"; 
                }
            } else {
                for (let element of itemsTabla[key]) {
                    element.style.display = "none"; 
                }
            }
        }
    }else if (selectorMonedas.value == "reales"){
        //blue
        grafico.data.datasets[0].hidden = true;
        grafico.data.datasets[1].hidden = true;
        //oficial
        grafico.data.datasets[2].hidden = true;
        grafico.data.datasets[3].hidden = true;
        //llc
        grafico.data.datasets[4].hidden = true;
        grafico.data.datasets[5].hidden = true;
        //bolsa
        grafico.data.datasets[6].hidden = true;
        grafico.data.datasets[7].hidden = true;
        //cripto
        grafico.data.datasets[8].hidden = true;
        grafico.data.datasets[9].hidden = true;
        //tarjeta
        grafico.data.datasets[10].hidden = true;
        grafico.data.datasets[11].hidden = true;
        //euro
        grafico.data.datasets[12].hidden = true;
        grafico.data.datasets[13].hidden = true;
        //peso chileno
        grafico.data.datasets[14].hidden = true;
        grafico.data.datasets[15].hidden = true;
        //peso uruguayo
        grafico.data.datasets[16].hidden = true;
        grafico.data.datasets[17].hidden = true;
        //real
        grafico.data.datasets[18].hidden = false;
        grafico.data.datasets[19].hidden = false;

        grafico.data.labels = fechasrealSR
        for (let key in itemsTabla) {
            if (key === "real") {
                for (let element of itemsTabla[key]) {
                    element.style.display = "table-row"; 
                }
            } else {
                for (let element of itemsTabla[key]) {
                    element.style.display = "none"; 
                }
            }
        }
    }else if (selectorMonedas.value == "todas"){
        /*los valores de compra estan en posiciones pares por lo que si el resto de dividir "i" en dos es 0 quiere decir
        que estamos iterando en un valor par osea en un valor de compra los cuales se tienen que mostrar si el 
        select esta en "todas"*/

        for (let i = 0; i < grafico.data.datasets.length; i++) {
            if (i % 2 == 0 ) {
                grafico.data.datasets[i].hidden = false;
            }else{
                grafico.data.datasets[i].hidden = true;
            }
        }
        grafico.data.labels = fechas
        qsy();
    }
        // actualizo el grafico despues de modificar los datasets sino no se muestran los cambios
        grafico.update();
}
let boton = document.getElementById("share");
let form = document.getElementById("form");
let z = 0
function envioEmail() {
    if (z == 0) {
        form.style.display = "grid";
        z = 1
    }else{
        form.style.display = "none";
        z = 0
    }
    
}
boton.onclick = envioEmail;

const btn = document.getElementById('button');
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_wh7n675';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Correo enviado!');
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});