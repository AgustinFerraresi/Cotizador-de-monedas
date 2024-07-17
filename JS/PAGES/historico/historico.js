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

//averiguar esto let etiquetas = respuesta.blue.map(entry => entry.fecha); 

let fechasBlue = [];
let fechasBolsa = [];
let fechasCripto = [];
let fechasMayorista = [];
let fechasOficial = [];
let fechasSolidario = [];

let compraBlue = [];
let compraBolsa = [];
let compraCripto = [];
let compraMayorista = [];
let compraOficial = [];
let compraSolidario = [];

let ventaBlue = [];
let ventaBolsa = [];
let ventaCripto = [];
let ventaMayorista = [];
let ventaOficial = [];
let ventaSolidario = [];


/*en cada año se guardara todas las monedas aunque no haya cotizaciones en ese año (en ese caso el valor que se le pasa en null)*/

//recorrer respuesta y guardar todas las monedas de un año en un array

for (const moneda in respuesta) {
    if (respuesta.hasOwnProperty(moneda)) {
        if (moneda.fecha.slice()) {
            
        }
        
    }
}


let blue = {
    compra,
    venta,
    fecha,
}

let years = {
    "2010":blue
}

async function grafica() {
    await main();
    
    for (const key in respuesta) {
        if (key == "blue") {
            for (let i = 0; i < respuesta.blue.length; i++) {
                fechasBlue.push(respuesta.blue[i].fecha);
                compraBlue.push(respuesta.blue[i].compra);
                ventaBlue.push(respuesta.blue[i].venta);
            }
        }else if(key == "bolsa"){
            for (let i = 0; i < respuesta.bolsa.length; i++) {
                fechasBolsa.push(respuesta.bolsa[i]);
                compraBolsa.push(respuesta.bolsa[i].compra);
                ventaBolsa.push(respuesta.bolsa[i].venta);
            }
        }else if(key == "cripto"){
            for (let i = 0; i < respuesta.cripto.length; i++) {
                fechasCripto.push(respuesta.cripto[i]);
                compraCripto.push(respuesta.cripto[i].compra);
                ventaCripto.push(respuesta.cripto[i].venta);
            }
        }else if(key == "mayorista"){
            for (let i = 0; i < respuesta.mayorista.length; i++) {
                fechasMayorista.push(respuesta.mayorista[i]);
                compraMayorista.push(respuesta.mayorista[i].compra);
                ventaMayorista.push(respuesta.mayorista[i].venta);
            }
        }else if(key == "oficial"){
            for (let i = 0; i < respuesta.oficial.length; i++) {
                fechasOficial.push(respuesta.oficial[i]);
                compraOficial.push(respuesta.oficial[i].compra);
                ventaOficial.push(respuesta.oficial[i].venta);
            }
        }else if(key == "solidario"){
            for (let i = 0; i < respuesta.solidario.length; i++) {
                fechasSolidario.push(respuesta.solidario[i].fecha);
                compraSolidario.push(respuesta.solidario[i].compra);
                ventaSolidario.push(respuesta.solidario[i].venta);
            }
        }
    }
}

grafica();

let compraBlueSet = new Set(compraBlue)

let compraBlueSR = Array.from(compraBlueSet)
console.log("compraBlueSR",compraBlueSR)



/****************************************************************************/
/*Gráfica con varias líneas*/
//Axis X
let etiquetas = [1,2,3,4,5,6];
etiquetas = fechasSolidario
//Datos
let datosLinea1 = [100, 150, 120, 200, 10, 20, 100];
let datosLinea2 = [80, 120, 140, 180, 0, 50, 56];
let datosLinea3 = [88, 100, 14, 200, 20, 0, 80];
const ctx = document.getElementById("miGrafica").getContext("2d");
new Chart(ctx, {
    type: "line",
    data: {
        labels: fechasBlue,
        datasets: [
            //Porción de código que se repite por cada ítem que se requiere dibujar
            //BLUE 0 y 1
            { 
                label: "Dolar Blue (compra)",
                data: compraBlue,
                borderColor: "green",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false
            },
            {
                label: "Dolar Blue (venta)",
                data: ventaBlue,
                borderColor: "red",
                backgroundColor: '',
                borderWidth: 2,
                fill: true,
                hidden: false 
            },
        ]
    }
});


