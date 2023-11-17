"use strict";
(() => {
    const ironMan = {
        name: 'Tony Stark',
        weapon: 'Armorsuit'
    };
    const captainAmerica = {
        name: 'Capitan America',
        weapon: 'Shield'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const avengers = [ironMan, thor, captainAmerica];
    for (const avenger of avengers) {
        //console.log(avenger.name, avenger.weapon);
    }
})();
