//SPREAD OPERATOR// sirve para combinar arrays pero de una forma mas fácil y flexible

let arr1 = [1, 2];
let arr2 = [5, 6];

let arr3 = [...arr1]; //coge los elementos de arr1 y los coloca dentro del nuevo arr3 que hemos creado

console.log(arr3);

let arr4 = [0, ...arr1, 3, 4, ...arr2]; //ahora coge lo de arr1 y ademas añade 0, 3 y 4 y añade arr2

//con estos podemos generar copias de los arrays:

let arr5 = [...arr4]; //genera uno nuevo a parir de este, si modificamos el original el nuevo no cambia