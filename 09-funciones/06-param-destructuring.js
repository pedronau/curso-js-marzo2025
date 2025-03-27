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
    url: 'https://okeymundo.io',
    direccion: {
        calle: 'hola mundo',
        numero: 80,
    }
}

console.log(webserver3(config2)); //me devuelve solo la url

//y si quiero que me devuelva la url y la calle pues:

function webserver4({ url, direccion: {calle} }) {
    console.log(calle);
    return url;
}

function webserver4({ url, ...rest }) { //lo mismo que lo de arriba. resto de propiedades del objeto que le hemos pasado. esto de rest tambien se puede usar dentro de la funcion
    console.log(calle);
    return url;
}

//y si queremos lo mismo pero con un array

const config3 = [
    'https://achomundo.io',
    145,
    80,
]

function webserver5([url, bucket, port]) { //de todos los parametros que le pasamos solo le pedimos que nos devuelva la url
    return url;
}

function webserver6([url, ...rest]) { //esto es lo mismo que lo de arriba pero ademas imprime en consola los parametros restantes en un array
    console.log(rest);
    return url;
}

console.log(webserver(config3));