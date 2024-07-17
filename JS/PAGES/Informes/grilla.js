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

if (!favs.length) {
    let mensaje = document.createElement("p");
    mensaje.className = "noCotizaciones"
    mensaje.innerHTML = "no hay cotizaciones guardadas";
    tablaMain.appendChild(mensaje);
}



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