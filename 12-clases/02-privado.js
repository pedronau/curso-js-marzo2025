//habra momentos en los que queramos acceder a metodos o variables privadas en las clases, es muy facil

class User {
    constructor(a) {
        let name = a;
        this.getName = function() {return name};
    }
}

const u = new User('Chanchito Feliz'); //si hacemos console log vemos que no nos sale el nombre, hay que acceder a el mediante al metodo getName

//esto es muy comun y existen multiples motivos por los que querriamos hacerlo, podriamos querer que queremos crear propiedades que tenfan que ser validados primero. en las clases 
//en vez de hacer let name = a; y luego acceder con un metodo podemos hacer:

class User2 {
    #name; //la inicializamos asi

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

const u2 = new User2('Paco'); //si hacemos un console log de esto nos aparece #name como una propiedad pero es solo en chrome para un mejor debbuging, si intentamos acceder a ella mediante codigo no nos deja