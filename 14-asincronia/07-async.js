let promesa1 = param1 => new Promise((res, rej) => {
    //calcular algo...
    const b = 'Hola mundo';
    res(b);
});

let promesa2 = param2 => new Promise((res, rej) => {
    //calcular algo...
    res(param2 + ', Hola mundo');
});

let promesa3 = (param1, param2) => new Promise((res, rej) => {
    //calcular algo...
    res('Chanchito feliz');
});

//para poder encadenar 3 promesas que la tercera necesita los parametros que les hemos introducido a las 2 primeras se podría hacer así:
//se van inyectando valores una a otra peeeeeeeero

//ESTO SON MALAS PRÁCTICAS NO HAY QUE HACERLO

Promise.resolve('Primer valor')
    .then(a => {
        return promesa1(a)
            .then(b => {
                return promesa2(b)
                    .then(() => promesa3(a, b));
            })
    })

//ESTO DE ARRIBA SON MALAS PRÁCTICAS NO HAY QUE HACERLO
//para hacer eso es mejor hacer esto:

async function main() {
    try {
        const a = await Promise.resolve('Primer valor');
        const b = await promesa1(a);
        const c = await promesa2(b);
        promesa3(a, b);
    } catch (error) {
        console.log({ error })
    }
    
}

/**
 * la palabra reservada de "await" dentro de funciones que tengan la palabra reservada de "async"
 * nos van a permitir poder obtener el valor en el cual resuelven las promesas
 */