"use strict";
(() => {
    var a = "diego";
    let b = "Diego";
    const heroe = {
        a: 1,
        b: 2
    };
    heroe.b = 100;
    const getName = () => {
        console.log("viejo getName");
    };
    function getNome() {
        console.log("viejo getNome");
    }
})();
