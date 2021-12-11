var A09_2OldMacdonaldsFarm;
(function (A09_2OldMacdonaldsFarm) {
    window.addEventListener("load", handelLoad);
    A09_2OldMacdonaldsFarm.golden = 0.55;
    var animals = [];
    function handelLoad() {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        A09_2OldMacdonaldsFarm.crc2 = canvas.getContext("2d");
        drawBG();
        drawSun({ x: A09_2OldMacdonaldsFarm.crc2.canvas.width / 2, y: A09_2OldMacdonaldsFarm.crc2.canvas.height / 2 });
        drawFence();
        drawAnimal();
        simulateDay();
    }
    function drawBG() {
        A09_2OldMacdonaldsFarm.crc2.save();
        var gradient = A09_2OldMacdonaldsFarm.crc2.createLinearGradient(0, 0, 0, A09_2OldMacdonaldsFarm.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.45, "white");
        gradient.addColorStop(A09_2OldMacdonaldsFarm.golden, "rgb(200, 200, 25");
        gradient.addColorStop(1, "green");
        A09_2OldMacdonaldsFarm.crc2.fillStyle = gradient;
        A09_2OldMacdonaldsFarm.crc2.fillRect(0, 0, A09_2OldMacdonaldsFarm.crc2.canvas.width, A09_2OldMacdonaldsFarm.crc2.canvas.height);
        A09_2OldMacdonaldsFarm.crc2.restore();
    }
    function drawSun(_position) {
        var r1 = 100;
        var r2 = 300;
        var gradient = A09_2OldMacdonaldsFarm.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(55, 100%, 70%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 30%, 0)");
        A09_2OldMacdonaldsFarm.crc2.save();
        A09_2OldMacdonaldsFarm.crc2.translate(_position.x, _position.y);
        A09_2OldMacdonaldsFarm.crc2.fillStyle = gradient;
        A09_2OldMacdonaldsFarm.crc2.arc(0, 0, r2, 0, Math.PI, true);
        A09_2OldMacdonaldsFarm.crc2.fill();
        A09_2OldMacdonaldsFarm.crc2.restore();
    }
    function drawFence() {
        A09_2OldMacdonaldsFarm.crc2.save();
        A09_2OldMacdonaldsFarm.crc2.translate(0, A09_2OldMacdonaldsFarm.crc2.canvas.height / 2);
        A09_2OldMacdonaldsFarm.crc2.fillStyle = "rgb(90, 50, 30)";
        A09_2OldMacdonaldsFarm.crc2.fillRect(0, 0, A09_2OldMacdonaldsFarm.crc2.canvas.width, 5);
        for (var n = 0; n < 2; n++) {
            A09_2OldMacdonaldsFarm.crc2.translate(0, -20);
            A09_2OldMacdonaldsFarm.crc2.fillStyle = "rgb(90, 50, 30)";
            A09_2OldMacdonaldsFarm.crc2.fillRect(0, 0, A09_2OldMacdonaldsFarm.crc2.canvas.width, 5);
        }
        A09_2OldMacdonaldsFarm.crc2.translate(5, -10);
        for (var n = 0; n < 50; n++) {
            A09_2OldMacdonaldsFarm.crc2.fillStyle = "rgb(90, 50, 30)";
            A09_2OldMacdonaldsFarm.crc2.fillRect(0, 0, 5, 70);
            A09_2OldMacdonaldsFarm.crc2.translate(50, 0);
        }
        A09_2OldMacdonaldsFarm.crc2.restore();
    }
    function drawAnimal() {
        for (var index = 0; index < 2; index++) {
            var animal = new A09_2OldMacdonaldsFarm.Animal();
            animals.push(animal);
            console.log(animals);
        }
    }
    function simulateDay() {
        var lyrics = document.getElementById("Text");
        setTimeout(function () {
            lyrics.innerHTML = "Old MACDONALD had a farm <br> E-I-E-I-O";
        }, 3000);
        setTimeout(function () {
            lyrics.innerHTML = "And on his farm he had a cow <br> E-I-E-I-O";
        }, 5000);
        setTimeout(function () {
            lyrics.innerHTML = "With a moo moo here";
        }, 8000);
        setTimeout(function () {
            lyrics.innerHTML = "And a moo moo there";
        }, 11000);
        setTimeout(function () {
            lyrics.innerHTML = "Here a moo, there a moo";
        }, 14000);
        setTimeout(function () {
            lyrics.innerHTML = "Everywhere a moo moo";
        }, 17000);
        setTimeout(function () {
            lyrics.innerHTML = "Old MacDonald had a farm <br> E-I-E-I-O";
        }, 21000);
    }
})(A09_2OldMacdonaldsFarm || (A09_2OldMacdonaldsFarm = {}));
//# sourceMappingURL=Script9.2.js.map