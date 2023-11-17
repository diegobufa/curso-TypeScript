
namespace Validations {

    export const validateText  = (text: string): boolean => {
        return (text.length > 3 ) ? true : false; 
    }

    export const validateFecha = (fecha: number): boolean => {
        return ( isNaN (fecha.valueOf()))
        ? false
        : true;
    }
}

console.log(Validations.validateText("Diego"))
console.log(Validations.validateFecha(2))