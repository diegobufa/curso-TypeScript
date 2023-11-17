(()=>{
    const fullName = (firstName: string, lastName?: string):string => {
// En typescript el argumento que se le coloque el simbolo de ? es un argumento opcional
// en el cual puede ser que traiga un dato segun su tipo o no, si no lo tendria seria un 
// tipo de dato obligatorio para Typescript.

        return `${firstName} ${lastName|| "No LastName"}`;
    // Le coloque que si tiene un valor por este caso un undefined tome el valor seguido del or
    // en este caso con la leyenda de No Lastname.

    }

    const name= fullName('Tony');
    // Tony undefined

    // Estamos recibiendo un undefined por parametro

    console.log({name});

})();

/*
La diferencia con Javascript y typescript
es que en este caso los argumentono necesariamente estaran definidos
por su tipo de valor, y tampoco si es un undefined a Javascript no le importara
aun ejecutara una accion.

const sumar = (a,b,c,d,e,f,g ) => { a + b + c };
sumar(1,2,3);
resultado = 6 
aun cuando hay argumentos que no recibieron ningun tipo de valor
y si los tipos de valor de cada asignacion fueran distintos aun asi
trataria de realizar dicha accion.





*/

