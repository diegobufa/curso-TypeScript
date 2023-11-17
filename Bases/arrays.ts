(function(){

    //const numbers: (string | number | boolean)[] = [1,2,3,4,5,'6',7,8,9,10];
    const numbers = [1,2,3,4,5,'6',7,8,9,10];
    //numbers.push(true); no me permite porque solo esta aceptando string o number

    numbers.push(11);

    console.log(numbers);

    const villanos = ['Omega Rojo', 'Dormamu', 'Duende Verde'];

    villanos.forEach((villano: string)=> {
        console.log(villano.toLocaleUpperCase());
    })



})();