("use strict");

document.addEventListener("DOMContentLoaded", cargarTabla);

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
  let mensaje = document.getElementById("sin-cervezas");
  let table = document.querySelector("#tabla-comparacion");
  let switchDiv = document.getElementById("stock-switch");
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
      for (key in cervezas[i]) {
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

/*let limpiarForm = () => {
  let form = document.querySelector("#tabla-comparacion");
  let inputs = form.querySelectorAll("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
};*/

let agregar_1_cerveza = () => {
  event.preventDefault();

  let nuevaCerveza = {
    name: document.getElementById("beer-name").value,
    imageSrc: document.querySelector('input[name="cervezaImg"]:checked').value,
    alcohol: document.getElementById("beer-alcohol").value,
    ibu: document.getElementById("beer-IBU").value,
    og: document.getElementById("beer-OG").value,
    fg: document.getElementById("beer-FG").value,
    sinStock: document.getElementById("sin-stock").checked,
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
  let bucle_number = document.getElementById("bucle-number").value;

  for (let i = 0; i < bucle_number; i++) {
    agregar_1_cerveza();
  }
  //limpiarForm();
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
  .addEventListener("click", resetear_cervezas);
document
  .getElementById("mostrar-stock")
  .addEventListener("change", filtrar_cervezas);
