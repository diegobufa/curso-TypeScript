// Las tuplas es algo que esta en Typescript pero que no esta en JavaScript.

// Las tuplas son un array de datos que tienen un orden y un tipo especifico.

(function(){
    // Si quiero definir una tupla, lo que tengo que hacer es definir un array con los tipos de datos que quiero que tenga.
    // En este caso quiero que tenga un string y un number.
    // Si quiero agregar un dato mas, lo puedo hacer.

    // const hero = ['Dr Strange', 100 ] Ejemplo sin tupla
    const hero: [string, number, boolean] = ['Dr Strange', 100, true];
    console.log(hero);
    // hero[0] = 50;
    // En tsc esto no permitido debido que en mi tupla defini que el primer dato es un string y el segundo es un number.
    
    //hero[1] = "IronMan";
    // En tsc esto no esta permitido debido que en mi tupla el segundo dato es un number.
    // En JavaScript esto si esta permitido.

    hero[0]= "IronMan";
    hero[1]= 200;
    hero[2]= false;

    console.log(hero);

    // Definimos los tipos de datos que va a contener en nuesta tupla, que sera un array.
    




})();






