/**USO DE LAS CONDICIONALES
 * * Se utiliza una condicional en programación cuando se desea ejecutar cierto código solo si se cumple una determinada condición. En otras palabras, una condicional es una estructura de control que permite al programador tomar decisiones en función del estado actual del programa.
 */

// EJEMPLO USADO IF, coloca tu edad en la variable
var edad = 20;

if (edad >= 18) {
  console.log('Usted puede votar');
} else {
  console.log('Usted aún no puede votar');
}

// EJEMPLO USADO SWITCH, coloca tu edad en la variable
var edad = 20;
var mensaje = '';

switch (true) {
  case edad >= 18:
    mensaje = 'Usted puede votar';
    break;
  default:
    mensaje = 'Usted aún no puede votar';
}

/**Ejercicio - la funcion validate que esta creada abajo
 * tendras que validar con cualquiera de las condicionales (if/switch)
 * la funcion debera validar los datos que le llegar por parametros
 * name -> que es un tipo string
 * password -> que es un tipo string
 *
 * validar lo siguiente:
 * NAME:
 * -->  si name tiene un tamano de caracteres igual a 0 debera retornar un string
 *      que diga lo siguiente 'nombre esta vacio'
 * -->  el name debe ser maximo de 10 caracteres debera retornar un string
 *      que diga lo siguiente 'el nombre debe ser maximo de 10 caracteres'
 *
 * PASSWORD:
 * -->  si password tiene un tamano de caracteres igual a 0 debera retornar un string
 *      que diga lo siguiente 'contrasena esta vacio'
 * -->  password debe ser minimo de 8 caracteres, de lo contrario retornar un string
 *      que diga 'la contrasena debe tener minimo 8 caracteres'
 * -->  el password debe ser maximo de 10 caracteres debera retornar un string
 *      que diga lo siguiente 'la contrasena debe ser maximo de 10 caracteres'
 *
 * POR ULTIMO:
 * --> si los datos fueron ingresados correctamente deberas retornar un string
 *     que diga 'logueado correctamente'
 *
 * TIPS: para saber el tamano de un string o de un array deberas usar el ".length"
 */
function validate(name, password) {
  if (name.length === 0) return 'nombre esta vacio';
  if (name.length === 0) return 'nombre esta vacio';
}

module.exports = validate;
