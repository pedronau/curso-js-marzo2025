// hacer una funcion que nos permita saber si dos objetos son iguales

function similares(obj1, obj2) {
    let a = JSON.stringify(obj1);
    let b = JSON.stringify(obj2);
    
    if (a ===  b) {
        return true
    } else {
        return false
    }
}

let resultado = similares (
    { id: 1, name: 'Pedro'},
    { id: 1, name: 'Pedro'},
);


console.log(resultado);

//la solucion del tio: esta solucion es mejor porque si cambiamos de orden las propiedades del objeto
//nos sigue devolviendo true pero si con JSON.stringify cambiamos el orden nos devulve un false.

function similares2(obj1, obj2) {
    let distintos = false;
    for (let llave in obj1) {
        if (obj1[llave] !== obj2[llave]) {
            distintos = true;
        }
    }
    return !distintos;
}