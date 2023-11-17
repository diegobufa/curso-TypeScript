"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || "No LastName"} `.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || "No LastName"} `;
        }
        return `${firstName} ${lastName || "No LastName"}`;
    };
    const name = fullName('Tony', 'stark', true);
    const name2 = fullName('Tony', true);
    console.log(name);
    console.log(name2);
})();
