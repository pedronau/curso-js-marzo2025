/**un metodo estático es un metodo que pertenece a la clase pero no pertenece a la instancia (opbjeto creado)*/

class Restaurants {
    constructor(name) {
        this.name = name;
    }
    
    getHorario() {
        //...
    }

    static getRestaurant(id) { //metodo estatico. ahora es accesible desde la clase en sí en vez que desde la instancia
        //...
    }
}

const restaurante1 = Restaurants.getRestaurant(12); //accediendo al metodo estatico