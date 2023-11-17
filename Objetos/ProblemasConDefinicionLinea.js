"use strict";
(() => {
    let flash = {
        name: 'Barry Alem,',
        age: 26,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    };
    let superman = {
        name: 'Clark Kent',
        age: 30,
        powers: ['Super Velocidad'],
        getName() {
            return this.name;
        }
    };
})();
