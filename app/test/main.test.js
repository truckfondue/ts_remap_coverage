"use strict";
var power_assert_1 = require('power-assert');
var main_1 = require('../src/main');
describe("TestTarget", function () {
    it("should return double the number: n", function () {
        var testTarget = new main_1.TestTarget(8);
        power_assert_1.default.equal(testTarget.questions, 16);
    });
    xit("should assert the proctorTheTest method", function () {
    });
    xit("should throw an alert given 0", function () {
    });
    xit("should throw an error given negative integers", function () {
    });
});
//# sourceMappingURL=main.test.js.map