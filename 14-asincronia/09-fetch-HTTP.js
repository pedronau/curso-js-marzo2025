const url = 'https://jsonplaceholder.typicode.com/todos';
fetch(url, {
    method: 'POST', //esto puede ser GET, POST, PUT, PATCH y DELETE. GET es la funcion que tiene fetch por defecto
    body: JSON.stringify({tittle: 'Hola mundo'}),
    headers: {
        'Content-Type': 'application/json', //para decirle al servidor que le estamos pasando un JSON
        Authorization: 'api key',
    },
    cache: 'no-cache', //mas opciones: default, reload, force-cache, onli-if-cached
})
    .then(response => {
        if(response.ok) { 
            return response.text();
        }
        return Promise.reject(response.status);
    })
    .then(data => console.log(data))
    .catch(message => console.log({ message }));