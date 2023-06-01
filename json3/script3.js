fetch('data.json')
    .then(response => response.json())
    .then(respuesta => {
        header = document.createElement("header");
        let nombre = document.createElement('h1');
        let email = document.createElement('h2');

        header.innerHTML = respuesta.nombre + respuesta.email;

        document.body.appendChild(header);
        document.body.appendChild(nombre)
        document.body.appendChild(email)
    })


