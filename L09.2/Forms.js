var A09_2OldMacdonaldsFarm;
(function (A09_2OldMacdonaldsFarm) {
    A09_2OldMacdonaldsFarm.shapesAnimal = [drawCow, drawPig];
    function drawCow() {
        A09_2OldMacdonaldsFarm.crc2.save();
        A09_2OldMacdonaldsFarm.crc2.translate(750, 700);
        A09_2OldMacdonaldsFarm.crc2.beginPath();
        A09_2OldMacdonaldsFarm.crc2.fillStyle = "white";
        A09_2OldMacdonaldsFarm.crc2.ellipse(0, 0, 50, 75, Math.PI / 2, 0, 2 * Math.PI);
        A09_2OldMacdonaldsFarm.crc2.fill();
        A09_2OldMacdonaldsFarm.crc2.arc(-70, -50, 40, 0, Math.PI * 2);
        A09_2OldMacdonaldsFarm.crc2.fill();
        A09_2OldMacdonaldsFarm.crc2.arc(-100, -40, 20, 0, Math.PI * 2);
        A09_2OldMacdonaldsFarm.crc2.fill();
        A09_2OldMacdonaldsFarm.crc2.fillRect(30, 30, 20, 50);
        A09_2OldMacdonaldsFarm.crc2.fillRect(-50, 30, 20, 50);
        A09_2OldMacdonaldsFarm.crc2.arc(0, 0, 20, 0, Math.PI * 2);
        A09_2OldMacdonaldsFarm.crc2.fill();
        A09_2OldMacdonaldsFarm.crc2.restore();
    }
    A09_2OldMacdonaldsFarm.drawCow = drawCow;
    function drawPig() {
        A09_2OldMacdonaldsFarm.crc2.save();
        A09_2OldMacdonaldsFarm.crc2.translate(750, 500);
        A09_2OldMacdonaldsFarm.crc2.beginPath();
        A09_2OldMacdonaldsFarm.crc2.fillStyle = "pink";
        A09_2OldMacdonaldsFarm.crc2.ellipse(0, 0, 40, 60, Math.PI / 2, 0, 2 * Math.PI);
        A09_2OldMacdonaldsFarm.crc2.fill();
        A09_2OldMacdonaldsFarm.crc2.arc(-50, -25, 35, 0, Math.PI * 2);
        A09_2OldMacdonaldsFarm.crc2.fill();
        A09_2OldMacdonaldsFarm.crc2.arc(-80, -20, 20, 0, Math.PI * 2);
        A09_2OldMacdonaldsFarm.crc2.fill();
        A09_2OldMacdonaldsFarm.crc2.fillRect(30, 20, 20, 30);
        A09_2OldMacdonaldsFarm.crc2.fillRect(-50, 20, 20, 30);
        A09_2OldMacdonaldsFarm.crc2.restore();
    }
})(A09_2OldMacdonaldsFarm || (A09_2OldMacdonaldsFarm = {}));
//# sourceMappingURL=Forms.js.map