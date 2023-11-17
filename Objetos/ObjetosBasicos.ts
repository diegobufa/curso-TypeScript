(()=>{

    let flash = {
        name: 'Barry Alem',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    }

    //console.log(flash);

   /* flash = {
        planetBorn: "Krypton"
       

        }*/
    
    // Esto en javascript es viable ya que del objeto flash crea un nuevo 
    // con planetBorn como su valor.En este caso reasignara los valores originales de
    // flash y colocara los valores del nuevo objeto.

    //Sin tener en cuenta los tipos de datos originales.

    // En typscript no nos dejara el hecho de cambiar ni el tipo de dato, ni el orden
    // de los tipos de datos, tampoco dejara que se cree un nuevo valor y clave.
    

    flash = {
        name: "Clark Kent",
        age: 30,
        powers: ["Super Fuerza"],
        planetBorn: "Krypton"
    }


    console.log(flash);





})();