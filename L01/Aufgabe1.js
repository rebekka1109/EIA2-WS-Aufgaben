var HowIMetYourMotherPoem;
(function (HowIMetYourMotherPoem) {
    var noun = ["Ted ", "Marshall ", "Lily ", "Robin ", "Barney "];
    var verb = ["kauft", "denkt an", "lacht über", "sucht", "liebt", "hasst"];
    var object = [" rote Cowboystiefel", " ein Sandwitch", " Robin", " Kanada", " das McLaren's"];
    for (var i = 5; i >= 1; i--) {
        var finalsentence = getVerse(noun, verb, object);
        console.log(finalsentence);
    }
    function getVerse(_noun, _verb, _object) {
        var randomNumbernoun = Math.floor(Math.random() * _noun.length);
        var randomNumberverb = Math.floor(Math.random() * _noun.length);
        var randomNumberobject = Math.floor(Math.random() * _noun.length);
        var satzbau = _noun[randomNumbernoun] + _verb[randomNumberverb] + _object[randomNumberobject];
        _noun.splice(randomNumbernoun, 1);
        _verb.splice(randomNumberverb, 1);
        _object.splice(randomNumberobject, 1);
        return satzbau;
    }
})(HowIMetYourMotherPoem || (HowIMetYourMotherPoem = {}));
//# sourceMappingURL=Aufgabe1.js.map