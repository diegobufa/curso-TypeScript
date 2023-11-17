(()=>{

    // never no es undefined, no es void.

    const error = (message:string):never => {


        throw new Error(message)
    }

    error('Auxilio!');
    console.log("Hola Mundo");
})();

(()=>{

    // never no es undefined, no es void.

    const error = (message:string):(never|number) => {

        if( false){
            throw new Error(message)
        }

        return 1;
        
    }

    error('Auxilio!');
    console.log("Hola Mundo");
})();

// never es un tipo que nunca va a retornar un valor, siempre va a terminar en un error.
