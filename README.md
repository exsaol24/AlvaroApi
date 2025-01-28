# AlvaroApi
 Este proyecto es una aplicación web que permite a los usuarios buscar y visualizar personajes de la serie "Rick and Morty". La aplicación utiliza la API pública de Rick and Morty para obtener datos de los personajes y los muestra en una interfaz sencilla y amigable. Los usuarios pueden buscar personajes por nombre y ver detalles como su imagen y especie.

 URL de la API: https://rickandmortyapi.com/api/character

## Uso de AbortController
AbortController permite cancelar solicitudes en curso si el usuario realiza una nueva acción que genera una consulta a la API. Esto mejora la eficiencia y la experiencia del usuario al evitar resultados obsoletos.

### Ejemplo de implementación:
```javascript
const controller = new AbortController();
const signal = controller.signal;

fetch("https://rickandmortyapi.com/api/character", { signal })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        if (error.name === 'AbortError') {
            console.log('Solicitud cancelada');
        } else {
            console.error('Error en la solicitud', error);
        }
    });

// Para cancelar la solicitud
controller.abort();
```

## Manejo de errores
Se implementa un sistema que captura y maneja errores generados al cancelar solicitudes u otros problemas de red. Esto asegura que la aplicación maneje adecuadamente situaciones inesperadas y proporcione retroalimentación al usuario.

## Búsqueda en tiempo real
La aplicación permite al usuario buscar datos mediante un campo de texto, actualizando dinámicamente los resultados a medida que escribe.