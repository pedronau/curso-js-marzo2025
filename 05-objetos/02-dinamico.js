//los objetos son dinamicos, puedes agregar o quitar propiedades y ademas cambiarles su valor en cualquier momento

const user = {id: 1};

user.name = 'Pedro';
user.guardar = function () {
    console.log('Guardando', user.name);
}

user.guardar();

//aunque normalmente las const no se pueden modificar lo que no podemos modificar es el tipo, es un objeto ahora no podemos hacer que sea un number o un boolean. no podemos hacer que deje de ser un objeto

delete user.name;
delete user.guardar;
console.log(user);

//si queremos que el objeto que estamos creando no se pueda modificar o agregar o borrar valores tenemos que utilizar:

const user1 = Object.freeze({id: 1}); //asi se fija el objeto
user1.name = 'Paco'; //esto no se puede hacer. no te deja javascript