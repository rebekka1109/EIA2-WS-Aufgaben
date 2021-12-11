var A09_2OldMacdonaldsFarm;
(function (A09_2OldMacdonaldsFarm) {
    var Animal = /** @class */ (function () {
        function Animal() {
            this.position = new A09_2OldMacdonaldsFarm.Vector(0, 0);
            // this.position.random;
            this.type = Math.floor(Math.random() * 2);
        }
        Animal.prototype.draw = function () {
            A09_2OldMacdonaldsFarm.crc2.save();
            A09_2OldMacdonaldsFarm.crc2.translate(750, 700);
            A09_2OldMacdonaldsFarm.shapesAnimal[0]();
            A09_2OldMacdonaldsFarm.crc2.restore();
        };
        return Animal;
    }());
    A09_2OldMacdonaldsFarm.Animal = Animal;
})(A09_2OldMacdonaldsFarm || (A09_2OldMacdonaldsFarm = {}));
//# sourceMappingURL=Animals.js.map