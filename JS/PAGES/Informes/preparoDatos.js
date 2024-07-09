"use strict";
let todas = document.getElementsByClassName("todas");
let datos = JSON.parse(localStorage.getItem("monedas"));
let compartir = document.getElementById("share");

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