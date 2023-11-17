(()=>{

    // 1-  Es una funcion flecha que recibe dos numeros como parametros y el cual los va a sumar a su salida.

    const addNumber = (a: number, b: number)=> a + b;

    // 2- En esta funcion flecha le pasamos por argumento un string para completar el mensaje de salida, si nosera un undefined.

    const greet = ( name: string ) => `Hola ${name}`;

    // 3- 
    const saveTheWorld = () => `El mundo esta Salvado!`;


    let myFunction: Function; // definimos que su tipo sera unicamente tipo funcion como tipo por eso no acepta un tipo de dato como salida.

    //? myFunction = 10;

    //? console.log(myFunction);

    let myFunction1: (y:number, z:number)=> number;
    myFunction1 = addNumber;
    console.log(myFunction1(2,5));


    let myFunction2: (y:string)=> string;
    myFunction2 = greet;
    console.log(myFunction2('Diego'));

    let myFunction3: ()=> string;

    myFunction3 = saveTheWorld;
    console.log(myFunction3());

    
    









})();