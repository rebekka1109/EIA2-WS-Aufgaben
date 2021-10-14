// Arrays mit Zeichenketten//
var HowIMetYourMotherPoem;
(function (HowIMetYourMotherPoem) {
    var noun = ["Ted ", "Marshall ", "Lily ", "Robin ", "Barney "];
    var verb = ["kauft", "denkt an", "lacht über", "sucht", "liebt", "hasst"];
    var object = [" rote Cowboystiefel", " ein Sandwitch", " Robin", " Kanada", " das McLaren's"];
    //for-Schleife lässt eine Laufvariable rückwärts zählen//
    //Beim letzten Durchlauf soll die Variable 1 sein//
    for (var i = 5; i >= 1; i--) {
        var finalsentence = getVerse(noun, verb, object);
        console.log(finalsentence);
    }
    //Funktion, die festlegt, dass sie drei Werte vom Typ string[] entgegen nimmt und einen Wert vom Typ string zurückliefert//
    function getVerse(_noun, _verb, _object) {
        //Mit Math.random() wird eine Zufallszahl erzeugt und mit der Länge des übergebenen Subject-Arrays multipliziert//
        var randomNumbernoun = Math.floor(Math.random() * _noun.length);
        var randomNumberverb = Math.floor(Math.random() * _noun.length);
        var randomNumberobject = Math.floor(Math.random() * _noun.length);
        var satzbau = _noun[randomNumbernoun] + _verb[randomNumberverb] + _object[randomNumberobject];
        //Mit splice(...) wird ein Wort aus dem übergebenen Array von Subjekten an der Stelle der Zufallszahl herausgeschnitten und zur einer Vers-Variablen addiert//
        _noun.splice(randomNumbernoun, 1);
        _verb.splice(randomNumberverb, 1);
        _object.splice(randomNumberobject, 1);
        return satzbau;
    }
})(HowIMetYourMotherPoem || (HowIMetYourMotherPoem = {}));
//# sourceMappingURL=Aufgabe1.js.map