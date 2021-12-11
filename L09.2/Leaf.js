var A09_2GoldenerHerbst;
(function (A09_2GoldenerHerbst) {
    var Leaf = /** @class */ (function () {
        function Leaf() {
            this.position = new A09_2GoldenerHerbst.Vector(0, 0);
            this.position.randomY(0, A09_2GoldenerHerbst.crc2.canvas.height);
            this.velocity = new A09_2GoldenerHerbst.Vector(0, 0);
            this.velocity.randomXY(100, 200);
            this.type = Math.floor(Math.random() * 3);
            this.size = Math.random() + 0.5;
            var color = ["rgb(163, 104, 0)", "rgba(140, 59, 0)", "rgb(205, 212, 0)"];
            var randomColor = Math.floor(Math.random() * (3 - 0));
            this.color = color[randomColor];
            this.rotation = Math.random() * 360;
            this.rotationChange = Math.random() * (10 - -10) + -10;
        }
        Leaf.prototype.draw = function () {
            A09_2GoldenerHerbst.crc2.save();
            A09_2GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
            A09_2GoldenerHerbst.crc2.scale(this.size, this.size);
            A09_2GoldenerHerbst.crc2.moveTo(0, 0);
            A09_2GoldenerHerbst.crc2.rotate(this.rotation);
            A09_2GoldenerHerbst.crc2.beginPath();
            A09_2GoldenerHerbst.crc2.fillStyle = this.color;
            A09_2GoldenerHerbst.crc2.fill(A09_2GoldenerHerbst.leavesPaths[this.type]);
            A09_2GoldenerHerbst.crc2.closePath();
            A09_2GoldenerHerbst.crc2.restore();
        };
        Leaf.prototype.move = function (_timeslice) {
            var offset = new A09_2GoldenerHerbst.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            this.rotation += this.rotationChange * _timeslice;
            if (this.position.x > (A09_2GoldenerHerbst.crc2.canvas.width + 50)) {
                A09_2GoldenerHerbst.leaves.splice(A09_2GoldenerHerbst.leaves.indexOf(this), 1);
                A09_2GoldenerHerbst.drawLeaves();
            }
            if (this.position.y > (A09_2GoldenerHerbst.crc2.canvas.height + 50)) {
                A09_2GoldenerHerbst.leaves.splice(A09_2GoldenerHerbst.leaves.indexOf(this), 1);
                A09_2GoldenerHerbst.drawLeaves();
            }
        };
        return Leaf;
    }());
    A09_2GoldenerHerbst.Leaf = Leaf;
})(A09_2GoldenerHerbst || (A09_2GoldenerHerbst = {}));
//# sourceMappingURL=Leaf.js.map