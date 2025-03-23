/**los STRING, NUMBERS y BOOLEANS literales se comportan distinto de los crados mediante un constructor,
 * eso nos podria dar errores en el codigo y no saber por que mierda pasa
 * 
 * EJEMPLO: (ver en consola)
 */

const s1 = '1 + 1';
const s2 = new String('1 + 1');
console.log(s1, s2);

/**LAS FUNCIONES TAMBIEN SE COMPORTAN COMO OBJETOS (ver video 54 ) */