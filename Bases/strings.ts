(()=>{

    const batman: string = 'Batman';
    const lintenarVerde: string  = "Linterna Verde";
    const volcanNegro: string  = ` Heroe: Volcan Negro`;
    const abc = 123;

    console.log(batman.toUpperCase());

    console.log(`I'm ${batman.toUpperCase()}, ${abc.toString()}`);

    console.log(batman[10]?.toUpperCase() || 'No esta presente')

    //batman[10]? esto es un null check que revisara si el valor es nulo entonces no ejecutara el toUpperCase al colocarle || si eso ocurre ejecuta ese mensaje en especial.
    // || es or en esta logica.
    

})()