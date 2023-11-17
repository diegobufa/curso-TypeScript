"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta Salvado!`;
    let myFunction;
    let myFunction1;
    myFunction1 = addNumber;
    console.log(myFunction1(2, 5));
    let myFunction2;
    myFunction2 = greet;
    console.log(myFunction2('Diego'));
    let myFunction3;
    myFunction3 = saveTheWorld;
    console.log(myFunction3());
})();
