const saludo = 'Hola Mundo!';

//vamos a ver las propiedades (y metodos tambien) de los strings a las que podemos acceder:

saludo.length;
console.log(saludo.length);
saludo.indexOf(); //si le metes un parametro te dice en que posicion esta dentro del string. los strings parten de base 0. si le pasamos algo que no existe nos devuelve -1
console.log(saludo.indexOf('Mu')); 
saludo.includes(); //lo mismo de antes pero devuelve true o false
console.log(saludo.includes('Mundo'));
saludo.replace(); //reemplaza el texto pero no modifica la variable original. crea uno nuevo
saludo.toLowerCase();
saludo.toUpperCase();
saludo.substring(); //crea un string que es un fragmento del string que le metamos

saludo.trim(); //quita espacios


//todo esto es util para MOSTRAR DATOS AL USUARIO