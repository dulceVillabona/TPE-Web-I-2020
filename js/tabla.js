"use strict"

let cervezas = [];


document.getElementById("sumar-button").addEventListener("click", agregar_1_cerveza);
document.getElementById("restar-button").addEventListener("click", restar_1_cerveza);
document.getElementById("sumar-bucle-button").addEventListener("click", agregar_3_cervezas);
document.getElementById("reset-button").addEventListener("click", resetear_cervezas_agregadas)


function agregar_1_cerveza() {

    /* -----------------------------OBTENGO VALORES DEL FORM------------------------- */

    let nombre_cerveza = document.getElementById("beer-name").value;
    let imagen_cerveza = document.getElementById("beer-image").value;
    let alcohol_cerveza = document.getElementById("beer-alcohol").value;
    let IBU_cerveza = document.getElementById("beer-IBU").value;
    let OG_cerveza = document.getElementById("beer-OG").value;
    let FG_cerveza = document.getElementById("beer-FG").value;

/* ----------------------------------CRÉO EL JSON "CERVEZA"-------------------- */

    let cerveza = {
        "nombre": nombre_cerveza,
        "img": imagen_cerveza,
        "alcohol": alcohol_cerveza,
        "IBU": IBU_cerveza,
        "OG": OG_cerveza,
        "FG": FG_cerveza
    }

/* -----------------------------------PUSHEO LA CERVEZA AL ARRAY DE CERVEZAS------------------- */

    cervezas.push(cerveza);
    console.log(cervezas[cervezas.length - 1].IBU);

/* -----------------------------------CRÉO EL HTML Y SU CONTENIDO------------------- */

    let crearFila = document.createElement("TR");
    let crearCelda1 = document.createElement("TD");
    let textoCelda1 = document.createTextNode(cervezas[cervezas.length - 1].nombre);
    let crearCelda2 = document.createElement("TD");
    let textoCelda2 = document.createTextNode(cervezas[cervezas.length -1].img);
    let crearCelda3 = document.createElement("TD");
    let textoCelda3 = document.createTextNode(cervezas[cervezas.length - 1].alcohol);
    let crearCelda4 = document.createElement("TD");
    let textoCelda4 = document.createTextNode(cervezas[cervezas.length - 1].IBU);
    let crearCelda5 = document.createElement("TD");
    let textoCelda5 = document.createTextNode(cervezas[cervezas.length - 1].OG);
    let crearCelda6 = document.createElement("TD");
    let textoCelda6 = document.createTextNode(cervezas[cervezas.length - 1].FG);

/* -------------------------------------ÚNO EL CONTENIDO AL HTML----------------- */

    crearCelda1.appendChild(textoCelda1);
    crearCelda2.appendChild(textoCelda2);
    crearCelda3.appendChild(textoCelda3);
    crearCelda4.appendChild(textoCelda4);
    crearCelda5.appendChild(textoCelda5);
    crearCelda6.appendChild(textoCelda6);
    
/* -------------------------------------ÚNO TODOS LOS "TD" AL "TR"----------------- */

    crearFila.appendChild(crearCelda1);
    crearFila.appendChild(crearCelda2);
    crearFila.appendChild(crearCelda3);
    crearFila.appendChild(crearCelda4);
    crearFila.appendChild(crearCelda5);
    crearFila.appendChild(crearCelda6);

/* -------------------------------------INSERTO EL "TR" AL HTML DE LA TABLA
                                                Y LE AGREGO UN ID-------------------- */

    crearFila.setAttribute("id", cervezas.length)
    document.getElementById("tabla-body").appendChild(crearFila);



}

function restar_1_cerveza() {

/* -------------------------------------SELECCIONO AL ULTIMO "TR"----------------- */

    let ultimoTR = document.getElementById(cervezas.length);
    
/* -------------------------------------ELIMINO EL "TR" Y LA CERVEZA----------------- */
    
    ultimoTR.remove();
    cervezas.pop();
    
}

function agregar_3_cervezas() {

    let bucle_number = document.getElementById("bucle-number").value;

    for (let i = 0; i < bucle_number; i++) {
        agregar_1_cerveza();
    }
    
}

function resetear_cervezas_agregadas() {

    for (let i = cervezas.lenght; i != 0; i--) {
        restar_1_cerveza();
    }

}