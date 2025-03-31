//las promesas representan el estado de una peticion, estas pueden estar en:
//pendiente (pending)
//rechazada (rejected)
//terminada (fulfilled)

//las promesas se utilizan para tareas como:
//consultas a las bases de datos
//peticiones a servidores
//web workerks

let promesa = new Promise((resolve,  reject) => { //esta está en fulfilled
    resolve(42);
});

let promesa2 = new Promise((resolve,  reject) => { //esta está en pending durante 10sec y despues resuelve 42
    setTimeout(() => {
        resolve(42);
    }, 10000);
});

let promesa3 = new Promise((resolve,  reject) => { //esta está en pending durante 10sec y despues rechaza
    setTimeout(() => {
        reject('Error de carga');
    }, 10000);
});

//la cosa aqui es que lo que queremos es hacer logica que valide los datos y que si estan bien resuelva y si no pues haga sus cosas (rechazar y dar error etc...)
//para manejar errores:

promesa3.then( //primer parametro: lo que hace la promesa3 al aceptar la promesa. segundo parametro lo que hace al rechazarla (si cambiamos reject por resolve en promesa3 pues hace lo de valor)
    valor => console.log(valor),
    e => console.log('error', e),
);