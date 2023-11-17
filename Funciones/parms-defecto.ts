(()=>{
    const fullName = (firstName: string, lastName?: string, upper: boolean = false):string => {
// En este caso el argumento upper esta seguido de un argumento opcional
// por lo cual aun cuando sea un argumento requerido nos dara un error por estar despues de un
// argumento opcional.
if (upper ){
    return `${firstName} ${lastName || "No LastName"} `.toUpperCase();
}
else {
    return `${firstName} ${lastName || "No LastName"} `
}



        return `${firstName} ${lastName|| "No LastName"}`;
   
    }
// Mando los tres argumentos en este caso el arg upper tiene valor y me pasara por el if todo a mayusculas.
    const name= fullName('Tony','stark',true);
// En este otro caso no enviare el segundo argumento que es opcional pero aun asi javacript me lo interpreta como
// ese valor asignado de segundo arg.
const name2 = fullName('Tony', true);

    console.log(name);
    //TONY STARK

    console.log(name2);
    // Tony true 

})();

