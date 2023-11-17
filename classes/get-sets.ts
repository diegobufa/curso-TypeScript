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
        }

        get fullName(){
            return `${this.name} - ${this.realName}`
        }

        set fullName(name:string){
            if(name.length < 3){
                throw new Error("El nombre debe tener mas de 3 letras.")
            }
            this.name = name;
        }

        set fullName2 (realName:string){
            this.realName = realName;
        }

        get fullName2(){
            return ` ${this.realName} - ${this.name}`
        }

        getFullNameDesdeXmen(){
            //console.log(super.getFullName())
        }
    }


    const wolverine = new Xmen('wolverine', 'Logan', true)
    //console.log(wolverine)
    wolverine.getFullNameDesdeXmen(); 
    
    wolverine.fullName = 'Diego';
    wolverine.fullName2 = 'Bufa';


   // console.log(wolverine.fullName)
   // console.log(wolverine.fullName2)

    
    
})();