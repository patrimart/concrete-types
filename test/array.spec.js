"use strict";
require("mocha");
var assert = require("assert");
var Concrete = require("../dist/");
describe("ConcreteArray", function () {
    var arr = [1, 2, 3, 4, 5];
    var carr = Concrete.from(arr);
    it("should equal regular Array", function () {
        assert.deepEqual(carr, arr, "ConcreteArray not equal");
    });
    it("should allow supported methods", function () {
        assert.equal(carr.length, 5, "length !== 5");
        assert.equal(carr.sum(), 15, "sum() !== 15");
    });
    it("should throw ReadonlyErrors", function () {
        // assert.throws(() => carr[0] = 2);
        assert.throws(function () { return carr.copyWithin(0, 0); });
        assert.throws(function () { return carr.fill(0); });
        assert.throws(function () { return carr.pop(); });
        assert.throws(function () { return carr.push(); });
        assert.throws(function () { return carr.reverse(); });
        assert.throws(function () { return carr.shift(); });
        assert.throws(function () { return carr.sort(); });
        assert.throws(function () { return carr.splice(0); });
        assert.throws(function () { return carr.unshift(); });
    });
    it("should return mutable", function () {
        assert.deepEqual(carr.toMutable(), arr, "ConcreteArray not equal");
    });
    it("should prevent sneaky reassignments", function () {
        var objsArr = Concrete.from([{ a: 1 }, { a: 2 }, { a: 3 }]);
        assert.throws(function () {
            objsArr.forEach(function (v) { return v.a = 0; });
        }, "Allowed forEach assignment");
        assert.throws(function () {
            for (var _i = 0, objsArr_1 = objsArr; _i < objsArr_1.length; _i++) {
                var v = objsArr_1[_i];
                v.a = 0;
            }
        }, "Allowed for...of assignment");
    });
});
