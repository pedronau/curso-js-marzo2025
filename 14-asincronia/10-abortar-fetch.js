async function getTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('error:', error);
    }
}

getTodos();

//si queremos abortar a mitad de camino esto que hemos hecho aqui arriba, por cualquier razon, hay que hacer:

let controller = new AbortController();
let { signal } = controller;

async function getTodos2() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    try {
        const response = await fetch(url, { signal }); //signal hace que podamos abortar una peticion
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('error:', error);
    }
}

getTodos2();
controller.abort();