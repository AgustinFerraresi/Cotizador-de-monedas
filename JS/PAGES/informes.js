"use strict";

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

console.log("favs")
console.log(favs)




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
console.log("fechas")
console.log(fechas)



let blue = favs.filter(cotizacion => cotizacion.nombre == "Blue");

console.log("dolar blue")
console.log(blue)

let compraBlue = []
let ventaBlue = []

let fechasBlue = []

blue.forEach(cotizacion => {
    //guardo las fechas del dolar blue
    fechasBlue.push(cotizacion.fecha.slice(0,10));

    let compra = cotizacion.compra;
    let venta = cotizacion.venta;

    //guardo los valores de compra/venta del blue en su array correspondiente
    compraBlue.push(compra);
    ventaBlue.push(venta);
});


//elimino repetidos
let fechasBlueSet = new Set(fechasBlue);

//fechasBlueSR = fechas blue sin repetir
let fechasBlueSR = Array.from(fechasBlueSet);

console.log("fechas dolar blue SR")
console.log(fechasBlue)

//Axis X 
const etiquetas = fechasBlueSR; //aca estaran todas las fechas en las que se marco el blue como una moneda favorita sin repetir fechas

//Datos
const datosLinea1 = compraBlue;
const datosLinea2 = ventaBlue;
const datosLinea3 = [808, 1000, 1400, , 1800, 1900, 1700];
const ctx = document.getElementById("miGrafica").getContext("2d");

new Chart(ctx, {
    type: "line",
    data: {
        labels: etiquetas,
        datasets: [
            //Porción de código que se repite por cada ítem que se requiere dibujar
            { 
                label: "Dolar Blue (compra)",
                data: datosLinea1,
                borderColor: "green",
                backgroundColor: '',
                borderWidth: 1,
                fill: true,
                hidden: false 
            },
            {
                label: "Dolar Blue (venta)",
                data: datosLinea2,
                borderColor: "red",
                backgroundColor: '',
                borderWidth: 1,
                fill: true,
                hidden: false 
            },
        ]
    }
});

/*me falta agregar los precio de manera dinamica tengo que ver como puedo modificar los atributos de los objetos*/

/*-DE ESTA MANERA SE PUEDE ACCEDER A LOS ATRIBUTOS DE LOS OBJETOS DEL DATASETS
 
document.getElementById("modificarDataset").addEventListener("click", () => {
 
    Acceder al dataset "Dolar Oficial"

    let dataset = chart.data.datasets[1]

    // Modificar algunos de sus atributos

    dataset.borderColor = "blue";
    dataset.data = [90, 110, 130, 170, 20, 60, 70]; // Nuevos datos
    dataset.label = "Dolar Oficial Modificado";
    
    // Actualizar la gráfica para reflejar los cambios ES 100% NECESARIO USAR CHART.UPDATE
    chart.update();

*/


/*
IDEAS
Cuando se realizó una búsqueda por una moneda en particular se deberá mostrar la variación de
valores entre la venta y la compra.

para hacer esto hay que crear dos objetos uno con los valores de la compra y otro para los valores de la venta
hay que recordar que cada linea de la grafica son objetos

--------------------------------------------------------------------------------------------------------

Si la búsqueda se realizo por todas las momedas, entonces mostrar únicamente el precio de compra
de esa momeda

en este caso simplemente hay que mostrar el precio de compra de todas las monedas 
--------------------------------------------------------------------------------------------------------

para hacer todo esto seguramente tenga que ir creando dinamicamente los objetos desde cero, pero PRIMERO tengo que ver si puedo
modificar los atributos de los objetos ya existentes quiza esto pueda hacer el trabajo mas facil
*/

















/*
Esta parte del código crea una nueva gráfica de tipo línea utilizando la biblioteca Chart.js.

type: "line": Indica que la gráfica es de tipo línea.

data: Contiene los datos y las etiquetas para la gráfica.

labels: etiquetas: Usa las etiquetas definidas anteriormente para el eje X.

datasets: Un arreglo de objetos que representa cada conjunto de datos que se va a graficar.
Cada objeto dentro del datasets contiene:
label: El nombre de la serie de datos.

data: Los datos a graficar para esa serie.

borderColor: El color de la línea.

backgroundColor: El color de fondo debajo de la línea (usado si fill es true).

borderWidth: El grosor de la línea.

fill: Indica si la línea debe estar rellenada (área debajo de la línea).

En resumen, este código dibuja una gráfica con tres líneas diferentes, cada una representando un conjunto de datos distinto 
(Dolar Blue, Dolar Oficial y Euro) a lo largo de varios meses.
*/