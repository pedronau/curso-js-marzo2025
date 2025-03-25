//MÉTODO DE FILTER// sirve para poder filtrar arrays y asi poder eliminar objetos o datos que no necesitamos

const usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 13, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 32, nombre: 'Fernanda' },
];

//imaginate que solo queremos seleccionar a los mayores de edad

const mayores = usuarios.filter(usuario => usuario.edad > 17); //crea un nuevo array con el objeto que estaba iterando
const menores = usuarios.filter(usuario => usuario.edad < 18);

console.log(mayores);