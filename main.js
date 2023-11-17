"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validations.validateFecha = (fecha) => {
        return (isNaN(fecha.valueOf()))
            ? false
            : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText("Diego"));
console.log(Validations.validateFecha(2));
//# sourceMappingURL=main.js.map