"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let heroes;
    (function (heroes) {
        heroes[heroes["Acuaman"] = 0] = "Acuaman";
        heroes[heroes["Batman"] = 1] = "Batman";
        heroes[heroes["Flash"] = 5] = "Flash";
        heroes[heroes["Superman"] = 100] = "Superman";
    })(heroes || (heroes = {}));
    const fuerzaFlash = heroes.Flash;
    ;
    const fuerzaSuperman = heroes.Superman;
    const fuerzaBatman = heroes.Batman;
    const fuerzaAcuaman = heroes.Acuaman;
    console.log(fuerzaFlash);
    console.log(fuerzaSuperman);
    console.log(fuerzaBatman);
    console.log(fuerzaAcuaman);
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
