
(()=>{

    const hero: string = "flash";

    function returName():string{
       
        return hero;

    }

    const activateBatisignal = (): string => {
        return 'Batisenial activada!'
    }

    console.log(typeof(activateBatisignal));
    console.log(typeof(returName));

    const heroName:string = returName();


})();
