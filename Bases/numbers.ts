(function(){
    let avengers;

    console.log(avengers);

    const villanos:number = 20;
    
    if(avengers < villanos){
        console.log("Estamos en problemas")
    } else {
        console.log("Nos salvamos")
    }
    // En tsc el valor avengers tira error ya que seria un valor undefined el cual no puede ser bien comparadao en el if.
    // Pero en JS este tipo de error lo pasa por alto dando por resultado:
    // Nos salvamos  ( ya que undefined < 20 es false)

})();

(function(){
    let avengers2: number = 10;

    console.log(avengers2);

    const villanos2:number = 20;
    
    if(avengers2 < villanos2){
        console.log("Estamos en problemas")
    } else {
        console.log("Nos salvamos")
    }
    

})();


(function(){
    let avengers3: number = 10;

    console.log(avengers3);

    const villanos3:number = 20;
    
    if(avengers3 < villanos3){
        console.log("Estamos en problemas")
    } else {
        console.log("Nos salvamos")
    }
    avengers3 = Number('321');

    console.log({avengers3})

    avengers3 = Number('321A');// NaN esto da que es un numero not a number


    console.log({avengers3})

    avengers3 = Number('ABC');// NaN esto da que es un numero not a number
    

    console.log({avengers3})

    // Number tomara cualquier parametro lo pasara como any y devolvera un number por eso si no es convertible dara como resultado un NaN
    

})();
