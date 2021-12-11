var A09_2GoldenerHerbst;
(function (A09_2GoldenerHerbst) {
    var Cloud = /** @class */ (function () {
        function Cloud() {
            this.position = new A09_2GoldenerHerbst.Vector(0, 100);
            this.velocity = new A09_2GoldenerHerbst.Vector(0, 0);
            this.velocity.randomX(100, 200);
        }
        Cloud.prototype.move = function (_timeslice) {
            var offset = new A09_2GoldenerHerbst.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x > A09_2GoldenerHerbst.crc2.canvas.width)
                this.position.x -= A09_2GoldenerHerbst.crc2.canvas.width;
        };
        Cloud.prototype.draw = function (_size) {
            var nParticles = _size;
            var radiusParticle = 30;
            var particle = new Path2D();
            var gradient = A09_2GoldenerHerbst.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            A09_2GoldenerHerbst.crc2.save();
            A09_2GoldenerHerbst.crc2.fillStyle = gradient;
            A09_2GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
            for (var drawn = 0; drawn < nParticles; drawn++) {
                A09_2GoldenerHerbst.crc2.save();
                var x = (Math.random() - 0.5) * 150;
                var y = -(Math.random() * 50);
                A09_2GoldenerHerbst.crc2.translate(x, y);
                A09_2GoldenerHerbst.crc2.fill(particle);
                A09_2GoldenerHerbst.crc2.restore();
            }
            A09_2GoldenerHerbst.crc2.restore();
        };
        return Cloud;
    }());
    A09_2GoldenerHerbst.Cloud = Cloud;
})(A09_2GoldenerHerbst || (A09_2GoldenerHerbst = {}));
//# sourceMappingURL=Clouds.js.map