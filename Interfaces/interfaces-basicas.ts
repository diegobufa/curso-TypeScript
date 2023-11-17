(()=>{
    // Las interface trabaja igual que el type en el cual no sera visualizada por el JS.
    // Estan diseniada para mostrar como es este objeto.
    

        interface  Heroe {
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