//MÉTODO EVERY//

let usuarios = [
    { id: 1, activo: true },
    { id: 2, activo: false },
    { id: 3, activo: false },
];

let todosActivos = usuarios.every(u => { //comprueba si todos los usuarios se encuentran activos (es decir, comprueba una proiedad del array o como sea)
    console.log('todos activos', u.id); //NO LO ENTIENDO MUCHO VER EN OTRO LADO
    return u.activo;
});

console.log(todosActivos);

//MÉTODO SOME//

let algunoActivo = usuarios.some(u => { //se ejecuta hasta que encuentre alguno con el valor de true
    console.log(u.id);  //NO LO ENTIENDO MUCHO VER EN OTRO LADO
    return u.activo;
});

console.log(algunoActivo);

//VÍDEO DÓNDE LO EXPLICA MEJOR
//  https://www.youtube.com/watch?v=IzQ8NLRjxPs&ab_channel=codeSTACKr