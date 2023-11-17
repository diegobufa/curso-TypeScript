"use strict";
(function () {
    let isSuperman = true;
    let isBatman = false;
    console.log(isSuperman);
    console.log(isBatman);
    console.log(isSuperman);
})();
(function () {
    let isSuperman2 = true;
    let isBatman2 = false;
    isSuperman2 = true && false;
    console.log({ isSuperman2 });
    isSuperman2 = true && true;
    console.log({ isSuperman2 });
    console.log({ isBatman2 });
    console.log({ isBatman2 });
    isBatman2 = (isSuperman2) ? true : false;
    console.log({ isBatman2 });
})();
