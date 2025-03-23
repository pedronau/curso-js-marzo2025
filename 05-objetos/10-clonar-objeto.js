let punto = {
    X: 10,
    y: 15,
};

Object.assign(punto, {z: 20});
console.log(punto);

/**el object assign lo que hace es añadirle al objeto pasado como primer parametro el objeto que ponemos como segundo parametro
 * pero podemos usar esto para clonar objetos si como primer parametro le pasamos un objeto vacio y como segundo el objeto qur queremos clonar. asi:
*/

let clonePunto = Object.assign({}, punto);
console.log(clonePunto);

/**tambien se pueden modificar propiedades de objetos de este modo */

/**una forma mas moderna de hacer todo esto es: */

let copia = { ...punto };