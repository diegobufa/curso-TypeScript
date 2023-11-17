(()=>{
    type Heroe = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string
    }

    let myCustomVariable: (string | number | Heroe);

    myCustomVariable = "Fernando";
    console.log(typeof myCustomVariable); // string 
    console.log("Paso por aqui")


    myCustomVariable = 20;
    console.log(typeof myCustomVariable); // number
    console.log("Paso ahora por aqui")


    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['ninguno']
    }
    console.log(typeof myCustomVariable);  // Object
    console.log( myCustomVariable);
    // En javascript no existe el tipo heroe ya es unicamente en typescript.










})();