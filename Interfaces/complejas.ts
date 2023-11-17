(()=>{
    interface Client {
        name: string;
        age?: number;
        address: Address
        /*address: {
            id: number,
            zipCode: string,
            city: string 
        }*/
    }
    // Las interface se van anidados de la principal a las secundarias, en este caso
    // la interface client tendra anidada la interface Address para reemplazar todo el codigo 
    // dentro de una sola interface, para que quede separados y sea mas legible.


    interface Address {
        id: number,
        zipCode: string,
        city: string
    }

    const client: Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zipCode: 'KYZ SUD',
            city: 'Ottawa'
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address:{
            city: 'toronto',
            id: 245,
            zipCode: 'NEW DRE'
        }

    }
    

    





})();