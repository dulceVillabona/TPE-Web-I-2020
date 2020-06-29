"use strict";

let contenedor = document.querySelector("#contenedor");
let mensajeCarga = document.createElement("H1");
mensajeCarga.id = "mensaje-carga";
mensajeCarga.innerHTML = "Loading..";

//                                                                  PRIMER PARTIAL RENDER DE LA PAGINA

setTimeout(function() { homePage(); }, 0);


//                                                                  PARTIAL RENDER DE HOME

let homeLinks = document.getElementsByClassName("home-page");
for (let i = 0; i < homeLinks.length; i++) {
    homeLinks[i].addEventListener("click", homePage);
}


async function homePage(event) {
    //event.preventDefault();
    contenedor.appendChild(mensajeCarga);
    //console.log("se ejecuto")
    try {
        let response = await fetch("home.html");
        if (response.ok) {
            let contenido = await response.text();
            contenedor.innerHTML = contenido;
        } else {
            console.log(response.status);
            mensajeCarga.innerHTML = "Error "+ response.status;
            contenedor.appendChild(mensajeCarga);
        }
        
    } catch (error) {
        console.log(error);
        mensajeCarga.innerHTML = error;
        contenedor.appendChild(mensajeCarga);
    }
}


//                                                                  PARTIAL RENDER DE PRECIOS

let preciosLinks = document.getElementsByClassName("precios-page");
for (let i = 0; i < preciosLinks.length; i++) {
    preciosLinks[i].addEventListener("click", preciosPage);
}

async function preciosPage(event) {
    event.preventDefault();
    contenedor.appendChild(mensajeCarga);
    try {
        let response = await fetch("precios.html");
        if (response.ok) {
            let contenido = await response.text();
            contenedor.innerHTML = contenido;
        } else {
            console.log(response.status);
            mensajeCarga.innerHTML = "Error "+ response.status;
            contenedor.appendChild(mensajeCarga);
        }
    } catch (error) {
        console.log(error);
        mensajeCarga.innerHTML = error;
        contenedor.appendChild(mensajeCarga);
    }
}


//                                                                  PARTIAL RENDER DE PACKS

let packsLinks = document.getElementsByClassName("packs-page");
for (let i = 0; i < packsLinks.length; i++) {
    packsLinks[i].addEventListener("click", packsPage);
}

async function packsPage(event) {
    event.preventDefault();
    contenedor.appendChild(mensajeCarga);
    try {
        let response = await fetch("packs.html");
        if (response.ok) {
            let contenido = await response.text();
            contenedor.innerHTML = contenido;
        } else {
            console.log(response.status);
            mensajeCarga.innerHTML = "Error "+ response.status;
            contenedor.appendChild(mensajeCarga);
        }
    } catch (error) {
        console.log(error);
        mensajeCarga.innerHTML = error;
        contenedor.appendChild(mensajeCarga);
    }
}


//                                                                  PARTIAL RENDER DE KIT

let kitLinks = document.getElementsByClassName("kit-page");
for (let i = 0; i < kitLinks.length; i++) {
    kitLinks[i].addEventListener("click", kitPage);
}

async function kitPage(event) {
    event.preventDefault();
    contenedor.appendChild(mensajeCarga);
    try {
        let response = await fetch("kit.html");
        if (response.ok) {
            let contenido = await response.text();
            contenedor.innerHTML = contenido;
        } else {
            console.log(response.status);
            mensajeCarga.innerHTML = "Error "+ response.status;
            contenedor.appendChild(mensajeCarga);
        }
    } catch (error) {
        console.log(error);
        mensajeCarga.innerHTML = error;
        contenedor.appendChild(mensajeCarga);
    }
}


//                                                                  PARTIAL RENDER DE TABLA

let tablaLinks = document.getElementsByClassName("tabla-page");
for (let i = 0; i < tablaLinks.length; i++) {
    tablaLinks[i].addEventListener("click", tablaPage);
}

async function tablaPage(event) {
    event.preventDefault();
    contenedor.appendChild(mensajeCarga);
    try {
        let response = await fetch("tabla.html");
        if (response.ok) {
            let contenido = await response.text();
            contenedor.innerHTML = contenido;
            
            setTimeout(function() { cargarTabla(); }, 0);


            let cervezas = [
                {
                    name: "American Ipa",
                    imageSrc: "https://res.cloudinary.com/duli/image/upload/v1591565278/American_IPA_yzg7g8.png",
                    alcohol: "5.5-7.5 %",
                    ibu: "40.0-65.0",
                    og: "1.056-1.075",
                    fg: "1.010-1.018",
                    sinStock: false,
                },
                {
                    name: "Belgian Stout",
                    imageSrc: "https://res.cloudinary.com/duli/image/upload/v1591565277/Belgian-Stout_yxbqcd.png",
                    alcohol: "6.0-7.5 %",
                    ibu: "20.0-30.0",
                    og: "1.062-1.075",
                    fg: "1.008-1.016",
                    sinStock: false,
                },
                {
                    name: "Golden Ale",
                    imageSrc: "https://res.cloudinary.com/duli/image/upload/v1591565279/Golden_Ale_egqxw3.png",
                    alcohol: "4.2-5.0 %",
                    ibu: "20.0-25.0",
                    og: "1.041-1.050",
                    fg: "1.009-1.018",
                    sinStock: true,
                },
                {
                    name: "Honey",
                    imageSrc: "https://res.cloudinary.com/duli/image/upload/v1591565281/Honey_fsghft.png",
                    alcohol: "4.5-5.8 %",
                    ibu: "30.0-35.0",
                    og: "1.050-1.060",
                    fg: "1.005-1.015",
                    sinStock: true,
                },
                {
                    name: "Irish Red",
                    imageSrc: "https://res.cloudinary.com/duli/image/upload/v1591565281/Irish-Red_brdejm.png",
                    alcohol: "8.0–12.0 %",
                    ibu: "50.0–85.0",
                    og: "1.075 – 1.11",
                    fg: "1.018 – 1.030",
                    sinStock: false,
                },
                {
                    name: "Kölsch",
                    imageSrc: "https://res.cloudinary.com/duli/image/upload/v1591565282/Kolsch_bmqcel.png",
                    alcohol: "3.5–5.0 %",
                    ibu: "18.0-30.0",
                    og: "1.044–1.050",
                    fg: "1.007–1.011",
                    sinStock: true,
                },
                ];
            
            function cargarTabla() {
                let mensaje = contenedor.querySelector("#sin-cervezas");
                let table = contenedor.querySelector("#tabla-comparacion");
                let switchDiv = contenedor.querySelector("#stock-switch");
                table.innerHTML = "";
                mensaje.innerHTML = "";
                switchDiv.classList.remove("ocultar");
                console.log(cervezas)
                if (cervezas.length > 0) {
                    let crearThead = document.createElement("THEAD");
                    let crearTR = document.createElement("TR");
            
                    let titulosThead = ["Cerveza", "Color", "Alcohol", "IBU", "OG", "FG"];
            
                    for (let i = 0; i < titulosThead.length; i++) {
                    let nuevoTh = document.createElement("TH");
                    nuevoTh.innerHTML = titulosThead[i];
                    crearTR.appendChild(nuevoTh);
                    }
            
                    crearThead.appendChild(crearTR);
            
                    table.appendChild(crearThead);
            
                    let tableBody = table.createTBody();
                    tableBody.id = "tabla-body";
            
                    for (let i = 0; i < cervezas.length; i++) {
                    let row = tableBody.insertRow();
                    if (cervezas[i].sinStock === false) {
                        row.classList.add("en_stock");
                    }
                    for (let key in cervezas[i]) {
                        if (key !== "sinStock") {
                        let cell = row.insertCell();
                        if (key === "imageSrc") {
                            cell.innerHTML = `<img src=${cervezas[i][key]} alt=${cervezas[i].name} />`;
                        } else {
                            cell.innerHTML = cervezas[i][key];
                        }
                        }
                    }
                    }
                } else {
                    mensaje.innerHTML = "No hay cervezas cargadas";
                    switchDiv.classList.add("ocultar");
                }
            }
            
            let agregar_1_cerveza = () => {
                event.preventDefault();
            
                let nuevaCerveza = {
                    name: contenedor.querySelector("#beer-name").value,
                    imageSrc: contenedor.querySelector('input[name="cervezaImg"]:checked').value,
                    alcohol: contenedor.querySelector("#beer-alcohol").value,
                    ibu: contenedor.querySelector("#beer-IBU").value,
                    og: contenedor.querySelector("#beer-OG").value,
                    fg: contenedor.querySelector("#beer-FG").value,
                    sinStock: contenedor.querySelector("#sin-stock").checked,
                };
                cervezas.push(nuevaCerveza);
                cargarTabla();
                console.log(nuevaCerveza);
            };
            
            function restar_1_cerveza() {
                cervezas.pop();
                cargarTabla();
            }

            function agregar_3_cervezas() {
                let bucle_number = contenedor.querySelector("#bucle-number").value;

                for (let i = 0; i < bucle_number; i++) {
                    agregar_1_cerveza();
                }
            }

            function resetear_cervezas() {
                cervezas = [];
                cargarTabla();
            }

            function filtrar_cervezas() {
                let switchButton = document.getElementById("mostrar-stock");
                let cervezas_en_stock = document.querySelectorAll(".en_stock");
                if (switchButton.checked) {
                    for (let i = 0; i < cervezas_en_stock.length; i++) {
                        cervezas_en_stock[i].classList.add("en_stock", "mostrar");
                    }
                } else {
                    for (let i = 0; i < cervezas_en_stock.length; i++) {
                        cervezas_en_stock[i].classList.remove("mostrar");
                    }
                }
            }

            contenedor
            .querySelector("#sumar-button")
            .addEventListener("click", agregar_1_cerveza);
            contenedor
            .querySelector("#restar-button")
            .addEventListener("click", restar_1_cerveza);
            contenedor
            .querySelector("#sumar-bucle-button")
            .addEventListener("click", agregar_3_cervezas);
            contenedor
            .querySelector("#reset-button")
            .addEventListener("click", resetear_cervezas);
            contenedor
            .querySelector("#mostrar-stock")
            .addEventListener("change", filtrar_cervezas);
        } else {
            console.log(response.status);
            mensajeCarga.innerHTML = "Error "+ response.status;
            contenedor.appendChild(mensajeCarga);
        }
    } catch (error) {
        console.log(error);
        mensajeCarga.innerHTML = error;
        contenedor.appendChild(mensajeCarga);
    }
}


//                                                                  PARTIAL RENDER DE CONTACTO

let contactLinks = document.getElementsByClassName("contact-page");
for (let i = 0; i < contactLinks.length; i++) {
    contactLinks[i].addEventListener("click", contactPage);
}

async function contactPage(event) {
    event.preventDefault();
    contenedor.appendChild(mensajeCarga);
    try {
        let response = await fetch("contact.html");
        if (response.ok) {
            let contenido = await response.text();
            contenedor.innerHTML = contenido;
            setTimeout(function() { generateCaptcha(); }, 0)
            contenedor.querySelector("#submit-button").addEventListener("click", validateCaptcha);
            function generateCaptcha() {
                let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
                let captchaValue = `${letters[Math.floor(Math.random(0,1) * 28)]} ${numbers[Math.floor(Math.random(0,1) * 10)]} ${letters[Math.floor(Math.random(0,1) * 28)]} ${numbers[Math.floor(Math.random(0,1) * 10)]} ${letters[Math.floor(Math.random(0,1) * 28)]}`;
                contenedor.querySelector("#captcha-box").innerHTML = captchaValue;
            }

            function validateCaptcha(event) {
                event.preventDefault();
                let captcha = (contenedor.querySelector("#captcha-box").innerHTML).replace(/ /g, "");
                let captchaAnswer = contenedor.querySelector("#captcha-answer").value;
                let errorMessage = contenedor.querySelector("#error-message");
                if(captcha === captchaAnswer) {
                    errorMessage.classList.remove("show");
                    contenedor.querySelector("#contact-form").reset();
                    generateCaptcha();
                } else errorMessage.classList.add("show");
            }
        } else {
            console.log(response.status);
            mensajeCarga.innerHTML = "Error "+ response.status;
            contenedor.appendChild(mensajeCarga);
        }
    } catch (error) {
        console.log(error);
        mensajeCarga.innerHTML = error;
        contenedor.appendChild(mensajeCarga);
    }
}