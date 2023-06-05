fetch("data.json")
  .then((response) => response.json())
  .then((respuesta) => {
    addHeader(respuesta);
    table(respuesta);
    lista(respuesta);
  });

function addHeader(respuesta) {
  let header = document.createElement("header");
  let nombre = document.createElement("h1");
  let email = document.createElement("h2");

  nombre.innerHTML = respuesta.nombre;
  email.innerHTML = respuesta.email;
  header.appendChild(nombre);
  header.appendChild(email);

  document.body.appendChild(header);
}

function table(respuesta) {
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  let thEmpresa = document.createElement("th");
  let thUbicacion = document.createElement("th");
  let thFecha = document.createElement("th");
  let tbody = document.createElement("tbody");

  document.body.appendChild(table);

  thEmpresa.innerHTML = "Empresa";
  thUbicacion.innerHTML = "Ubicación";
  thFecha.innerHTML = "Fecha";
  tr.append(thEmpresa, thUbicacion, thFecha);
  thead.appendChild(tr);
  table.appendChild(thead);
  table.appendChild(tbody);

  for (const work of respuesta.works) {
    let trbody = document.createElement("tr");
    let tdEmpresa = document.createElement("td");
    let tdUbicacion = document.createElement("td");
    let tdFecha = document.createElement("td");

    tdEmpresa.innerHTML = work.empresa;
    tdUbicacion.innerHTML = work.ubicacion;
    tdFecha.innerHTML = work.f_inicio + "-" + work.f_fin;
    trbody.append(tdEmpresa, tdUbicacion, tdFecha);
    tbody.appendChild(trbody);
  }
}

function lista(respuesta) {
  for (const skills of respuesta.softskills) {
    let lista = document.createElement("ul");
    let liName = document.createElement("h2");
    let listado = document.createElement("li");

    liName.innerHTML = "softskills";
    listado.innerHTML = skills.softskills;

    document.body.appendChild(lista);
  }
}
