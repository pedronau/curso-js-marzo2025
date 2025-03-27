//vamos a crear una funcion que va a presentar un problema

function sumaTodo(arr) {
    return arr.reduce((acc, el) => acc + el); //como le estamos pasando un reduce, es obligatorio que el valor que le introduzcamos sea un array
}

console.log(sumaTodo([1, 2, 3, 4])); //si le paso esto funciona bien
//console.log(sumaTodo({ prop: 1 })); //pero si le paso un objeto... pues me da un error (lo dejo comentado para que no me aparezca error en la consola)

//para que no apaarezca error hay que hacer un try catch, try => si funciona bien la ejecutra, catch => si hay un error hace una accion predefinida

try {
    console.log(sumaTodo({ prop: 1 }));
} catch (e) { //e => error
    console.log(e); //LA CONSOLA NOS DEVUELVE UN ERROR PERO LA APP NO EXPLOTA ese es el beneficio. ademas se le puede poner que le salte un aviso al usuario o algo
}

//para el ejemplo particular que estamos haciendo podriamos hacer:

function sumaTodo2(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('El parámetro no es un array');
    }
    return arr.reduce((acc, el) => acc + el);
}

//console.log(sumaTodo2({ prop: 1 })); //esto lo dejo comentado porque si no no me deja seguir con la app

//se pueden hacer sistemas que gestionen errores...

//se podria dar el caso de que el parametro introducido fuera un array pero que los elementos no fueran todo numeros por lo que tambien nos daria un error, se puede hcaer:

function sumaTodo3(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('El parámetro no es un array');
    }
    return arr.reduce((acc, el) => {
        if (typeof el !== 'number' || Number.isNaN(el)) { //hay que pasarle Number.isNaN(el) porque si le hacemos typeof a NaN nos devuelve que es tipo number
            throw new Error(`Elemento ${el} no es número`);
        }
        return acc + el;
    });
}

console.log(sumaTodo3([1, 2, NaN, 'Paco']));

//hay que aprender tambien a manejar los errores/excepciones