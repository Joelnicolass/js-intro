/* const axios = require("axios"); */

// tipos primitivos
// string, number, bigint, boolean, undefined y symbol ... apartado especial para null
/* 
const numero = 123;
const cadena = "string";
const booleano = true; */

// objetos
/* const persona1 = {
  name: "Nico",
};

const persona2 = {
  name: "Nico",
}; */

// los objetos se pasan por referencia!!! - Esta comparación siempre va a ser falsa!
//console.log(persona1 === persona2);

// TIPOS DE FUNCIONES EN JS

// 1. Funciones declarativas - nombradas

/* function suma(a, b) {
  return a + b;
}
 */
// 2. Funciones anonimas - funcion de flecha - arrow function

// estructura basica
() => {};

// callback es una funcion que se pasa como parametro a otra funcion
/* const nombres = ["Nico", "Juana"];
nombres.map((nombre) => {
  return nombre.toUpperCase();
});

const arrowSuma = (a, b) => {
  return a + b;
}; */

// retorno implicito
/* const arrowSuma2 = (a, b) => a + b; */

// si las llaves se colocan, va el return
/* const arrowSuma3 = (a, b) => {
  a + b;
};
 */
// caso mas abreviado - cuando se recibe un solo parametro, se pueden omitir los parentesis
/* const arrowAbreviado = (a) => a + 1; */

// PARA MAS TARDE
/* class Persona {
  name;

  constructor(name) {
    this.name = name;
  }

  saludar() {
    console.log(`Hola soy ${this.name}`);
  }
}

const p2 = {
  name: "Nico",
  saludar: function () {
    console.log(`Hola soy ${this.name}`);
  },
};

const p1 = new Persona("Nico");
console.log(p1.saludar());
console.log(p2.saludar());
 */
// scope - ambito

// var let const

// var variables globales
// let variables locales - en el scope
// const constantes locales - en el scope

/* const persona = {
  name: "Nico",
};

if (true) {
  persona.name = "Juan";
}

console.log(persona.name); */

// ------------------------------------------------------------------------ //

// ASINCRONISMO

// trabaja en un solo hilo

// PROMESA -> objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca

// una promesa tiene 3 estados -> pending, fulfilled, rejected
/* 
const promesa = new Promise((resolve, reject) => {
  resolve("Hola");
  reject("Chau");
});
 */
// async await
// then catch

/* const getUsers = async () => {
  const respuesta = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return respuesta.data;
};

const main = async () => {
  const users = await getUsers();
  console.log(users);
};

main();
 */

// -------------------------------------------------------

//IMPERATIVO

const nombres = ["Nico", "Juana", "Pedro"];

let resultado = "";

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] === "Juana") {
    resultado = nombres[i];
  }
}

console.log(resultado);

// FUNCIONAL

// find -> devuelve el primer elemento que cumple con la condicion

const resultado2 = nombres.find((nombre) => nombre === "Juana");
console.log(resultado2);

// -------------------------------------------------------
// METODOS DE ARRAYS

const colores = ["🔴", "🟠", "🟡"];

// find
// NO MUTA EL ARRAY ORIGINAL
const amarillo = colores.find((color) => color === "🟡");

// map -> transforma cada elemento del array. Se puede hacer una operacion sobre cada uno de los elemenots del array. Devuelve un nuevo array de la misma longitud que el original.
// NO MUTA EL ARRAY ORIGINAL
const colores2 = colores.map((color) => "color: " + color);
console.log(colores2);
console.log(colores);

// filter -> filtra los elementos del array. Devuelve un nuevo array con los elementos que cumplan con la condicion.

const todosMenosElRojo = colores.filter((color) => color !== "🔴");
console.log(todosMenosElRojo);

const carrito = [
  {
    id: 1,
    nombre: "Coca",
    precio: 120,
  },
  {
    id: 2,
    nombre: "Pepsi",
    precio: 110,
  },
  {
    id: 3,
    nombre: "Sprite",
    precio: 90,
  },
];

// TODO: todos los items que tengan un precio mayor a 100
// TODO: todos los items menos el id 2
// TODO: aplicar un descuento de 50% a todos los items

// FUNCIONES PURAS E IMPUREAS

// FUNCIONES PURAS -> no modifican el estado de la aplicacion, no tienen efectos secundarios, siempre devuelven el mismo resultado para los mismos parametros de entrada

const hacerMayuscula = (nombre) => {
  return nombre.toUpperCase();
};

// FUNCIONES IMPURAS -> modifican el estado de la aplicacion, tienen efectos secundarios, no siempre devuelven el mismo resultado para los mismos parametros de entrada
let nombre = "Nico";

const hacerNombreMayuscula = () => {
  nombre = nombre.toUpperCase();
};
