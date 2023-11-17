"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "No LastName"}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
