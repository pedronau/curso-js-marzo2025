//para poder conectar nuestras apps con APIs

function configurarAPI(url) {
    const defaultURL = url || 'https://holamundo.io';
    return `${defaultURL}`;
}

console.log(configurarAPI());
console.log(configurarAPI('https://chaomundo.io'));

//esto de arriba es la FORMA VIEJA ahora hay una mas moderna:

function configurarAPI2(url = 'https://holamundo.io') { //esto hace lo mismo de arriba. para mi gusto lo de arriba mejor, esta mas claro
    return `${url}`;
}

//pero si queremos pasar un objeto y que la funcion sola se encargue de sacar la propiedad url:

const config = {
    url: 'https://heymundo.io',
}

function configurarAPI3({ url } = { url: 'por defecto' }) { //si a esto le pasamos el objeto config pues solo nos saca la url. si no, lo que hay a la derecha del = (como en lo de arriba) es lo que se le pasa por defecto si la funcion no recibe nada
    return `${url}`;
}

console.log(configurarAPI3(config));

function configurarAPI4(url, bucket = 145, port = 80) {  //con el = 145 ponemos un valor por defecto solo en ese parametro. si hacemos eso hay que asiganrle tambien por defecto un valor a TODOS LOS PARAMETROS QUE VENGAN A LA DERECHA
    return `${url}/${bucket}:${port}`;
}

console.log(configurarAPI4('https://hastaluegomundo.io')); //si quisieramos modificar los parametros por defeecto de la funcion pues le añadimos mas a la hora de ejecutarla