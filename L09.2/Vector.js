var A09_2GoldenerHerbst;
(function (A09_2GoldenerHerbst) {
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.set(_x, _y);
        }
        Vector.prototype.set = function (_x, _y) {
            this.x = _x;
            this.y = _y;
        };
        Vector.prototype.scale = function (_factor) {
            this.x *= _factor;
            this.y *= _factor;
        };
        Vector.prototype.add = function (_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        };
        Vector.prototype.randomXY = function (_min, _max) {
            var lenght = Math.random() * (_max - _min) + _min;
            var direction = Math.random();
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(lenght);
        };
        Vector.prototype.randomY = function (_min, _max) {
            var height = Math.random() * (_max - _min) + _min;
            this.set(0, height);
        };
        Vector.prototype.randomX = function (_min, _max) {
            var lenght = Math.random() * (_max - _min) + _min;
            this.set(Math.cos(0), Math.sin(0));
            this.scale(lenght);
        };
        return Vector;
    }());
    A09_2GoldenerHerbst.Vector = Vector;
})(A09_2GoldenerHerbst || (A09_2GoldenerHerbst = {}));
//# sourceMappingURL=Vector.js.map