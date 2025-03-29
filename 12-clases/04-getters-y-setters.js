class Restaurants {
    #timaetable; //var donde almacenamos el valor que nos mete el
    constructor(name) {
        this.name = name;
    }
    
    get timetable() {
        return this.#timaetable;
    }

    set timetable(value) {
        //ahora tenemos que validar que el valor que introduce el cliente es correcto antes de setearlo
        let date = new Date(value);
        let time = date.getTime();
        if(Number.isNaN(time)) {
            throw new Error('Fecha inválida'); //si la fecha esta mal se queda aqui
        }
        this.#timaetable = date; //si la fecha esta bien avanza y le asigna el valor a date
    }
}

const rest1 = new Restaurants('BBQ');

rest1.timetable = '1 Apr 1923';