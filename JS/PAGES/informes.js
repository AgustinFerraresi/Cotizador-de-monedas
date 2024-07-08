"use strict";
let todas = document.getElementsByClassName("todas");
let datos = JSON.parse(localStorage.getItem("monedas"));

//console.log("datos")
//console.log(datos)

let fechasDuplicadas = []; //aca se guardan todas la fechas aunque sean repetidas
let favs = []; // aca se guardaran las monedas seleccionadas como favoritas

datos.forEach(cotizacion => {
    if (cotizacion.estado) {
        favs.push(cotizacion);
    }
});

//console.log("favs")
//console.log(favs)

/*recorro el array datos tomando las fechas de cada item y guardandolas en fechasDuplicadas */
for (let i = 0; i < favs.length; i++) {
    
    let favsFecha = favs[i].fecha
    
    let fecha = favsFecha.slice(0,10);
    fechasDuplicadas.push(fecha);
}

//elimino los los duplicados de fechasDuplicadas gracias a que lo convierto en un set (conjunto)
let setFechas = new Set(fechasDuplicadas);

//transformo el set setFechas en array nuevamente
let fechas = Array.from(setFechas).sort();

//console.log("fechas")
//console.log(fechas)
 
//---------------PREPARO LOS DATOS DEL BLUE---------------
let blue = favs.filter(cotizacion => cotizacion.nombre == "Blue"); //la comparacion tiene que ser con el nombre del objeto que este en local storage

//console.log("dolar blue")
//console.log(blue)

let compraBlue = [] //aca se guardan todos los valores de compra de las cotizaciones del blue guardadas
let ventaBlue = [] //aca los valores de venta
let fechasBlue = [] //aca las fechas

blue.forEach(cotizacion => {
    //guardo las fechas del dolar blue
    fechasBlue.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    //guardo los valores de compra/venta del blue en su array correspondiente
    compraBlue.push(compra);
    ventaBlue.push(venta);
});

//elimino repetidos creando un conjunto a partir del array fechasBlue
let fechasBlueSet = new Set(fechasBlue);

//transformo el conjunto fechasBlueSet en array | fechasBlueSR = fechas blue sin repetir
let fechasBlueSR = Array.from(fechasBlueSet); //aca estaran todas las fechas sin repetir en las cuales se guardó la cotizacion del blue

//---------------PREPARO LOS DATOS DEL OFICIAL---------------

let oficial = favs.filter(cotizacion => cotizacion.nombre == "Oficial");

let compraOficial = []
let ventaOficial = []
let fechasOficial = []

oficial.forEach(cotizacion => {
    fechasOficial.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    compraOficial.push(compra);
    ventaOficial.push(venta);
});

let fechasOficialSet = new Set(fechasOficial);
let fechasOficialSR = Array.from(fechasOficialSet);

//---------------PREPARO LOS DATOS DEL LLC---------------

// en todos lados me equivoque y puse LLC en lugar de CCL (contado con luquidacion) y asi se va a quedar :)
let lcc = favs.filter(cotizacion => cotizacion.nombre == "Contado con liquidación");
let compraLCC = []
let ventaLCC = []
let fechasLCC = []

lcc.forEach(cotizacion => {
    fechasLCC.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    compraLCC.push(compra);
    ventaLCC.push(venta);
});

let fechasLCCSet = new Set(fechasLCC);
let fechasLCCSR = Array.from(fechasLCCSet);

//---------------PREPARO LOS DATOS DEL BOLSA---------------

let bolsa = favs.filter(cotizacion => cotizacion.nombre == "Bolsa");
let comprabolsa = []
let ventabolsa = []
let fechasbolsa = []

bolsa.forEach(cotizacion => {
    fechasbolsa.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    comprabolsa.push(compra);
    ventabolsa.push(venta);
});

let fechasbolsaSet = new Set(fechasbolsa);
let fechasbolsaSR = Array.from(fechasbolsaSet);

//---------------PREPARO LOS DATOS DEL CRIPTO---------------
let cripto = favs.filter(cotizacion => cotizacion.nombre == "Cripto");

let compracripto = []
let ventacripto = []
let fechascripto = []

cripto.forEach(cotizacion => {
    fechascripto.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    compracripto.push(compra);
    ventacripto.push(venta);
});

let fechascriptoSet = new Set(fechascripto);
let fechascriptoSR = Array.from(fechascriptoSet);

//---------------PREPARO LOS DATOS DEL TARJETA---------------

let tarjeta = favs.filter(cotizacion => cotizacion.nombre == "Tarjeta");
let compratarjeta = []
let ventatarjeta = []
let fechastarjeta = []

tarjeta.forEach(cotizacion => {
    fechastarjeta.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    compratarjeta.push(compra);
    ventatarjeta.push(venta);
});

let fechastarjetaSet = new Set(fechastarjeta);
let fechastarjetaSR = Array.from(fechastarjetaSet);

//---------------PREPARO LOS DATOS DEL EURO---------------

let euro = favs.filter(cotizacion => cotizacion.nombre == "Euro");
let compraeuro = []
let ventaeuro = []
let fechaseuro = []

euro.forEach(cotizacion => {
    fechaseuro.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    compraeuro.push(compra);
    ventaeuro.push(venta);
});

let fechaseuroSet = new Set(fechaseuro);
let fechaseuroSR = Array.from(fechaseuroSet);

//---------------PREPARO LOS DATOS DEL PESO CHILENO---------------
let pesoChileno = favs.filter(cotizacion => cotizacion.nombre == "Peso Chileno");
let comprapesoChileno = []
let ventapesoChileno = []
let fechaspesoChileno = []

pesoChileno.forEach(cotizacion => {
    fechaspesoChileno.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    comprapesoChileno.push(compra);
    ventapesoChileno.push(venta);
});

let fechaspesoChilenoSet = new Set(fechaspesoChileno);
let fechaspesoChilenoSR = Array.from(fechaspesoChilenoSet);

//---------------PREPARO LOS DATOS DEL PESO URUGUAYO---------------

let pesoUruguayo = favs.filter(cotizacion => cotizacion.nombre == "Peso Uruguayo");
let comprapesoUruguayo = []
let ventapesoUruguayo = []
let fechaspesoUruguayo = []

pesoUruguayo.forEach(cotizacion => {
    fechaspesoUruguayo.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    comprapesoUruguayo.push(compra);
    ventapesoUruguayo.push(venta);
});

let fechaspesoUruguayoSet = new Set(fechaspesoUruguayo);
let fechaspesoUruguayoSR = Array.from(fechaspesoUruguayoSet);

//---------------PREPARO LOS DATOS DEL REAL---------------
let real = favs.filter(cotizacion => cotizacion.nombre == "Real Brasileño");
let comprareal = []
let ventareal = []
let fechasreal = []

real.forEach(cotizacion => {
    fechasreal.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    comprareal.push(compra);
    ventareal.push(venta);
});

let fechasrealSet = new Set(fechasreal);
let fechasrealSR = Array.from(fechasrealSet);

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


//---------------PREPARO LA GRILLA---------------




// Función para filtrar objetos por el valor del atributo parametro
function filtrador(array, parametroBuscar) {
    return array.filter(cotizacion => cotizacion.nombre === parametroBuscar);
}
let tablaMain = document.getElementById("tabla-main");

//en c/u de estas vars se va a guardar un array que contiene los objetos de las cotizaciones seleccionadas
let cotizacionesBlue = filtrador(favs,"Blue");
let cotizacionesOficial = filtrador(favs,"Oficial");
let cotizacionesCCL = filtrador(favs,"Contado con liquidación");
let cotizacionesBolsa = filtrador(favs,"Bolsa");
let cotizacionesCripto = filtrador(favs,"Cripto");
let cotizacionesTarjeta = filtrador(favs,"Tarjeta");
let cotizacionesEuro = filtrador(favs,"Euro");
let cotizacionesPesoChileno = filtrador(favs,"Peso Chileno");
let cotizacionesPesoUruguayo = filtrador(favs,"Peso Uruguayo");
let cotizacionesReales = filtrador(favs,"Real Brasileño");

//cotizacionesBlue
var x = 0
var j = 0;
while (j < cotizacionesBlue.length) {
    //este if realmente no es necesario quedó de antes porque lo habia pesado hacer con un while que recorra a el array favs
    if (cotizacionesBlue[j].nombre == "Blue") {
        let tabla = document.createElement("tr");
        let fechaTabla = document.createElement("tr");

        tabla.setAttribute("class",`${cotizacionesBlue[j].nombre} todas`, );
        fechaTabla.setAttribute("class",`${cotizacionesBlue[j].nombre} todas`);
      
        let precioAyer 
        if (j > 0) {
         precioAyer = cotizacionesBlue[j-1].venta
        }else{
         precioAyer = 0
        }


        tabla.innerHTML=
        `
        <td>${cotizacionesBlue[j].fecha.slice(0,10)}</td>
        <td>$${cotizacionesBlue[j].compra}</td>
        <td>$${cotizacionesBlue[j].venta}</td>
        <td><button><img src="${variacion(cotizacionesBlue[j].venta, precioAyer)}" alt="variacion"></button></td>
        `
        //le paso el precion de venta de hoy y el de mañana para poder saber si la moneda

        if (x == 0) {
            fechaTabla.innerHTML=
            `
            <td class="fecha" class="${cotizacionesBlue[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesBlue[j].nombre}">${cotizacionesBlue[j].nombre}</td>
            <td class="fecha" class="${cotizacionesBlue[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesBlue[j].nombre}"></td>
            `
            x = 1
        }
        tablaMain.appendChild(fechaTabla);
        tablaMain.appendChild(tabla);
    }
    j = j+1;
}
//cotizacionesOficial
var x = 0
var j = 0;
while (j < cotizacionesOficial.length) {

    if (cotizacionesOficial[j].nombre == "Oficial") {
        let tabla = document.createElement("tr");
        let fechaTabla = document.createElement("tr");

        tabla.setAttribute("class",`${cotizacionesOficial[j].nombre} todas`);
        fechaTabla.setAttribute("class",`${cotizacionesOficial[j].nombre} todas`);
      
        let precioAyer 
        if (j > 0) {
         precioAyer = cotizacionesOficial[j-1].venta
        }else{
         precioAyer = 0
        }


        tabla.innerHTML=
        `
        <td>${cotizacionesOficial[j].fecha.slice(0,10)}</td>
        <td>$${cotizacionesOficial[j].compra}</td>
        <td>$${cotizacionesOficial[j].venta}</td>
        <td><button><img src="${variacion(cotizacionesOficial[j].venta, precioAyer)}" alt="variacion"></button></td>
        `
        //le paso el precion de venta de hoy y el de mañana para poder saber si la moneda

        if (x == 0) {
            fechaTabla.innerHTML=
            `
            <td class="fecha" class="${cotizacionesOficial[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesOficial[j].nombre}">${cotizacionesOficial[j].nombre}</td>
            <td class="fecha" class="${cotizacionesOficial[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesOficial[j].nombre}"></td>
            `
            x = 1
        }
        tablaMain.appendChild(fechaTabla);
        tablaMain.appendChild(tabla);
    }
    j = j+1;
}

//cotizacionesCCL
var x = 0
var j = 0;
while (j < cotizacionesCCL.length) {

    if (cotizacionesCCL[j].nombre == "Contado con liquidación") {
        let tabla = document.createElement("tr");
        let fechaTabla = document.createElement("tr");

        tabla.setAttribute("class","ccl todas");
        fechaTabla.setAttribute("class","ccl todas");
      
        let precioAyer 
        if (j > 0) {
         precioAyer = cotizacionesCCL[j-1].venta
        }else{
         precioAyer = 0
        }


        tabla.innerHTML=
        `
        <td>${cotizacionesCCL[j].fecha.slice(0,10)}</td>
        <td>$${cotizacionesCCL[j].compra}</td>
        <td>$${cotizacionesCCL[j].venta}</td>
        <td><button><img src="${variacion(cotizacionesCCL[j].venta, precioAyer)}" alt="variacion"></button></td>
        `
        //le paso el precion de venta de hoy y el de mañana para poder saber si la moneda

        if (x == 0) {
            fechaTabla.innerHTML=
            `
            <td class="fecha" class="${cotizacionesCCL[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesCCL[j].nombre}">CCL</td>
            <td class="fecha" class="${cotizacionesCCL[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesCCL[j].nombre}"></td>
            `
            x = 1
        }
        tablaMain.appendChild(fechaTabla);
        tablaMain.appendChild(tabla);
    }
    j = j+1;
}

//cotizacionesBOLSA
var x = 0
var j = 0;
while (j < cotizacionesBolsa.length) {

    if (cotizacionesBolsa[j].nombre == "Bolsa") {
        let tabla = document.createElement("tr");
        let fechaTabla = document.createElement("tr");

        tabla.setAttribute("class",`${cotizacionesBolsa[j].nombre} todas`);
        fechaTabla.setAttribute("class",`${cotizacionesBolsa[j].nombre} todas`);
      
        let precioAyer 
        if (j > 0) {
         precioAyer = cotizacionesBolsa[j-1].venta
        }else{
         precioAyer = 0
        }


        tabla.innerHTML=
        `
        <td>${cotizacionesBolsa[j].fecha.slice(0,10)}</td>
        <td>$${cotizacionesBolsa[j].compra}</td>
        <td>$${cotizacionesBolsa[j].venta}</td>
        <td><button><img src="${variacion(cotizacionesBolsa[j].venta, precioAyer)}" alt="variacion"></button></td>
        `
        //le paso el precion de venta de hoy y el de mañana para poder saber si la moneda

        if (x == 0) {
            fechaTabla.innerHTML=
            `
            <td class="fecha" class="${cotizacionesBolsa[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesBolsa[j].nombre}">${cotizacionesBolsa[j].nombre}</td>
            <td class="fecha" class="${cotizacionesBolsa[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesBolsa[j].nombre}"></td>
            `
            x = 1
        }
        tablaMain.appendChild(fechaTabla);
        tablaMain.appendChild(tabla);
    }
    j = j+1;
}

//cotizacionesCripto
var x = 0
var j = 0;
while (j < cotizacionesCripto.length) {

    if (cotizacionesCripto[j].nombre == "Cripto") {
        let tabla = document.createElement("tr");
        let fechaTabla = document.createElement("tr");

        tabla.setAttribute("class",`${cotizacionesCripto[j].nombre} todas`);
        fechaTabla.setAttribute("class",`${cotizacionesCripto[j].nombre} todas`);
      
        let precioAyer 
        if (j > 0) {
         precioAyer = cotizacionesCripto[j-1].venta
        }else{
         precioAyer = 0
        }


        tabla.innerHTML=
        `
        <td>${cotizacionesCripto[j].fecha.slice(0,10)}</td>
        <td>$${cotizacionesCripto[j].compra}</td>
        <td>$${cotizacionesCripto[j].venta}</td>
        <td><button><img src="${variacion(cotizacionesCripto[j].venta, precioAyer)}" alt="variacion"></button></td>
        `
        //le paso el precion de venta de hoy y el de mañana para poder saber si la moneda

        if (x == 0) {
            fechaTabla.innerHTML=
            `
            <td class="fecha" class="${cotizacionesCripto[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesCripto[j].nombre}">${cotizacionesCripto[j].nombre}</td>
            <td class="fecha" class="${cotizacionesCripto[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesCripto[j].nombre}"></td>
            `
            x = 1
        }
        tablaMain.appendChild(fechaTabla);
        tablaMain.appendChild(tabla);
    }
    j = j+1;
}

//cotizacionesTarjeta
var x = 0
var j = 0;
while (j < cotizacionesTarjeta.length) {

    if (cotizacionesTarjeta[j].nombre == "Tarjeta") {
        let tabla = document.createElement("tr");
        let fechaTabla = document.createElement("tr");

        tabla.setAttribute("class",`${cotizacionesTarjeta[j].nombre} todas`);
        fechaTabla.setAttribute("class",`${cotizacionesTarjeta[j].nombre} todas`);
      
        let precioAyer 
        if (j > 0) {
         precioAyer = cotizacionesTarjeta[j-1].venta
        }else{
         precioAyer = 0
        }


        tabla.innerHTML=
        `
        <td>${cotizacionesTarjeta[j].fecha.slice(0,10)}</td>
        <td>$${cotizacionesTarjeta[j].compra}</td>
        <td>$${cotizacionesTarjeta[j].venta}</td>
        <td><button><img src="${variacion(cotizacionesTarjeta[j].venta, precioAyer)}" alt="variacion"></button></td>
        `
        //le paso el precion de venta de hoy y el de mañana para poder saber si la moneda

        if (x == 0) {
            fechaTabla.innerHTML=
            `
            <td class="fecha" class="${cotizacionesTarjeta[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesTarjeta[j].nombre}">${cotizacionesTarjeta[j].nombre}</td>
            <td class="fecha" class="${cotizacionesTarjeta[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesTarjeta[j].nombre}"></td>
            `
            x = 1
        }
        tablaMain.appendChild(fechaTabla);
        tablaMain.appendChild(tabla);
    }
    j = j+1;
}

//cotizacionesEURO
var x = 0
var j = 0;
while (j < cotizacionesEuro.length) {

    if (cotizacionesEuro[j].nombre == "Euro") {
        let tabla = document.createElement("tr");
        let fechaTabla = document.createElement("tr");

        tabla.setAttribute("class",`${cotizacionesEuro[j].nombre} todas`);
        fechaTabla.setAttribute("class",`${cotizacionesEuro[j].nombre} todas`);
      
        let precioAyer 
        if (j > 0) {
         precioAyer = cotizacionesEuro[j-1].venta
        }else{
         precioAyer = 0
        }

        tabla.innerHTML=
        `
        <td>${cotizacionesEuro[j].fecha.slice(0,10)}</td>
        <td>$${cotizacionesEuro[j].compra}</td>
        <td>$${cotizacionesEuro[j].venta}</td>
        <td><button><img src="${variacion(cotizacionesEuro[j].venta, precioAyer)}" alt="variacion"></button></td>
        `
        //le paso el precion de venta de hoy y el de mañana para poder saber si la moneda

        if (x == 0) {
            fechaTabla.innerHTML=
            `
            <td class="fecha" class="${cotizacionesEuro[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesEuro[j].nombre}">${cotizacionesEuro[j].nombre}</td>
            <td class="fecha" class="${cotizacionesEuro[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesEuro[j].nombre}"></td>
            `
            x = 1
        }
        tablaMain.appendChild(fechaTabla);
        tablaMain.appendChild(tabla);
    }
    j = j+1;
}

//cotizacionesPesoChileno
var x = 0
var j = 0;
while (j < cotizacionesPesoChileno.length) {

    if (cotizacionesPesoChileno[j].nombre == "Peso Chileno") {
        let tabla = document.createElement("tr");
        let fechaTabla = document.createElement("tr");

        tabla.setAttribute("class","pesoChileno todas");
        fechaTabla.setAttribute("class","pesoChileno todas");
      
        let precioAyer 
        if (j > 0) {
         precioAyer = cotizacionesPesoChileno[j-1].venta
        }else{
         precioAyer = 0
        }

        tabla.innerHTML=
        `
        <td>${cotizacionesPesoChileno[j].fecha.slice(0,10)}</td>
        <td>$${cotizacionesPesoChileno[j].compra}</td>
        <td>$${cotizacionesPesoChileno[j].venta}</td>
        <td><button><img src="${variacion(cotizacionesPesoChileno[j].venta, precioAyer)}" alt="variacion"></button></td>
        `
        //le paso el precion de venta de hoy y el de mañana para poder saber si la moneda

        if (x == 0) {
            fechaTabla.innerHTML=
            `
            <td class="fecha" class="${cotizacionesPesoChileno[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesPesoChileno[j].nombre}">CLP</td>
            <td class="fecha" class="${cotizacionesPesoChileno[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesPesoChileno[j].nombre}"></td>
            `
            x = 1
        }
        tablaMain.appendChild(fechaTabla);
        tablaMain.appendChild(tabla);
    }
    j = j+1;
}

//cotizacionesPesoUruguayo
var x = 0
var j = 0;
while (j < cotizacionesPesoUruguayo.length) {

    if (cotizacionesPesoUruguayo[j].nombre == "Peso Uruguayo") {
        let tabla = document.createElement("tr");
        let fechaTabla = document.createElement("tr");

        tabla.setAttribute("class","pesoUruguayo todas");
        fechaTabla.setAttribute("class","pesoUruguayo todas");
      
        let precioAyer 
        if (j > 0) {
         precioAyer = cotizacionesPesoUruguayo[j-1].venta
        }else{
         precioAyer = 0
        }

        tabla.innerHTML=
        `
        <td>${cotizacionesPesoUruguayo[j].fecha.slice(0,10)}</td>
        <td>$${cotizacionesPesoUruguayo[j].compra}</td>
        <td>$${cotizacionesPesoUruguayo[j].venta}</td>
        <td><button><img src="${variacion(cotizacionesPesoUruguayo[j].venta, precioAyer)}" alt="variacion"></button></td>
        `
        //le paso el precion de venta de hoy y el de mañana para poder saber si la moneda

        if (x == 0) {
            fechaTabla.innerHTML=
            `
            <td class="fecha" class="${cotizacionesPesoUruguayo[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesPesoUruguayo[j].nombre}">UYN</td>
            <td class="fecha" class="${cotizacionesPesoUruguayo[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesPesoUruguayo[j].nombre}"></td>
            `
            x = 1
        }
        tablaMain.appendChild(fechaTabla);
        tablaMain.appendChild(tabla);
    }
    j = j+1;
}

//cotizacionesReal
var x = 0
var j = 0;
while (j < cotizacionesReales.length) {

    if (cotizacionesReales[j].nombre == "Real Brasileño") {
        let tabla = document.createElement("tr");
        let fechaTabla = document.createElement("tr");

        tabla.setAttribute("class","real todas");
        fechaTabla.setAttribute("class","real todas");

      
        let precioAyer 
        if (j > 0) {
         precioAyer = cotizacionesReales[j-1].venta
        }else{
         precioAyer = 0
        }

        tabla.innerHTML=
        `
        <td>${cotizacionesReales[j].fecha.slice(0,10)}</td>
        <td>$${cotizacionesReales[j].compra}</td>
        <td>$${cotizacionesReales[j].venta}</td>
        <td><button><img src="${variacion(cotizacionesReales[j].venta, precioAyer)}" alt="variacion"></button></td>
        `
        //le paso el precion de venta de hoy y el de mañana para poder saber si la moneda

        if (x == 0) {
            fechaTabla.innerHTML=
            `
            <td class="fecha" class="${cotizacionesReales[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesReales[j].nombre}">REAL</td>
            <td class="fecha" class="${cotizacionesReales[j].nombre}"></td>
            <td class="fecha" class="${cotizacionesReales[j].nombre}"></td>
            `
            x = 1
        }
        tablaMain.appendChild(fechaTabla);
        tablaMain.appendChild(tabla);
    }
    j = j+1;
}

function variacion(hoy,ayer) {
    //console.log("hoy",hoy)
    //console.log("ayer",ayer)
    
    let variacion = hoy-ayer

    //console.log("variacion",variacion)

    if (variacion >= 0) {
        return "..//IMG/flecha_arriba.png" 
    }else{
        return "..//IMG/flecha_abajo.png"
    }
}

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

//pude haber hecho todo esto con un for, si, pero no me di cuenta en su momento y hace 2 horas que estoy haciendolo
//asi va a quedar :), por lo menos por ahora
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

