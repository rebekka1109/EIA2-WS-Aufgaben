var A09_2OldMacdonaldsFarm;
(function (A09_2OldMacdonaldsFarm) {
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.set(_x, _y);
        }
        Vector.prototype.set = function (_x, _y) {
            this.x = _x;
            this.y = _y;
        };
        Vector.prototype.random = function () {
            var xPosition = Math.random() * ((A09_2OldMacdonaldsFarm.crc2.canvas.width - 100) - 100 + 100);
            var yPosition = Math.random() * ((A09_2OldMacdonaldsFarm.crc2.canvas.height - 100) - A09_2OldMacdonaldsFarm.crc2.canvas.height - A09_2OldMacdonaldsFarm.golden + 100);
            this.set(xPosition, yPosition);
        };
        return Vector;
    }());
    A09_2OldMacdonaldsFarm.Vector = Vector;
})(A09_2OldMacdonaldsFarm || (A09_2OldMacdonaldsFarm = {}));
//# sourceMappingURL=Vektor.js.map