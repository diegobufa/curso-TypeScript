(()=>{
    enum AudioLevel {
        min = 1,
        medium = 5,
        max = 10
    }

    const currentAudio = AudioLevel.medium;
    const minAudio = AudioLevel.min;
    const maxAudio = AudioLevel.max;

    console.log(currentAudio);
    console.log(minAudio);
    console.log(maxAudio);

    console.table(AudioLevel);


})();// Enum es otro tipo de dato que solo existe en Typescript.

/*
¿Por qué usar enums en TypeScript?

Los enums son una gran manera de organizar tu código en TypeScript. Veamos algunas ventajas:

Proporciona flexibilidad haciendo más fácil expresar y documentar intenciones y casos de uso
Ahorra tiempo de compilación y de ejecución con el código inline en JavaScript
Permite la creación de constantes personalizadas de memoria eficiente en JavaScript.
*/
