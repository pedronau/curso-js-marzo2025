//crear una funcion que evalue si un objeto tiene una propiedad en particular

let objeto = {
    id: 1,
    name: 'Chanchito',
    login: function () {},
    logout: function () {},
};

let propiedad = 'name';

function tieneProp(obj, propiedad) {
    // for (let idx in obj) {
        if (propiedad in obj === true) {
            return true
        } else {
            return false
        // }
    }
}

console.log(tieneProp(objeto, propiedad));

//lo he hecho bien con los apuntes de JS de mouredev: pongo abajo la solucion del tio

function tieneProp2(obj, propiedad) {
    let props = Object.keys(obj);

    for (let prop of props) {
        if (propiedad == prop) {
            return true
        }
        return false
    }
}

//yo creo que la mia es mejor