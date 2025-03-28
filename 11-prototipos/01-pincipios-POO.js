/**4 PRINCIPIOS DE LA PROGRAMACION ORIENTADA A OBJETOS:
 * 1) Encapsulación
 *      -Agrupar métodos y propiedades que tenga sentido agrupar
 * 2) Abstracción
 *      -Esconder detalles de implementación. Así cuando usamos un objeto, sabes lo que va a hacer pero el como no te interesa.
 * 3) Herencia
 *      -Que los métodos se hereden entre objetos.
 * 4) Polimorfismo
 *      -No me he enterao muy bien.
 */

//ejemplo de encapsulación

const user = {
    nombre: 'Hola',
    apellido: 'Mundo',
    getNombreCompleto() {
        return [this.nombre, this.apellido].join(' ');
    }
}

console.log(user.getNombreCompleto());

//ejemplo de abstracción. no conocemos la implementacion pero igual podemos acceder a los metodos y saber lo que hacen

const user2 = new User();
user2.password = '1234';
user2.sabe();

//ejemplo de herencia. que los metodos se compartan entre objetos por si hay que cambiarlo en el futuro que solo haya que cambiar 1, no todos

//que lo hereden de una funcion constructora padre. NOSOTROS LE LLAMAMOS FUNCION CONSTRUCTORA, EN OTROS LENGUAJES LE LLAMAN CLASE

//ejemplo de polimorfismo:

function validaEntidad(entidad) {
    //..
    switch(entudad.nombre) {
        case 'user':
            entidad.save();
            break;
        case 'restaurante':
            entidad.guardar();
            break;
        case 'moto':
            //..

    }
} //CON POLIMORFISMO TODO ESTO NO ES NECESARIO. todo esto lo podemos cambiar por:

function validaEntidad(entidad) {
    //..
    entidad.save();
}

//al final esto se hace pues teniendo en cuenta estas cosas y llamar igual a los metodos que hacen lo mismo