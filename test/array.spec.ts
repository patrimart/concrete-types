
import "mocha";
import * as assert from "assert";

import * as Concrete from "../dist/";


describe("ConcreteArray", function () {

    const arr = [1, 2, 3, 4, 5];
    const carr = Concrete.from(arr);

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

    it("should return mutable", function () {
        assert.deepEqual(carr.toMutable(), arr, "ConcreteArray not equal");
    });


    it("should prevent sneaky reassignments", function () {

        const objsArr = Concrete.from([{a: 1}, {a: 2}, {a: 3}]);

        assert.throws(() => {
            objsArr.forEach(v => v.a = 0);
        }, "Allowed forEach assignment");

        assert.throws(() => {
            for (let v of objsArr) { v.a = 0; }
        }, "Allowed for...of assignment");
    });

});
