import assert from 'power-assert'
import {TestTarget} from '../src/main'

describe("TestTarget", () => {

    it("should return double the number: n", () => {
        let testTarget = new TestTarget(8);
        assert.equal(testTarget.questions, 16);
    })

    xit("should assert the proctorTheTest method", () => {
    })

    xit("should throw an alert given 0", () => {
    })

    xit("should throw an error given negative integers", () => {
    })

})
