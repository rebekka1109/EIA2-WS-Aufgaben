// Arrays mit Zeichenketten//
namespace HowIMetYourMotherPoem {
    let noun: string [] = ["Ted ", "Marshall ", "Lily ", "Robin ", "Barney "];
    let verb: string [] = ["kauft", "denkt an", "lacht über", "sucht", "liebt", "hasst"];
    let object: string [] = [" rote Cowboystiefel", " ein Sandwitch", " Robin", " Kanada", " das McLaren's"];

    //for-Schleife lässt eine Laufvariable rückwärts zählen//
    //Beim letzten Durchlauf soll die Variable 1 sein//
    
    for (let i: number = 5 ; i >= 1; i--) {
        let finalsentence: string = getVerse(noun, verb, object);
        console.log(finalsentence);
    }

    //Funktion, die festlegt, dass sie drei Werte vom Typ string[] entgegen nimmt und einen Wert vom Typ string zurückliefert//
    function getVerse (_noun: string[], _verb: string[], _object: string[]): string {

        //Mit Math.random() wird eine Zufallszahl erzeugt und mit der Länge des übergebenen Subject-Arrays multipliziert//
    
        let randomNumbernoun: number = Math.floor(Math.random() * _noun.length);
        let randomNumberverb: number = Math.floor(Math.random() * _noun.length);
        let randomNumberobject: number = Math.floor(Math.random() * _noun.length);
        let satzbau: string = _noun[randomNumbernoun] + _verb[randomNumberverb] + _object[randomNumberobject];

        //Mit splice(...) wird ein Wort aus dem übergebenen Array von Subjekten an der Stelle der Zufallszahl herausgeschnitten und zur einer Vers-Variablen addiert//

        _noun.splice(randomNumbernoun, 1);
        _verb.splice(randomNumberverb, 1);
        _object.splice(randomNumberobject, 1);
        return satzbau;
    }}