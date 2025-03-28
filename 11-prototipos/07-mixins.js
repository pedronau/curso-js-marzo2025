function mixin(Ctr, ...args) { //Ctr: funcion constructora, ...args: métodos que le queremos pasar
    Object.assign(Ctr.protorype, ...args);
}

let vuela = {
    vuela() {
        console.log('Volando...');
    }
}

let nada = {
    nada() {
        console.log('Nadando...');
    }
}

let banio = {
    banio() {
        console.log('Bañándose...');
    }
}

let camina = {
    camina() {
        console.log('Caminando...');
    }
}

//vuela, nada, camina y va al baño
function Pato() {
    this.name = 'Patito';
}
mixin(Pato, nada, banio, camina, vuela); //al objeto creado le añade a su prototipo esos métodos

//y luego va añadiendo animales que algunos solo nadan otros solo caminan otros hacen varias......