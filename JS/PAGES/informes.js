"use strict";

let datos = JSON.parse(localStorage.getItem("monedas"));

console.log("datos")
console.log(datos)

let fechasDuplicadas = [];

/*recorro el array datos tomando las fechas de cada item y guardandolas en fechasDuplicadas 
*/
for (let i = 0; i < datos.length; i++) {
    
    let datosFecha = datos[i].fecha
    
    let fecha = datosFecha.slice(0,10);
    fechasDuplicadas.push(fecha);
}

//elimino los los duplicados de fechasDuplicadas gracias a que lo convierto en un set (conjunto)
let setFechas = new Set(fechasDuplicadas);
console.log(setFechas)

//transformo el set setFechas en array nuevamente
let fechas = Array.from(setFechas);
console.log(fechas)


//Axis X ["2024-06-29","2024-06-30","2024-07-1"]

const etiquetas = fechas; //aca estaran todas las fechas que se usaron sin duplicados

//Datos
const datosLinea1 = [1000, 1500, 1200, 200, 10, 20, 100];
const datosLinea2 = [800, 1200, 1400, 180, 0, 50, 56];
const datosLinea3 = [808, 1000, 140, 200, 20, 0, 80];
const ctx = document.getElementById("miGrafica").getContext("2d");

new Chart(ctx, {
    type: "line",
    data: {
        labels: etiquetas,
        datasets: [
            //Porción de código que se repite por cada ítem que se requiere dibujar
            { 
                //Ejemplo de gráfica con relleno
                label: "Dolar Blue",
                data: datosLinea1,
                borderColor: "rgba(54, 162, 235, 1)",
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
                borderWidth: 1,
                fill: true

            },
            {
                label: "Dolar Oficial",
                data: datosLinea2,
                borderColor: "green",
                borderWidth: 1,
                fill: false

            },
            {
                label: "Euro",
                data: datosLinea3,
                borderColor: "red",
                fill: false
                
            }
        ]
    }
});


































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