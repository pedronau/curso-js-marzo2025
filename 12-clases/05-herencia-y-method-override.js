class Entidad {
    constructor(id) {
        this.id = id;
        this.created_at = new Date();
    }
    save() {
        console.log('save en Entidad');
    }
}

//queremos reutilizar la lógica de Entidad para aprovecharla en nuestra clase Usuario

class User extends Entidad {
    constructor(name) {
        super(1); //llama al constructor padre (el de Entidad). el 1 es un ejemplo
        this.name = name;
    }
}

const u = new User('Chanchito Feliz');

/**
 * lo que pasa con esto es que por ejemplo el método Save de la clase Entidad digamos que esta en el prototipo superior o no se que historia...
 * si lo llamaramos se ejecutaría el save que está en la clase Entidad
 * por lo que si quisieramos agreagr otro el mismo metodo save en User no podriamos, habria que hacer un method override ¿¿MAL??
 * que es lo que vamos a ver en la siguiente clase:
 * 
 * para anular en u el método save lo que se hace es: NOMBRAR OTRO IGUAL EN LA CLASE NUEVA
 */

class User2 extends Entidad {
    constructor(name) {
        super(1);
        this.name = name;
    }

    save() {
        console.log('save en usuario');
    }
}

const u2 = new User2('Chanchito Feliz');

/**SI POR EJEMPLO QUISIERAMOS REUTILIZAR EL CÓDIGO DEL SAVE PADRE (EL DE ENTIDAD) PUES LO TENEMOS QUE LLAMAR CON UN SUPER */

class User3 extends Entidad {
    constructor(name) {
        super(1);
        this.name = name;
    }

    save() {
        super.save();
        console.log('save en usuario');
    }
}

const u3 = new User3('Chanchito Feliz'); //si ejecutamos u3.save(); se ejecutan los dos metodos save