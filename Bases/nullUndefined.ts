(()=>{

    let nada: undefined = undefined;
    //let algo: number = undefined;
    //undefined no puede ser asignado a un tipo diferente a el  mismo.
    let isActive: (boolean | undefined) = undefined;
    console.log(isActive);
    
    let isFalsy: any = undefined;
    console.log(isFalsy);


    console.log(nada);





})();

(()=>{

    let nada2: null= null;
    //let algo: number = undefined;
    //undefined no puede ser asignado a un tipo diferente a el  mismo.
    //let isActive2: boolean = null;
   //console.log(isActive2);
    
    let isFalsy2: any = null;
    console.log(isFalsy2);


    console.log(nada2);

    null !== undefined ; // son distintos




})();


