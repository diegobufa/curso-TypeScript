( function () {
    let isSuperman = true;
    let isBatman = false;

    //isSuperman = undefined;
    //isBatman = null;

    console.log(isSuperman);
    console.log(isBatman);

    //isSuperman = 30;
    console.log(isSuperman);
    

})();

// En este tipo de caso tscme permitio cambiar el tipo de dato de boolean
// a null o undefined.

( function () {
    let isSuperman2: boolean = true;
    let isBatman2: boolean = false;    
    isSuperman2 = true && false;


    console.log({isSuperman2});
    // para que este sea true debe ser verdadero de ambos, por eso con el false dara de valor false.
    // Ambos son true dara resultado true
    isSuperman2 = true && true;
    console.log({isSuperman2});

    console.log({isBatman2});    

    // En esta comparacion quiere asiganar un string a un valor boolean por eso tira el error en tsc

    //isBatman2 = ( isSuperman2) ? "ABC" : "XYZ";
    console.log({isBatman2})
   // En esta compraracion se le asignara un valor boolean en la comparacion por lo tanto no tira error.

    isBatman2 = ( isSuperman2) ? true : false;
    console.log({isBatman2})
    

})();