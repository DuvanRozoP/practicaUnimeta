// Objetos en JavaScript
// En JavaScript, un objeto es una estructura de datos que nos permite almacenar y organizar valores y funciones relacionadas en una sola entidad. Los objetos se definen utilizando llaves ({}) y pares clave-valor separados por coma

//Ejemplos
const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid',
  hobbies: ['correr', 'leer', 'bailar'],
  saludar: function () {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  },
};

/*
  En este ejemplo, persona es un objeto que tiene cuatro propiedades (nombre, edad,     ciudad y hobbies) y un método (saludar). La sintaxis this se utiliza para hacer referencia al objeto actual, por lo que this.nombre se refiere a la propiedad nombre del objeto persona, y así sucesivamente.

Acceder a las propiedades de un objeto

Podemos acceder a las propiedades de un objeto de dos maneras: mediante la notación de punto o la notación de corchetes.
*/

console.log(persona.nombre); // "Juan"
console.log(persona['edad']); // 30

// Añadir o modificar propiedades de un objeto
// Podemos añadir o modificar propiedades de un objeto utilizando la notación de punto o la notación de corchetes.

persona.email = 'juan@example.com';
persona['edad'] = 31;

// En este ejemplo, hemos añadido una nueva propiedad email al objeto persona, y hemos modificado la propiedad edad.

// Eliminar propiedades de un objeto
// Podemos eliminar una propiedad de un objeto utilizando el operador delete.

delete persona.ciudad;

// En este ejemplo, hemos eliminado la propiedad ciudad del objeto persona.

// Recorrer un objeto
// Podemos recorrer las propiedades de un objeto utilizando un bucle for...in.

for (let clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}

// Este bucle recorre todas las propiedades del objeto persona y muestra su nombre y valor.

function countAge(invitados) {
  // La funcion llamada recibe como argumento un objeto 'invitados', en el objeto tenemos objetos que representan los invitados
  // a una fiesta en donde todos tienen una propiedad "edad" .
  // debe retornar la cantidad de invitados que son menores de 18.
  // Por ej:
  // let invitados = {
  //     Luna: {
  //         edad: 25
  //     },
  //     Sebas: {
  //         edad: 7
  //     },
  //     Marce: {
  //         edad: 34
  //     },
  //     Nicky: {
  //         edad: 15
  //     }
  // };
  // cuantosMenores(invitados) devuelve 2
  // Tu código aca:
}

module.exports = countAge;
