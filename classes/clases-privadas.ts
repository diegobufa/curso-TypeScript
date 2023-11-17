(()=>{

    class Apolipse{
        constructor(
            public name: string
        ){}
    }





   /* const apocalipsis1 = new Apolipse("Soy Apocalipsis ... el unico");
    const apocalipsis2 = new Apolipse("Soy Apocalipsis ... el unico")
    const apocalipsis3 = new Apolipse("Soy Apocalipsis ... el unico")

    console.log(apocalipsis1);
    console.log(apocalipsis2);
    console.log(apocalipsis3);
    console.log(apocalipsis1, apocalipsis2, apocalipsis3)*/
})();

(()=>{

    class Apocalipsis{
    
        static istance: Apocalipsis;
       private constructor(
            public name: string
        ){}
        static callApocalipsis(): Apocalipsis{
            if( !Apocalipsis.istance ){
                Apocalipsis.istance = new Apocalipsis("Soy un nuevo apocalipsis")
            }

            return Apocalipsis.istance;

        }
        changeName(newName: string):void{
            this.name = newName;
        }
    }

    const apocalipsis1 = Apocalipsis.callApocalipsis()
    const apocalipsis2 = Apocalipsis.callApocalipsis()
    const apocalipsis3 = Apocalipsis.callApocalipsis()

    apocalipsis1.changeName("Xavier")
    console.log(apocalipsis1, apocalipsis2, apocalipsis3)




})();