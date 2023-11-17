"use strict";
(() => {
    const hero = "flash";
    function returName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batisenial activada!';
    };
    console.log(typeof (activateBatisignal));
    console.log(typeof (returName));
    const heroName = returName();
})();
