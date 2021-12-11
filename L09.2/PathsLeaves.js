var A09_2GoldenerHerbst;
(function (A09_2GoldenerHerbst) {
    A09_2GoldenerHerbst.shapesLeaves = [
        [
            [-20, 0, -30, 20, -20, 50], [20, 20, 10, 10, 0, 0]
        ],
        [
            [-30, 10, -40, 40, -10, 30], [-10, 60, 0, 60, 10, 30], [50, 70, 30, 0, 0, 0]
        ],
        [
            [0, 0, -40, 20, -40, 20], [-20, 20, -20, 20, -40, 50], [-40, 50, 0, 20, 0, 80], [0, 20, 60, 60, 40, 50], [20, 20, 20, 20, 40, 20]
        ]
    ];
    function createPaths() {
        A09_2GoldenerHerbst.leavesPaths = chooseLeavesPaths(A09_2GoldenerHerbst.shapesLeaves);
    }
    A09_2GoldenerHerbst.createPaths = createPaths;
    function chooseLeavesPaths(_curves) {
        console.log(A09_2GoldenerHerbst.shapesLeaves);
        var paths = [];
        for (var _i = 0, _curves_1 = _curves; _i < _curves_1.length; _i++) {
            var type = _curves_1[_i];
            var path = new Path2D();
            for (var _a = 0, type_1 = type; _a < type_1.length; _a++) {
                var coordinates = type_1[_a];
                path.bezierCurveTo(coordinates[0], coordinates[1], coordinates[2], coordinates[3], coordinates[4], coordinates[5]);
            }
            path.closePath();
            paths.push(path);
        }
        return paths;
    }
})(A09_2GoldenerHerbst || (A09_2GoldenerHerbst = {}));
//# sourceMappingURL=PathsLeaves.js.map