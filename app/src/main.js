"use strict";
var TestTarget = (function () {
    function TestTarget(n, t) {
        this.questions = n * 2;
        this.time = t;
    }
    TestTarget.prototype.proctorTheTest = function () {
        console.log("today's test is " + this.questions + " questions long with " + this.time + " minutes");
    };
    return TestTarget;
}());
exports.TestTarget = TestTarget;
//# sourceMappingURL=main.js.map