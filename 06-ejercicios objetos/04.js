//que la funcion haga un console.log solo de las propuedades que son metodos (que tienen funciones como valor)

let objeto = {
    id: 1,
    name: 'Chanchito',
    login: function () {},
    logout: function () {},
}

function cualesMetodos(obj) {
    for (let llave in obj) {
        if (typeof obj[llave] === 'function') {
            console.log(llave);
        }
    }
}

cualesMetodos(objeto);

//no lo he conseguido. pongo la solucion del tio