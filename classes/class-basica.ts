(()=>{
    class Avenger {
        private name: string;
        // private quiere decir que tendre acceso a esa propiedad solo dentro de esa clase.
        public team : string;
        // public quiere decir que esta propiedad podra ser vista fuera de esta clase.
        realName?: string;
        static avgAge: number = 35;

        constructor (name: string, team: string, realName?: string){
            this.name = name;
            this.team = team;
            this.realName = realName;
        }

    }

        const antman: Avenger = new Avenger("antman", "Team Captain America");
        //console.log(antman)
        //console.log( antman. );
        //console.log(Avenger.avgAge)

})();