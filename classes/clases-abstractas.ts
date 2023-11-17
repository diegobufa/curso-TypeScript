(()=>{

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){

        }
    }

    class Xmen extends Mutante {
       salvarMundo(){
        return 'Mundo salvado!'
        
       }

    }

    class Villan extends Mutante{
        conquistarMundo(){
            return 'Conquistar la Tierra'
        }
    }

    const wolverine = new Xmen('Wolverine','Logan');

    //console.log(wolverine);
    //console.log(wolverine.salvarMundo())

    const magneto = new Villan ('Magneto','Magnus');

    //console.log(magneto);
    //console.log(magneto.conquistarMundo());

    const printName = (character: Mutante) => {
       // console.log(character.name);
    }

    printName(wolverine);

    const printRealName = (character2: Mutante)=>{
        //console.log(character2.realName)
    }

    printRealName (magneto)







})();