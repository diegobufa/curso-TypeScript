(()=>{
// Argumentos REST viene de decir el resto de los argumentos.
// En este caso lo queremos utilizar para que el primer argumento sea
// obligatorio y los demas no pueden ser optativos.

    const fullName = (firstName: string, ...restArgs: string[]):string => {

        return `${firstName} ${restArgs.join( ' ' )}`

    }

    const superman = fullName('Clark','Joseph','Kent' );

    console.log({superman})


/*
Diferencia entre ... spredOperator y ...rest

El rest argument se usa en la definición de funciones y métodos 
para recoger múltiples argumentos en un solo parámetro, y TypeScript sabe que
es un parámetro rest porque se utiliza en ese contexto de definición en una función.
Por otro lado, el spread operator se utiliza en la llamada a funciones o en la creación 
de estructuras de datos como arrays u objetos para esparcir elementos, y TypeScript lo 
interpreta como un operador de propagación en ese contexto. 

En pocas palabras, TypeScript se basa en el contexto en el que se encuentra el símbolo "..." 
para determinar si es un rest argument o un spread operator, lo que significa que su 
comportamiento varía según si está en la definición de una función o en la llamada a una 
función o en otro contexto.



*/



})();
