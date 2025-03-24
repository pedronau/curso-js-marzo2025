const ahora = new Date();
console.log(ahora);

//esto nos devuelve la hora actual porque Date() nos da la hora de este momento.
//para crear una fecha que nosotros queramos:

const fecha = new Date('December 11 1986 14:15 GMT-0300'); //con este metodo hay que meterde a date de parametro un string con la fecha en formato EEUU (mes, dia, año) en el ejemplo le ha metido como parametros tambien la hora y la zona horaria
console.log(fecha);

//crear fecha pero con mas argumentos

const fecha2 = new Date(1986, 11, 25, 14, 15); //el mes diciembre es el 11 pq es en base 0 por lo que enero es el 0 y diciembre el 11
console.log(fecha2);

//para calcular horas de otro pais pues le sumas la diferencia horaria al parametro por ejemplo

//para calcular las fechas en formato internacional:

fecha2.toDateString();
fecha2.toISOString(); //este es el formato con el que queremos trabajar y mandar al servidor
fecha2.toTimeString();
console.log(fecha2.toTimeString()); 

// para obtener año mes o dia de una fecha:

fecha2.getDate();
fecha2.getDay();

//  y para cambiar el dia la fecha o algo...

fecha2.setDate();
fecha2.setTime();