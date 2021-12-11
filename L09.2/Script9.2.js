var A09_2GoldenerHerbst;
(function (A09_2GoldenerHerbst) {
    window.addEventListener("load", handleLoad);
    var canvas = document.querySelector("canvas");
    var golden = 0.66;
    var clouds = [];
    A09_2GoldenerHerbst.leaves = [];
    A09_2GoldenerHerbst.crc2 = canvas.getContext("2d");
    var imgData;
    function handleLoad(_event) {
        var gras = A09_2GoldenerHerbst.crc2.canvas.height * golden;
        drawBG();
        drawSun({ x: 100, y: 100 });
        drawCloud();
        drawMountains({ x: 0, y: gras }, 75, 200, "grey", "white");
        drawMountains({ x: 0, y: gras }, 50, 150, "rgba(70, 70, 70)", "rgba(200, 200, 200)");
        drawTrees({ x: 0, y: gras }, { x: 20, y: 100 });
        drawSquirrel({ x: A09_2GoldenerHerbst.crc2.canvas.width / 2, y: gras });
        A09_2GoldenerHerbst.createPaths();
        drawLeaves();
        window.setInterval(update, 50);
    }
    function drawBG() {
        var gradient = A09_2GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, A09_2GoldenerHerbst.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "rgb(174, 217, 117)");
        gradient.addColorStop(1, "rgb(148, 128, 0)");
        A09_2GoldenerHerbst.crc2.fillStyle = gradient;
        A09_2GoldenerHerbst.crc2.fillRect(0, 0, A09_2GoldenerHerbst.crc2.canvas.width, A09_2GoldenerHerbst.crc2.canvas.height);
    }
    function drawSun(_position) {
        var r1 = 20;
        var r2 = 100;
        var gradient = A09_2GoldenerHerbst.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 70%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 30%, 0)");
        A09_2GoldenerHerbst.crc2.save();
        A09_2GoldenerHerbst.crc2.translate(_position.x, _position.y);
        A09_2GoldenerHerbst.crc2.fillStyle = gradient;
        A09_2GoldenerHerbst.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        A09_2GoldenerHerbst.crc2.fill();
        A09_2GoldenerHerbst.crc2.restore();
    }
    function drawCloud() {
        var cloud = new A09_2GoldenerHerbst.Cloud;
        clouds.push(cloud);
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        var stepMin = 10;
        var stepMax = 50;
        var x = 0;
        A09_2GoldenerHerbst.crc2.save();
        A09_2GoldenerHerbst.crc2.translate(_position.x, _position.y);
        A09_2GoldenerHerbst.crc2.beginPath();
        A09_2GoldenerHerbst.crc2.moveTo(0, 0);
        A09_2GoldenerHerbst.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            var y = -_min - Math.random() * (_max - _min);
            A09_2GoldenerHerbst.crc2.lineTo(x, y);
        } while (x < A09_2GoldenerHerbst.crc2.canvas.width);
        A09_2GoldenerHerbst.crc2.lineTo(x, 0);
        A09_2GoldenerHerbst.crc2.closePath();
        var gradient = A09_2GoldenerHerbst.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(1, _colorHigh);
        A09_2GoldenerHerbst.crc2.fillStyle = gradient;
        A09_2GoldenerHerbst.crc2.fill();
        A09_2GoldenerHerbst.crc2.restore();
    }
    function drawTrees(_position, _size) {
        A09_2GoldenerHerbst.crc2.save();
        A09_2GoldenerHerbst.crc2.translate(_position.x, _position.y);
        for (var i = 0; i < 5; i++) {
            var nParticles = Math.floor(Math.random() * (25 - 20 + 1)) + 20;
            var radiusParticles = Math.floor(Math.random() * (40 - 30 + 1)) + 30;
            var particle = new Path2D();
            var color = ["rgba(217, 162, 11, 0.7)", "rgba(237, 226, 14, 0.7)", "rgba(219, 237, 55, 0.7)", "rgba(176, 165, 16, 0.7)"];
            var gradient = A09_2GoldenerHerbst.crc2.createLinearGradient(0, 0, -30, 0);
            gradient.addColorStop(0, "rgb(153, 102, 0)");
            gradient.addColorStop(1, "rgb(102, 0, 0)");
            A09_2GoldenerHerbst.crc2.save();
            var plantTreex = Math.random() * (A09_2GoldenerHerbst.crc2.canvas.width - 0 + 1) - 0;
            var plantTreey = Math.random() * ((A09_2GoldenerHerbst.crc2.canvas.height - _position.y) - 0 + 1) - 0;
            A09_2GoldenerHerbst.crc2.translate(plantTreex, plantTreey);
            A09_2GoldenerHerbst.crc2.fillStyle = gradient;
            A09_2GoldenerHerbst.crc2.fillRect(0, 0, -_size.x, -_size.y);
            A09_2GoldenerHerbst.crc2.translate(-(_size.x / 2), -_size.y);
            particle.arc(0, 0, radiusParticles, 0, 2 * Math.PI);
            for (var drawn = 0; drawn < nParticles; drawn++) {
                A09_2GoldenerHerbst.crc2.save();
                var random = Math.floor(Math.random() * (3 - 0 + 1) - 0);
                A09_2GoldenerHerbst.crc2.fillStyle = color[random];
                var x = (Math.random() - 0.5) * 70;
                var y = -(Math.random() * 100);
                A09_2GoldenerHerbst.crc2.translate(x, y);
                A09_2GoldenerHerbst.crc2.fill(particle);
                A09_2GoldenerHerbst.crc2.restore();
            }
            A09_2GoldenerHerbst.crc2.restore();
        }
        A09_2GoldenerHerbst.crc2.restore();
    }
    function drawLeaves() {
        do {
            var leaf = new A09_2GoldenerHerbst.Leaf;
            A09_2GoldenerHerbst.leaves.push(leaf);
        } while (A09_2GoldenerHerbst.leaves.length < 7);
    }
    A09_2GoldenerHerbst.drawLeaves = drawLeaves;
    function update() {
        A09_2GoldenerHerbst.crc2.putImageData(imgData, 0, 0);
        for (var _i = 0, clouds_1 = clouds; _i < clouds_1.length; _i++) {
            var cloud = clouds_1[_i];
            cloud.move(1 / 100);
            cloud.draw(70);
        }
        for (var _a = 0, leaves_1 = A09_2GoldenerHerbst.leaves; _a < leaves_1.length; _a++) {
            var leaf = leaves_1[_a];
            leaf.move(1 / 30);
            leaf.draw();
        }
    }
    function drawSquirrel(_position) {
        A09_2GoldenerHerbst.crc2.save();
        A09_2GoldenerHerbst.crc2.translate(_position.x, _position.y);
        A09_2GoldenerHerbst.crc2.scale(0.5, 0.5);
        A09_2GoldenerHerbst.crc2.beginPath();
        A09_2GoldenerHerbst.crc2.ellipse(0, 0, 50, 75, Math.PI * 0.9, 0, 2 * Math.PI);
        A09_2GoldenerHerbst.crc2.closePath();
        A09_2GoldenerHerbst.crc2.fillStyle = "rgb(122, 63, 0)";
        A09_2GoldenerHerbst.crc2.fill();
        A09_2GoldenerHerbst.crc2.translate(-40, -75);
        A09_2GoldenerHerbst.crc2.beginPath();
        A09_2GoldenerHerbst.crc2.arc(0, 0, 40, 0, 2 * Math.PI);
        A09_2GoldenerHerbst.crc2.closePath();
        A09_2GoldenerHerbst.crc2.fillStyle = "rgb(122, 63, 0)";
        A09_2GoldenerHerbst.crc2.fill();
        A09_2GoldenerHerbst.crc2.translate(-10, -10);
        A09_2GoldenerHerbst.crc2.beginPath();
        A09_2GoldenerHerbst.crc2.arc(0, 0, 10, 0, 2 * Math.PI);
        A09_2GoldenerHerbst.crc2.closePath();
        A09_2GoldenerHerbst.crc2.fillStyle = "white";
        A09_2GoldenerHerbst.crc2.fill();
        A09_2GoldenerHerbst.crc2.beginPath();
        A09_2GoldenerHerbst.crc2.arc(0, 0, 5, 0, 2 * Math.PI);
        A09_2GoldenerHerbst.crc2.closePath();
        A09_2GoldenerHerbst.crc2.fillStyle = "black";
        A09_2GoldenerHerbst.crc2.fill();
        A09_2GoldenerHerbst.crc2.translate(-10, -10);
        A09_2GoldenerHerbst.crc2.beginPath();
        A09_2GoldenerHerbst.crc2.moveTo(0, 0);
        A09_2GoldenerHerbst.crc2.lineTo(20, -40);
        A09_2GoldenerHerbst.crc2.lineTo(40, 0);
        A09_2GoldenerHerbst.crc2.closePath();
        A09_2GoldenerHerbst.crc2.fillStyle = "rgb(122, 63, 0)";
        A09_2GoldenerHerbst.crc2.fill();
        A09_2GoldenerHerbst.crc2.translate(10, 80);
        A09_2GoldenerHerbst.crc2.beginPath();
        A09_2GoldenerHerbst.crc2.ellipse(0, 0, 15, 30, Math.PI * 1.5, 0, 2 * Math.PI);
        A09_2GoldenerHerbst.crc2.closePath();
        A09_2GoldenerHerbst.crc2.fillStyle = "rgb(51, 27, 1)";
        A09_2GoldenerHerbst.crc2.fill();
        A09_2GoldenerHerbst.crc2.translate(40, 70);
        A09_2GoldenerHerbst.crc2.beginPath();
        A09_2GoldenerHerbst.crc2.ellipse(0, 0, 20, 50, Math.PI * 1.5, 0, 2 * Math.PI);
        A09_2GoldenerHerbst.crc2.closePath();
        A09_2GoldenerHerbst.crc2.fillStyle = "rgb(51, 27, 1)";
        A09_2GoldenerHerbst.crc2.fill();
        A09_2GoldenerHerbst.crc2.translate(50, 0);
        A09_2GoldenerHerbst.crc2.beginPath();
        A09_2GoldenerHerbst.crc2.moveTo(0, 0);
        A09_2GoldenerHerbst.crc2.bezierCurveTo(50, 0, 100, -120, 150, -150);
        A09_2GoldenerHerbst.crc2.bezierCurveTo(-20, -220, 50, -80, 0, -20);
        A09_2GoldenerHerbst.crc2.closePath();
        A09_2GoldenerHerbst.crc2.fillStyle = "rgb(122, 63, 0)";
        A09_2GoldenerHerbst.crc2.fill();
        A09_2GoldenerHerbst.crc2.restore();
        imgData = A09_2GoldenerHerbst.crc2.getImageData(0, 0, A09_2GoldenerHerbst.crc2.canvas.width, A09_2GoldenerHerbst.crc2.canvas.height);
    }
})(A09_2GoldenerHerbst || (A09_2GoldenerHerbst = {}));
//# sourceMappingURL=Script9.2.js.map