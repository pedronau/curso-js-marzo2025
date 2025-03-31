//fecth nos devuelve una promesa que recibe dos argumentos, el primero es la url a la que queremos ir y el 2º las opciones que le podiamos pasar a esta

const url = 'https://jsonplaceholder.typicode.com/todos/a';
fetch(url)
    .then(response => {
        console.log(response);
    })

    /**en chrome esto nos devuelre algo muy raro, como un objeto creado con una funcion
     * constructora que se llama response. vamos a ver que metodosa podemos usar para
     * recibir el JSON que nosotros queremos
     */

fetch(url)
    .then(response => {
        return response.json();
        return response.text();
    })
    .then (data => console.log(data));

    /**las APIs no siempre nos van a devolver JSON, depende lo que nos devuelvan hay que usar un metodo u otro
     * si una API nos devuelve texto pues en vez de usar .json() usamos .text()
     */

    /**fetch siempre va a tener exito, independientemente de lo que nos devuelva el servido
     * aunque nos devuelva un 404 o un 500 el codigo de fetch se ejecuta, entonces lo que hay que hacer es rechazar una promesa:
    */

    fetch(url)
    .then(response => {
        if(response.ok) { //response.ok devuelve false si el codigo devuelto no se encuentra entre 200-299 (codigos HTTP de exito)
            return response.json();
        }
        return Promise.reject(response.status);
    })
    .then(data => console.log(data))
    .catch(message => console.log({ message }));