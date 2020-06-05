("use strict");

document.addEventListener("DOMContentLoaded", cargarTabla);

let cervezas = [
  {
    name: "American Ipa",
    imageSrc: "../img/American_IPA.png",
    alcohol: "5.5-7.5 %",
    ibu: "40.0-65.0",
    og: "1.056-1.075",
    fg: "1.010-1.018",
  },
  {
    name: "Belgian Stout",
    imageSrc: "../img/Belgian-Stout.png",
    alcohol: "6.0-7.5 %",
    ibu: "20.0-30.0",
    og: "1.062-1.075",
    fg: "1.008-1.016",
  },
  {
    name: "Golden Ale",
    imageSrc: "../img/Golden_Ale.png",
    alcohol: "4.2-5.0 %",
    ibu: "20.0-25.0",
    og: "1.041-1.050",
    fg: "1.009-1.018",
  },
  {
    name: "Honey",
    imageSrc: "../img/Honey.png",
    alcohol: "4.5-5.8 %",
    ibu: "30.0-35.0",
    og: "1.050-1.060",
    fg: "1.005-1.015",
  },
  {
    name: "Imperial Stout",
    imageSrc: "../img/Imperial_Stout.png",
    alcohol: "",
    ibu: "",
    og: "",
    fg: "",
  },
  {
    name: "Irish Red",
    imageSrc: "../img/Irish-Red.png",
    alcohol: "8.0–12.0 %",
    ibu: "50.0–85.0",
    og: "1.075 – 1.11",
    fg: "1.018 – 1.030",
  },
  {
    name: "Kölsch",
    imageSrc: "../img/Kolsch.png",
    alcohol: "3.5–5.0 %",
    ibu: "18.0-30.0",
    og: "1.044–1.050",
    fg: "1.007–1.011",
  },
];

function cargarTabla() {
  let table = document.querySelector("#tabla-comparacion");
  table.innerHTML = "";
  let crearThead = document.createElement("THEAD");
  let crearTR = document.createElement("TR");
  let crearTH1 = document.createElement("TH");
  let name = document.createTextNode("Cerveza");
  let crearTH2 = document.createElement("TH");
  let image = document.createTextNode("Color");
  let crearTH3 = document.createElement("TH");
  let alcohol = document.createTextNode("Alcohol");
  let crearTH4 = document.createElement("TH");
  let ibu = document.createTextNode("IBU");
  let crearTH5 = document.createElement("TH");
  let og = document.createTextNode("OG");
  let crearTH6 = document.createElement("TH");
  let fg = document.createTextNode("FG");

  crearTH1.appendChild(name);
  crearTH2.appendChild(image);
  crearTH3.appendChild(alcohol);
  crearTH4.appendChild(ibu);
  crearTH5.appendChild(og);
  crearTH6.appendChild(fg);

  crearTR.appendChild(crearTH1);
  crearTR.appendChild(crearTH2);
  crearTR.appendChild(crearTH3);
  crearTR.appendChild(crearTH4);
  crearTR.appendChild(crearTH5);
  crearTR.appendChild(crearTH6);

  crearThead.appendChild(crearTR);

  table.appendChild(crearThead);

  /*let header = table.createTHead();
  let row = header.insertRow(0);
  let name = row.insertCell();
  let imageSrc = row.insertCell();
  let alcohol = row.insertCell();
  let ibu = row.insertCell();
  let og = row.insertCell();
  let fg = row.insertCell();
  name.innerHTML = "Cerveza";
  imageSrc.innerHTML = "Color";
  alcohol.innerHTML = "Alcohol %";
  ibu.innerHTML = "IBU";
  og.innerHTML = "OG";
  fg.innerHTML = "FG";*/

  let tableBody = table.createTBody();
  tableBody.id = "tabla-body";

  for (let i = 0; i < cervezas.length; i++) {
    let row = tableBody.insertRow();

    for (key in cervezas[i]) {
      let cell = row.insertCell();
      if (key === "imageSrc") {
        cell.innerHTML = `<img src=${cervezas[i][key]} alt=${cervezas[i].name} />`;
      } else {
        cell.innerHTML = cervezas[i][key];
      }
    }
  }
}

let limpiarForm = () => {
  let form = document.querySelector("#tabla-comparacion");
  let inputs = form.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
};

let agregar_1_cerveza = () => {
  event.preventDefault();
  let form = document.querySelector("#tabla-form");
  let inputs = form.querySelectorAll("input");

  let nuevaCerveza = {
    name: inputs[0].value,
    imageSrc: inputs[4].value,
    alcohol: inputs[1].value,
    ibu: inputs[5].value,
    og: inputs[2].value,
    fg: inputs[6].value
  };
  console.log(nuevaCerveza.imageSrc)
  cervezas.push(nuevaCerveza);
  cargarTabla();
};

function restar_1_cerveza() {
    cervezas.pop();
    cargarTabla();
}

function agregar_3_cervezas() {
  let bucle_number = document.getElementById("bucle-number").value;

  for (let i = 0; i < bucle_number; i++) {
    agregar_1_cerveza();
  }
  limpiarForm();
}

function resetear_cervezas_agregadas() {
  console.log(cervezas.length);
  for (let i = cervezas.length; i > 0; i--) {
    console.log(cervezas.length);
    restar_1_cerveza();
  }
}

document
  .getElementById("sumar-button")
  .addEventListener("click", agregar_1_cerveza);
document
  .getElementById("restar-button")
  .addEventListener("click", restar_1_cerveza);
document
  .getElementById("sumar-bucle-button")
  .addEventListener("click", agregar_3_cervezas);
document
  .getElementById("reset-button")
  .addEventListener("click", resetear_cervezas_agregadas);

// function agregar_1_cerveza() {
//   /* -----------------------------OBTENGO VALORES DEL FORM------------------------- */

//   let nombre_cerveza = document.getElementById("beer-name").value;
//   let imagen_cerveza = document.getElementById("beer-image").value;
//   let alcohol_cerveza = document.getElementById("beer-alcohol").value;
//   let IBU_cerveza = document.getElementById("beer-IBU").value;
//   let OG_cerveza = document.getElementById("beer-OG").value;
//   let FG_cerveza = document.getElementById("beer-FG").value;

//   /* ----------------------------------CRÉO EL JSON "CERVEZA"-------------------- */

//   let cerveza = {
//     nombre: nombre_cerveza,
//     img: imagen_cerveza,
//     alcohol: alcohol_cerveza,
//     IBU: IBU_cerveza,
//     OG: OG_cerveza,
//     FG: FG_cerveza,
//   };

//   /* -----------------------------------PUSHEO LA CERVEZA AL ARRAY DE CERVEZAS------------------- */

//   cervezas.push(cerveza);
//   console.log(cervezas[cervezas.length - 1].IBU);

//   /* -----------------------------------CRÉO EL HTML Y SU CONTENIDO------------------- */

//   let crearFila = document.createElement("TR");
//   let crearCelda1 = document.createElement("TD");
//   let textoCelda1 = document.createTextNode(
//     cervezas[cervezas.length - 1].nombre
//   );
//   let crearCelda2 = document.createElement("TD");
//   let textoCelda2 = document.createTextNode(cervezas[cervezas.length - 1].img);
//   let crearCelda3 = document.createElement("TD");
//   let textoCelda3 = document.createTextNode(
//     cervezas[cervezas.length - 1].alcohol
//   );
//   let crearCelda4 = document.createElement("TD");
//   let textoCelda4 = document.createTextNode(cervezas[cervezas.length - 1].IBU);
//   let crearCelda5 = document.createElement("TD");
//   let textoCelda5 = document.createTextNode(cervezas[cervezas.length - 1].OG);
//   let crearCelda6 = document.createElement("TD");
//   let textoCelda6 = document.createTextNode(cervezas[cervezas.length - 1].FG);

//   /* -------------------------------------ÚNO EL CONTENIDO AL HTML----------------- */

//   crearCelda1.appendChild(textoCelda1);
//   crearCelda2.appendChild(textoCelda2);
//   crearCelda3.appendChild(textoCelda3);
//   crearCelda4.appendChild(textoCelda4);
//   crearCelda5.appendChild(textoCelda5);
//   crearCelda6.appendChild(textoCelda6);

//   /* -------------------------------------ÚNO TODOS LOS "TD" AL "TR"----------------- */

//   crearFila.appendChild(crearCelda1);
//   crearFila.appendChild(crearCelda2);
//   crearFila.appendChild(crearCelda3);
//   crearFila.appendChild(crearCelda4);
//   crearFila.appendChild(crearCelda5);
//   crearFila.appendChild(crearCelda6);

//   /* -------------------------------------INSERTO EL "TR" AL HTML DE LA TABLA
//                                                 Y LE AGREGO UN ID-------------------- */

//   crearFila.setAttribute("id", cervezas.length);
//   document.getElementById("tabla-body").appendChild(crearFila);
// }
