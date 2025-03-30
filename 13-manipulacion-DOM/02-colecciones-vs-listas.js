let collection = document.getElementsByTagName('p');
let list = document.querySelectorAll('p');

console.log(collection, list); //se ven lo mismo mas o menos

//COLLECTION//

let item1 = collection.namedItem('chanchito'); //para acceder al elemento que nos interesa
let item2 = collection.item(3); //lo mismo de arriba pero con un indice como los de los arrays
let item3 = collection[3]; //lo mismo de arriba pero mas incluso parecido a un array

//y si queremos iterar los elementos???? HTML collection no tiene metodos ni formas que los podamos iterar. para hacerlo podemos hacer:

for(let el of collection) {
    console.log(el); //muy raro a veces me imprime una cosa y a veces otra
}

//para iterar tambien podemos convertir esto en un array y luego iterarlo:
Array.from(collection).forEach(x => console.log(x)); //forma 1
[...collection].forEach(x => console.log(x)); //forma 2 es lo mismo que la de arriba

//NODE LISTS//

let item4 = list.item(3);
let item5 = list[3]; //hacen lo mismo

list.forEach(x => console.log(x)); //itera todos los elementos de la list

//metodos entries, keys y values. devuelven iteradores pero no me he enterado muy bien

let entries = list.entries();
let keys = list.keys();
let values = list.values();