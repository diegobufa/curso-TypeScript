(()=>{
type powers= {
    nick: string;
    ironMan: string;
    vision: string;
    activo: boolean;
    poder: number

}
    const avengers: powers = {

        nick: "Samuel L. Jackson",
        ironMan: "Robert Downey Jr.",
        vision: "Paul Bettany",
        activo: true,
        poder: 1500
    }

    const { poder, vision } = avengers;

    //console.log(poder, vision.toUpperCase());

    const {  ironMan } = avengers;

    //console.log(`El poder de vision es de: ${poder} y su actor es: ${vision}, el poder de ironMan es de: ${poder} y su actor es: ${ironMan}`);

    // puedo hacer una desesctructuracion dentro de mi argumento

    //const printAvenger = ({ironMan, ...otros}: powers) => {
     //   console.log(ironMan, otros)
    //}
    // con ...resto me tomo del primer argumento es el definido y lo que resta de argumentos lo puedo mandar a imprimir


    //printAvenger(avengers);
})();