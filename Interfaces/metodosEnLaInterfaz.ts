(()=>{
    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string) : string;
     
    }

    // La interfaz le dira como debe lucir este objeto.
    // La interfaz no sirven para crear una nueva instancia.
    

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
        },
        getFullAddress(id: string){
        return this.address.city
    }
    }

    

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address:{
            city: 'toronto',
            id: 245,
            zipCode: 'NEW DRE'
        },
        getFullAddress(id:string){
            return this.address.city
        }

    }
    console.log(client2.getFullAddress("ciudad"));

    





})();