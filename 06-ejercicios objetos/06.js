//crear una funcion que nos permita crear una copia del objeto que le pasemos sin usar ... o Object.assign ni cualquier funcion de 

let obj1 = { id: 1, name: 'Chanchito' };

function crearCopia(obj) {
    let clonedObject = Object.assign({}, obj);
    return clonedObject;
}

let obj2 = crearCopia(obj1);
console.log ({ obj1, obj2 });

//no he podido. la solucion que escribo mas abajo es la del tio (yo al final lo he hecho con Object.assign)

function crearCopia2(obj) {
    let copia = {};
    for (let llave in obj) {
        copia[llave] = obj[llave];
    }
    return copia;
}