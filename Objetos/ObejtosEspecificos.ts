(()=>{

    let flash: { name:string, age?: number, powers: string[], getName?: ()=> string} = {
        name: 'Barry Alem,',
        age: 26,
        powers: ['Super Velocidad', 'Viajar en el Tiempo']
    }

    flash = {
        name: 'Clark Kent',
        //age: 30,
        powers: ['Super Fuerza'],
        getName(){
            return this.name;
        }
    }

    

// Puedo marcar como opcional al igual que los argumentos con el simbolo de ?
// este si no coloco despues esa opcion al reasignar los valores del objeto no me marcara
// error al no estar, la diferencia con las opcionales de argumentos es que lo puedo colocar 
// en cualquier parte de las claves.


console.log(flash.getName?.())

// Especificacion de la lamada a la funcion.



})();