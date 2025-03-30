//antes de ver los eventos en JS vamos a crear un formulario pequeñito

let form = document.createElement('form');
form.id = 'mi-formulario';

let input = document.createElement('input');
input.setAttribute('type', 'text');

let btn = document.createElement('button');
btn.innerText = 'Enviar';

form.append(input);
form.append(btn);

document.body.append(form);

//hemos creado el formulario, vamos a asignarle eventos

form.onmouseenter = event => {
    console.log('entra el mouse', event);
} //se va a disparar cuando el usuario pase el mouse por encima

form.onmouseleave = event => {
    console.log('sale el mouse', event);
} //se va a disparar cuando el usuario saque el mouse de encima

input.onfocus = e => {
    console.log('input on focus'); 
} //se activa cuando se pincha en el formulario

input.onblur = e => {
    console.log('perdio el focus'); 
} //se activa cuando se pincha fuera del formulario

input.onchange = e => {
    console.log('valor cambia', e.target.value); 
} //se activa cuando se cambia el valor

btn.onclick = e => {
    e.preventDefault(); //los botones en formularios por defecto refrescan la web. esto lo impide
    console.log('boton clickeado'); 
}

//se pueden hacer estos eventos tambien con un addEventListener:

btn.addEventListener('click', e => {
    e.preventDefault();
    console.log('boton clickeado'); 
});

//HAY UN VIDEO AHORA A PARTE DE DRAG N DROP PERO NO TENGO GANAS DE COGER APUNTES es domingo y estoy cansao