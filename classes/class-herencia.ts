(()=>{

    class Avenger {

        constructor(
            public name: string,
            public realName: string
        ){
           // console.log('Constructor Avenger Llamado')
        }
        protected getFullName(){
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {
        constructor(
            public name: string,
            public realName: string,
            public isMutant: boolean)
        {
            super(name, realName)
            //console.log('constructor wolverine extends')

            
        }
        getFullNameDesdeXmen(){
            console.log(super.getFullName())
        }

    }


    const wolverine = new Xmen('wolverine', 'Logan', true)
    //console.log(wolverine)
    //wolverine.getFullNameDesdeXmen();
    

    const nuevoAvenger = new Avenger("Hola", "Mundo");
    //console.log(nuevoAvenger);


    /* 
    La diferencia entre private, protected y public es:

    private: El campo o metodo solo es visible dentro de la clase donde se define.
    protected: El campo o metodo es visible en la clase donde se define y en cualquiera de sus subclases.
    public: Son visibles para todas las clases, aunque esten fuera de los paquetes.


    */







})();