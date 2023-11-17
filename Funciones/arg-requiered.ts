(()=>{
    //Definimos nuestro argumentos para que sean de parametros string
    // si se pasa un valor que no sea string typescript se quejara y tambien en el caso no podra faltar ningn argumento ya que son obiligatorios  


    const fullName = (firstName:string ,lastName:string):string => {
 
        if( !firstName){
          throw new Error("Nombre requerido ")
         }
         // Este tipo de vaidacion si firstName undefined dara un error


        return `${firstName} ${lastName}`

    }

    const name = fullName ( 'Tony', 'Stark');

    console.log({name})



})();


