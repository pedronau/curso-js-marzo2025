// if (condicion) {
//     expresion
// }

let edad = 25;

if (edad > 17) {
    console.log('Usuario mayor de edad');
} else {
    console.log('Usuario menor de edad');
}

// if (condicion) {
//     expresion
// } else {
// expresion 2
//}

//con mas condiciones:

if (edad > 17) {
    console.log('Usuario mayor de edad');
} else if (edad > 13) {
    console.log('Usuario necesita estar acompañado de sus padres');
} else {
    console.log('Usuario menor de edad');
}