//imagina que tenemos una funcion para poder configurar un servidor web

function webserver(config) {
    const url = config.url;
    return url;
}

console.log(webserver({ url: 'https://holamundo.io' }));

//imaginamos que este objeto que le pasamos viene con muchisimas propiedades, pues nosotros podemos obtener la de url que es la unica que nos interesa. hacemos esto:

function webserver2(config) {
    const { url } = config;
    return url;
}

console.log(webserver2({ url: 'https://adiosmundo.io' }));

//esto hace lo mismo que lo de arriba. pero aun podemos ir un paso mas allá

function webserver3({ url }) {
    return url;
}

console.log(webserver3({ url: 'https://saludosmundo.io' }));

//esto es lo mismo también

//tambien podemos:

const config2 = {
    url: 'https://holamundo.io',
    direccion: {
        calle: 'hola mundo',
        numero: 80,
    }
}

console.log(webserver3(config2)); //me devuelve solo la url