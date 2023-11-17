
// let msg: string = "Hola Mundo";
// msg = "Diego" Me permite cambiar el valor pero no el tipo de dato.
// msg = 123;  No permite cambiar el tipo de dato.
/*
const hero = {
    name: "Ironman",
    age: 45
}
hero.age = 50;
console.log(hero)
console.log(hero.name);
console.log(hero.age + 1);*/

const a = 10; // typescript al utilizar const, ya adopta el valor la variable a.
let b = 10; // en el caso de let no adopta el valor, pero si ya infiere en que tipo de dato se guardara.

// Por eso nosotros debemos designar el tipo de dato antes que lo haga el mismo.

const c: number = 10;
let d: number = 10;

b = 3.123456;

console.log(b);

console.log(c);
 // Any  Nos permite definir un valor que puede ser de cualquier tipo de dato.

let e;

e = 325;
e= {};
e = [];
e = true;

// Las funciones deberian saber el valor y tipo de dato que reciben y el tipo de dato que retornan.

function sayHello3(msg: string) {
    console.log(msg + " " +  "otro string" );
    
}


(function ()  {
    const f: number = 20;

    console.log(f);
})();







