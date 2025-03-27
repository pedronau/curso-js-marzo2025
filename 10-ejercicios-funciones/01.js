//crear una funcion constructora. vamos a cambiar el contexto de this para que cuando

const obj = {
    nombre: 'Nicolas',
}

function Extender() {
    
}

Extender.call(obj);

console.log(obj);