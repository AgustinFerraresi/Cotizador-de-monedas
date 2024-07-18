"use strict";

let selectorMonedas = document.getElementById("selector-monedas");
selectorMonedas = "dolar-blue"
let x = "a"

let respuesta = {} //aca se guardaran los datos de cada moneda

async function main() {
    let links = {
        oficial:"https://api.argentinadatos.com/v1/cotizaciones/dolares/oficial",
        blue: "https://api.argentinadatos.com/v1/cotizaciones/dolares/blue",
        bolsa: "https://api.argentinadatos.com/v1/cotizaciones/dolares/bolsa",
        cripto: "https://api.argentinadatos.com/v1/cotizaciones/dolares/cripto",
        mayorista:"https://api.argentinadatos.com/v1/cotizaciones/dolares/mayorista",
        solidario:"https://api.argentinadatos.com/v1/cotizaciones/dolares/solidario",
        //turista:"https://api.argentinadatos.com/v1/cotizaciones/dolares/turista" 
        //11/7 esta dando error su llamada la api 14/7 turista sigue dando problemas
    }

    for (const [moneda,link] of  Object.entries(links)) {
        try {
            let response = await fetch(link);
            respuesta[moneda] = await response.json(); 
        
        } catch (error) {
            alert(`Error con: ${moneda}`);
            console.log(`Error con: ${moneda}`)
            console.error();
        }
    }
    console.log("respuesta: ",respuesta)
}

/*los datos se almacenaran de la siguiente manera: el objeto respueste tiene atributos, cada uno es una moneda, dentro de 
cada moneda hay un array dentro de el hay objetos, cada uno de esos objetos en un dia y tiene de atributos
casa, compra, venta y fecha*/

main()


    // Estructura para almacenar los datos por año y tipo de moneda
    let years = {
        "2011": { blue: [], oficial: [] },
        "2012": { blue: [], oficial: [] }
    };

    for (let moneda in respuesta) {

        if (respuesta.hasOwnProperty(moneda)) {

            respuesta[moneda].forEach(dia => {

                let year = dia.fecha.slice(0, 4);
                if (years[year]) {

                    if (years[year][moneda]) {

                        years[year][moneda].push(dia);
                    } else {

                        years[year][moneda] = [dia];
                    }
                }
            });
        }
    }



main();






















/****************************************************************************/
/*Gráfica con varias líneas*/
//Axis X
let etiquetas = [1,2,3,4,5,6];
etiquetas = 2
//Datos
let datosLinea1 = [100, 150, 120, 200, 10, 20, 100];
let datosLinea2 = [80, 120, 140, 180, 0, 50, 56];
let datosLinea3 = [88, 100, 14, 200, 20, 0, 80];
const ctx = document.getElementById("miGrafica").getContext("2d");
new Chart(ctx, {
    type: "line",
    data: {
        labels: "a",
        datasets: [
            //Porción de código que se repite por cada ítem que se requiere dibujar
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
        ]
    }
});


