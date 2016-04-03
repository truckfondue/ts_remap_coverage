"use strict";
var TestTarget = (function () {
    function TestTarget(n) {
        this.questions = n * 2;
    }
    TestTarget.prototype.proctorTheTest = function () {
        console.log("today's test is " + this.questions + " questions long");
    };
    return TestTarget;
}());
exports.TestTarget = TestTarget;
//# sourceMappingURL=main.js.map