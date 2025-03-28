let x ={};

//ver video 120

//PROTOTIPOS VS INSTANCIAS//

//instancias// lo normal vaya

function User() {
    this.name = 'hola Mundo';
    this.login = function() {
        console.log('Iniciando sesión...');
    }
}

const user1 = new User();
const user2 = new User();

console.log(user1.login === user2.login); //false

//¿por qué devuelve false? son funciones que se crean a partir de la function constructora. cada vez se crea una nueva propiedad de login.
//esto puede dar problemas a gran escala porque cada vez se crea una funcion nueva y .......

//prototipos// 

function User2() {
    this.name = 'hola Mundo';
    //a esto se le conoce como método de instancia
    this.logger = function() {
       console.log('loggeando...');
       this.login();
    }
}

//método de prototipo
User2.prototype.login = function() {
    console.log('Iniciando sesión...', this.name);
}

const user3 = new User2();
const user4 = new User2();

console.log(user3); //la funcion de login se ha guardado en el prototipo.
//desde el prototipo podemos llamar a metodos y propiedades que se encuentran dentro de la funcion constructora
//y desde la funcion constructora tambien podemos llamar a metodos y propiedades que estan dentro del prototipo