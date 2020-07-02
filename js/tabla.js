("use strict");

let mockCervezas = [
  {
    name: "American Ipa",
    imageSrc:
      "https://res.cloudinary.com/duli/image/upload/v1591565278/American_IPA_yzg7g8.png",
    alcohol: 5.5,
    ibu: "40.0-65.0",
    og: "1.056-1.075",
    fg: "1.010-1.018",
    sinStock: true,
  },
  {
    name: "Belgian Stout",
    imageSrc:
      "https://res.cloudinary.com/duli/image/upload/v1591565277/Belgian-Stout_yxbqcd.png",
    alcohol: 6.0,
    ibu: "20.0-30.0",
    og: "1.062-1.075",
    fg: "1.008-1.016",
    sinStock: false,
  },
  {
    name: "Golden Ale",
    imageSrc:
      "https://res.cloudinary.com/duli/image/upload/v1591565279/Golden_Ale_egqxw3.png",
    alcohol: 4.2,
    ibu: "20.0-25.0",
    og: "1.041-1.050",
    fg: "1.009-1.018",
    sinStock: true,
  },
  {
    name: "Honey",
    imageSrc:
      "https://res.cloudinary.com/duli/image/upload/v1591565281/Honey_fsghft.png",
    alcohol: 4.5,
    ibu: "30.0-35.0",
    og: "1.050-1.060",
    fg: "1.005-1.015",
    sinStock: true,
  },
  {
    name: "Irish Red",
    imageSrc:
      "https://res.cloudinary.com/duli/image/upload/v1591565281/Irish-Red_brdejm.png",
    alcohol: 8.0,
    ibu: "50.0–85.0",
    og: "1.075 – 1.11",
    fg: "1.018 – 1.030",
    sinStock: false,
  },
  {
    name: "Kölsch",
    imageSrc:
      "https://res.cloudinary.com/duli/image/upload/v1591565282/Kolsch_bmqcel.png",
    alcohol: 3.5,
    ibu: "18.0-30.0",
    og: "1.044–1.050",
    fg: "1.007–1.011",
    sinStock: false,
  },
];

let cervezas = [];
let cervezasFiltradas = [];

document.addEventListener("DOMContentLoaded", cargarTabla);

async function cargarTabla() {
  let mensaje = document.getElementById("sin-cervezas");
  let table = document.querySelector("#tabla-comparacion");
  let filtroStockActivo = document.getElementById("en-stock-filtro").checked;
  let filtroAlcoholActivo = document.getElementById("bajo-alcohol-filtro")
    .checked;
  console.log(filtroAlcoholActivo);
  console.log(filtroStockActivo);
  table.innerHTML = "";
  mensaje.innerHTML = "";  

  try {
    let response = await fetch(
      "https://web-unicen.herokuapp.com/api/groups/58miguezvillabona/cervezas"
    );
    if (response.ok) {
      let data = await response.json();
      cervezas = data.cervezas;

      if (cervezas.length > 0) {
        let crearThead = document.createElement("THEAD");
        let crearTR = document.createElement("TR");

        let titulosThead = [
          "Cerveza",
          "Color",
          "% Alcohol",
          "IBU",
          "OG",
          "FG",
          "EDITAR/BORRAR",
        ];

        for (let i = 0; i < titulosThead.length; i++) {
          let nuevoTh = document.createElement("TH");
          nuevoTh.innerHTML = titulosThead[i];
          crearTR.appendChild(nuevoTh);
        }

        crearThead.appendChild(crearTR);

        table.appendChild(crearThead);

        let tableBody = table.createTBody();
        tableBody.id = "tabla-body";

        cervezasFiltradas = [...cervezas];

        if (filtroStockActivo) {
          cervezasFiltradas = cervezasFiltradas.filter(
            cerveza => cerveza.thing.sinStock === false
          );
        }

        if (filtroAlcoholActivo) {
          cervezasFiltradas = cervezasFiltradas.filter(
            cerveza => cerveza.thing.alcohol < 5
          );
        }

        for (let i = 0; i < cervezasFiltradas.length; i++) {
          let row = tableBody.insertRow();
          for (key in cervezasFiltradas[i].thing) {
            if (key !== "sinStock") {
              let cell = row.insertCell();
              if (key === "imageSrc") {
                cell.innerHTML = `<img src=${cervezasFiltradas[i].thing[key]} alt=${cervezasFiltradas[i].thing.name} />`;
              } else {
                let inputEl = document.createElement("INPUT");
                inputEl.classList.add("input-tabla-cervezas");
                inputEl.value = cervezasFiltradas[i].thing[key];
                cell.appendChild(inputEl);
              }
            }
          }
          let cell = row.insertCell();
          let divEl = document.createElement("DIV");
          divEl.classList.add("beer-buttons-div");
          let editButton = document.createElement("BUTTON");
          editButton.classList.add("table-button");
          editButton.innerHTML = "Editar";
          editButton.addEventListener("click", () =>
            editar_cerveza(cervezasFiltradas[i]._id, i)
          );
          let deleteButton = document.createElement("BUTTON");
          deleteButton.classList.add("table-button");
          deleteButton.innerHTML = "Borrar";
          deleteButton.addEventListener("click", () =>
            borrar_cerveza(cervezasFiltradas[i]._id)
          );
          divEl.appendChild(editButton);
          divEl.appendChild(deleteButton);
          cell.appendChild(divEl);
        }
      } else {
        mensaje.innerHTML = "No hay cervezas cargadas";
        switchDiv.classList.add("ocultar");
      }
    } else {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}

async function agregar_1_cerveza(event) {
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
  let data = {
    thing: nuevaCerveza,
  };
  try {
    let response = await fetch(
      "https://web-unicen.herokuapp.com/api/groups/58miguezvillabona/cervezas",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      cargarTabla();
    }
  } catch (error) {
    console.log(error);
  }
}

async function restar_1_cerveza() {
  let response = await fetch(
    `https://web-unicen.herokuapp.com/api/groups/58miguezvillabona/cervezas/${
      cervezas[cervezas.length - 1]._id
    }`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: "",
    }
  );
  if (response.ok) {
    cargarTabla();
  }
}

async function agregar_3_cervezas(event) {
  let bucle_number = document.getElementById("bucle-number").value;

  for (let i = 0; i < bucle_number; i++) {
    await agregar_1_cerveza(event);
  }
}

async function resetear_cervezas() {
  for (let i = 0; i < cervezas.length; i++) {
    await fetch(
      `https://web-unicen.herokuapp.com/api/groups/58miguezvillabona/cervezas/${cervezas[i]._id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: "",
      }
    );
  }
  cargarTabla();
}

async function editar_cerveza(id, index) {
  let tableBody = document.querySelector("tbody");
  let filaEditada = tableBody.querySelectorAll("tr")[index];
  let inputsFilaEditada = filaEditada.querySelectorAll("input");
  console.log(inputsFilaEditada[0].value);
  let cervezaEditada = {
    name: inputsFilaEditada[0].value,
    imageSrc: cervezasFiltradas[index].thing.imageSrc,
    alcohol: inputsFilaEditada[1].value,
    ibu: inputsFilaEditada[2].value,
    og: inputsFilaEditada[3].value,
    fg: inputsFilaEditada[4].value,
    sinStock: cervezasFiltradas[index].thing.sinStock,
  };
  let response = await fetch(
    `https://web-unicen.herokuapp.com/api/groups/58miguezvillabona/cervezas/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ thing: cervezaEditada }),
    }
  );
  if (response.ok) {
    cargarTabla();
  }
}

async function borrar_cerveza(id) {
  let response = await fetch(
    `https://web-unicen.herokuapp.com/api/groups/58miguezvillabona/cervezas/${id}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
  );
  if (response.ok) {
    cargarTabla();
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
  .getElementById("en-stock-filtro")
  .addEventListener("click", cargarTabla);
document
  .getElementById("bajo-alcohol-filtro")
  .addEventListener("click", cargarTabla);
