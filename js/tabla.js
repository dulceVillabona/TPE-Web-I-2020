"use strict"



let cervezas = [
    {
        "nombre": "American IPA",
        "img": "../img/American_IPA.png",
        "alcohol": "5.5-7.5 %",
        "IBU": "40.0-65.0",
        "OG": "1.056-1.075",
        "FG": "1.010-1.018"
    },{
        "nombre": "Belgian Stout",
        "img": "../img/Belgian-Stout.png",
        "alcohol": "6.0-7.5 %",
        "IBU": "20.0-30.0",
        "OG": "1.062-1.075",
        "FG": "1.008-1.016"
    },{
        "nombre": "Golden Ale",
        "img": "../img/Golden_Ale.png",
        "alcohol": "4.2-5.0 %",
        "IBU": "20.0-25.0",
        "OG": "1.041-1.050",
        "FG": "1.009-1.018"
    },{
        "nombre": "Honey",
        "img": "../img/Honey.PNG",
        "alcohol": "4.5-5.8 %",
        "IBU": "30.0-35.0",
        "OG": "1.050-1.060",
        "FG": "1.005-1.015"
    },{
        "nombre": "Irish Red",
        "img": "../img/Irish-Red.png",
        "alcohol": "8.0–12.0 %",
        "IBU": "50.0–85.0",
        "OG": "1.075 – 1.115",
        "FG": "1.018 – 1.030"
    },{
        "nombre": "Kölsch",
        "img": "../img/Kolsch.PNG",
        "alcohol": "3.5–5.0 %",
        "IBU": "18.0-30.0",
        "OG": "1.044–1.050",
        "FG": "1.007–1.011"
    }
];
datos_precargados();

function datos_precargados() {
    for (let i = 0; i < 6; i++) {
        let crearFila = document.createElement("TR");
        let crearCelda1 = document.createElement("TD");
        let textoCelda1 = document.createTextNode(cervezas[i].nombre);
        let crearCelda2 = document.createElement("TD");
        let crearIMG = document.createElement("IMG");
        let imgAtt = document.createAttribute("src");
        imgAtt.value = cervezas[i].img;
        crearIMG.setAttributeNode(imgAtt);
        let crearCelda3 = document.createElement("TD");
        let textoCelda3 = document.createTextNode(cervezas[i].alcohol);
        let crearCelda4 = document.createElement("TD");
        let textoCelda4 = document.createTextNode(cervezas[i].IBU);
        let crearCelda5 = document.createElement("TD");
        let textoCelda5 = document.createTextNode(cervezas[i].OG);
        let crearCelda6 = document.createElement("TD");
        let textoCelda6 = document.createTextNode(cervezas[i].FG);

        crearCelda1.appendChild(textoCelda1);
        crearCelda2.appendChild(crearIMG);
        crearCelda3.appendChild(textoCelda3);
        crearCelda4.appendChild(textoCelda4);
        crearCelda5.appendChild(textoCelda5);
        crearCelda6.appendChild(textoCelda6);

        crearFila.appendChild(crearCelda1);
        crearFila.appendChild(crearCelda2);
        crearFila.appendChild(crearCelda3);
        crearFila.appendChild(crearCelda4);
        crearFila.appendChild(crearCelda5);
        crearFila.appendChild(crearCelda6);

        crearFila.setAttribute("id", i)
        document.getElementById("tabla-body").appendChild(crearFila);
    }
}


document.getElementById("sumar-button").addEventListener("click", agregar_1_cerveza);
document.getElementById("restar-button").addEventListener("click", restar_1_cerveza);
document.getElementById("sumar-bucle-button").addEventListener("click", agregar_3_cervezas);
document.getElementById("reset-button").addEventListener("click", resetear_cervezas);




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

/* -----------------------------------CRÉO EL HTML Y SU CONTENIDO------------------- */

    let crearFila = document.createElement("TR");
    let crearCelda1 = document.createElement("TD");
    let textoCelda1 = document.createTextNode(cervezas[cervezas.length - 1].nombre);
    let crearCelda2 = document.createElement("TD");
    let imgCelda2 = document.createElement("IMG");
    imgCelda2.setAttribute("src", cervezas[cervezas.length - 1].img);
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
        crearCelda2.appendChild(imgCelda2);
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

    crearFila.setAttribute("id", cervezas.length - 1)
    document.getElementById("tabla-body").appendChild(crearFila);


}

function restar_1_cerveza() {

/* -------------------------------------SELECCIONO AL ULTIMO "TR"----------------- */

    let ultimoTR = document.getElementById(cervezas.length - 1);
    
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

function resetear_cervezas() {

    for (let i = cervezas.length; i != 0; i--) {

        restar_1_cerveza();
    }

}