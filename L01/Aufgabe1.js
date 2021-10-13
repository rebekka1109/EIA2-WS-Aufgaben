var GameOfThronesPoem;
(function (GameOfThronesPoem) {
    var noun = ["Daenerys Targaryen ", "Jon Snow ", "Arya Stark ", "Sansa Stark ", "Eddard Stark ", "Joffrey Baratheon "];
    var verb = ["kauft", "benutzt", "vergisst", "sucht", "liebt", "hasst"];
    var object = [" Schwerter", " Tröne", " Riesen", " Kronen", " Kriege", " Drachen"];
    for (var i = 6; i >= 1; i--) {
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
})(GameOfThronesPoem || (GameOfThronesPoem = {}));
