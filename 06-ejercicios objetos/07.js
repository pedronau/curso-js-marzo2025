let objeto = { name: 'Nicolas' };

function agregarId(obj) {
    if (typeof obj === 'object') {
        obj.id = Math.random();
    }
}

agregarId(objeto);
console.log(objeto);

//lo he hecho bien