(()=>{
    // En typescript podemos crear nuestros propios tipos con la palabra reservada type.
    // Type no existe en Javascript.


    type Heroe = {
        name: string;
        age?: number;
        powers: string[];
        getName?: () => string
    }

    let flash: Heroe = {
        name: 'Barry Alem,',
        age: 26,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    }

    let superman: Heroe = {
        name: 'Clark Kent',
        age: 30,
        powers: ['Super Velocidad'],
        getName() {
            return this.name;
        }        
    }

    




})();