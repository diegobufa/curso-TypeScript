(function (){

    let avenger: any = 123;
    const exist;
    let power;

    // En TSC una constante tiene que estar inicializada.
    avenger = 'Dr. Strange';
    //console.log(avenger.charAt(0));
    console.log( (avenger as string).charAt(0) );

    avenger = 150.5555;
    console.log(<number>avenger.toFixed(2));

    console.log(exist);
    console.log(power);






})();