# AlvaroApi
 Este proyecto es una aplicación web que permite a los usuarios buscar y visualizar personajes de la serie "Rick and Morty". La aplicación utiliza la API pública de Rick and Morty para obtener datos de los personajes y los muestra en una interfaz sencilla y amigable. Los usuarios pueden buscar personajes por nombre y ver detalles como su imagen y especie.

 URL de la API: https://rickandmortyapi.com/api/character

//https://rickandmortyapi.com/api/character/?name=rick esta te devuelve solo a rick
let respuesta = await fetch("https://rickandmortyapi.com/api/character", {
        method: "GET",
        });
        let datos = await respuesta.json();
esto devuelve la informacion de todos los personajes de la API