"use strict";
(() => {
    var _a;
    let flash = {
        name: 'Barry Alem,',
        age: 26,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    };
    flash = {
        name: 'Clark Kent',
        powers: ['Super Fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
