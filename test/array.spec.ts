
import "mocha";
import * as assert from "assert";

import * as Concrete from "../dist/";


describe("ConcreteArray", function () {

    const arr = [1, 2, 3, 4, 5];
    const carr = Concrete.from(arr);

    it("should output console.log()", function () {

        console.log(carr);
        console.log(Object.keys(carr));
        carr.forEach(v => console.log("forEach", v));
    });

    it("should equal regular Array", function () {
        assert.deepEqual(carr, arr, "ConcreteArray not equal");
    });

    it("should allow supported methods", function () {

        assert.equal(carr.length, 5, "length !== 5");
        assert.equal(carr.sum(), 15, "sum() !== 15");
    });

    it("should throw ReadonlyErrors", function () {

        // assert.throws(() => carr[0] = 2);
        assert.throws(() => carr.copyWithin(0, 0));
        assert.throws(() => carr.fill(0));
        assert.throws(() => carr.pop());
        assert.throws(() => carr.push());
        assert.throws(() => carr.reverse());
        assert.throws(() => carr.shift());
        assert.throws(() => carr.sort());
        assert.throws(() => carr.splice(0));
        assert.throws(() => carr.unshift());
    });

});
