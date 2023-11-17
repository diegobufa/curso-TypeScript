
(()=> {

class Avenger {
    name;
    power;

    constructor( name = "No Name", power = 0 ){
        this.name = name;
        this.power = power;        
    }
    }

    class FlyingAvenger extends Avenger {
        flying;
        constructor (name, power) {
            super(name, power)
            this.flying = true;
        }
    }

    const falcon = new FlyingAvenger('Falcon', 100)
   // console.log(falcon)

    const hulk = new Avenger('Hulk', 9001)
    //console.log(hulk)

    const CaptainAmerica = new Avenger('Capitan America', 5005)
   // console.log(CaptainAmerica)

}

    



)();