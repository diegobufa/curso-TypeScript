/* 
Tipos de daos en Typescript 

Primitivos: 
            - Boolean
            - Number
            - String
            - Null
            - Undefined
            - Symbol
            - Void

Compuestos:
            - Arrays
            - Functions
            - Objects
            - Classes
            - Interfaces
            - Enums
            - Genericos
            - Tuplas
            
*/

// String

"Maria Perez";
'Tesla';
`<h1> Hola Mundo </h1>`;

// Number

let Pi = 3.1416;
let Salary = 1500.01;
let age = 30;

// Boolean

let isActive = true;
let keepAlive = false;

// Null y Undefined

let ageNull = null;
let heroUndefined= undefined;

// Symbol

let Symbol1 = Symbol("a");
let sym = Symbol();

// Symbol nos garantiza que aunque los objetos hayan sido creados igual gracias al simbolo se pueden distinguir

// Objecto Literal

let person = {
    name: "Maria",
    age: 30
}
// Este tipo de objecto tiene par de clave y de valor

// Class

class Person1 {
    constructor(){
       name;
       age;
      
    
}
}

// Functions

function sayHello(){
    console.log("Hello");
}
sayHello();

// Function flecha

const sayHello2 = () => {
    return "Hello 2";
}
console.log(sayHello2());






