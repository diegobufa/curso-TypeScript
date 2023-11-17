"use strict";
(() => {
    let myCustomVariable;
    myCustomVariable = "Fernando";
    console.log(typeof myCustomVariable);
    console.log("Paso por aqui");
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    console.log("Paso ahora por aqui");
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['ninguno']
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
