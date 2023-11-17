(()=>{
// Javascript no usa mas var por problemas con el hoisting y el scope.

    //console.log(a); // undefined
    var a = "diego";


    // Ya se estandarizo el let para su implementacion, en este caso no puedo pedir el valor antes de su asignacion.

    //console.log(b);  //undefined 
    let b = "Diego";
    //console.log(b);  // Diego


    const heroe = {

        a: 1,
        b: 2
    }

    //console.log(heroe);  // a:1 , b:2

// no cambie su tipo solo le asigne un nuevo valor dentro del objeto.
    heroe.b = 100;

    //console.log(heroe); // a:1, b: 100


    const getName = () => {
        console.log("viejo getName")

    }
// no puedo ya que no puedo reasignar la funcion que esta dentro de una constante.
   /* getName = ( ) => {
        console.log("Nuevo getName")

    }*/


   function  getNome () {
        console.log("viejo getNome")

    }

    //getNome = () =>{
       // console.log("Nuevo getNome")

   // } 
    //getName();

   // getNome();
   
 

   
    

})();
