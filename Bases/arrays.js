"use strict";
(function () {
    const numbers = [1, 2, 3, 4, 5, '6', 7, 8, 9, 10];
    numbers.push(11);
    console.log(numbers);
    const villanos = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    villanos.forEach((villano) => {
        console.log(villano.toLocaleUpperCase());
    });
})();
