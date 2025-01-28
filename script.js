//https://github.com/exsaol24/AlvaroApi.git
let controller;

async function CargarPersonajes() {
    if (controller) {
        controller.abort();
    }
    controller = new AbortController();
    const signal = controller.signal;

    try {
        let respuesta = await fetch("https://rickandmortyapi.com/api/character", {
            method: "GET",
            signal: signal
        });
        let datos = await respuesta.json();
        var contenido = document.getElementsByClassName("contenido")[0];
        contenido.innerHTML = ""; 

        let buscador = document.getElementById("input").value.toLowerCase();

        datos.results.forEach(personaje => {
            if (personaje.name.toLowerCase().includes(buscador)) {
                let elementoPersonaje = document.createElement("div");
                elementoPersonaje.classList.add("personaje");
                let nombre = document.createElement("h1");
                let imagen = document.createElement("img");
                let especie = document.createElement("p");
                nombre.textContent = personaje.name;
                imagen.src = personaje.image;
                especie.textContent = personaje.species;
                elementoPersonaje.appendChild(nombre);
                elementoPersonaje.appendChild(imagen);
                elementoPersonaje.appendChild(especie);
                contenido.appendChild(elementoPersonaje);
            }
        });
    } catch (e) {
        if (e.name === 'AbortError') {
            console.log('Solicitud cancelada');
        } else {
            console.error('Error en la solicitud', e);
        }
    }
}

CargarPersonajes();