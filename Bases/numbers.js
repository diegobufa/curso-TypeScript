"use strict";
(function () {
    let avengers;
    console.log(avengers);
    const villanos = 20;
    if (avengers < villanos) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
})();
(function () {
    let avengers2 = 10;
    console.log(avengers2);
    const villanos2 = 20;
    if (avengers2 < villanos2) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
})();
(function () {
    let avengers3 = 10;
    console.log(avengers3);
    const villanos3 = 20;
    if (avengers3 < villanos3) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers3 = Number('321');
    console.log({ avengers3 });
    avengers3 = Number('321A');
    console.log({ avengers3 });
    avengers3 = Number('ABC');
    console.log({ avengers3 });
})();
