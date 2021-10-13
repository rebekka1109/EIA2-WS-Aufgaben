namespace HowIMetYourMotherPoem {
    let noun: string [] = ["Ted ", "Marshall ", "Lily ", "Robin ", "Barney "];
    let verb: string [] = ["kauft", "denkt an", "lacht über", "sucht", "liebt", "hasst"];
    let object: string [] = [" rote Cowboystiefel", " ein Sandwitch", " Robin", " Kanada", " das McLaren's"];
    
    for (let i: number = 5 ; i >= 1; i--) {
        let finalsentence: string = getVerse(noun, verb, object);
        console.log(finalsentence);
    }
    function getVerse (_noun: string[], _verb: string[], _object: string[]): string {
    
        let randomNumbernoun: number = Math.floor(Math.random() * _noun.length);
        let randomNumberverb: number = Math.floor(Math.random() * _noun.length);
        let randomNumberobject: number = Math.floor(Math.random() * _noun.length);
        let satzbau: string = _noun[randomNumbernoun] + _verb[randomNumberverb] + _object[randomNumberobject];
        _noun.splice(randomNumbernoun, 1);
        _verb.splice(randomNumberverb, 1);
        _object.splice(randomNumberobject, 1);
        return satzbau;
    }}