"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var heroes;
    (function (heroes) {
        heroes[heroes["Acuaman"] = 0] = "Acuaman";
        heroes[heroes["Batman"] = 1] = "Batman";
        heroes[heroes["Flash"] = 5] = "Flash";
        heroes[heroes["Superman"] = 100] = "Superman";
    })(heroes || (heroes = {}));
    var fuerzaFlash = heroes.Flash;
    ;
    var fuerzaSuperman = heroes.Superman;
    var fuerzaBatman = heroes.Batman;
    var fuerzaAcuaman = heroes.Acuaman;
    console.log(fuerzaFlash);
    console.log(fuerzaSuperman);
    console.log(fuerzaBatman);
    console.log(fuerzaAcuaman);
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
