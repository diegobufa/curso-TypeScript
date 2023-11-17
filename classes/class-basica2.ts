(()=>{
    class Avenger {
        //private name: string; 
        // private quiere decir que tendre acceso a esa propiedad solo dentro de esa clase.
        //public team : string;
        // public quiere decir que esta propiedad podra ser vista fuera de esta clase.
        //realName?: string;
        static avgAge: number = 35;
        static getAvgAge(){
            return this.name;
        }
        // con static puedo acceder igual aun sin hacer referncia de la clase

        constructor (
            private name: string,
            private team: string, 
            public realName?: string,
            ){
           
        }
        public bio(){
            return `${this.name} (${this.team})`
        }
        private bio2(){
            return `${this.name}`
        }
    }
    

        const antman: Avenger = new Avenger("antman", "Team Captain America","Scoot");
        //console.log(antman);
        //console.log(Avenger.getAvgAge())

        //console.log(antman.bio())
        //console.log(antman.bio2()); 
        // Me marca error ya que deberia actuar solamente en su clase, pero en js este lo ejecutara igual.

        // RECORDAR QUE AUNQUE PUSIMOS PRIVATE AUN AL SER TRANSPILADO A JS ESTE LO EJECUTARA IGUAL, POR ESO POR MAS QUE UNO PUSO PRIVATE SE VERA IGUAL.


        
        //console.log( antman. );
        //console.log(Avenger.avgAge)

})();