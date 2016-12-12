"use strict";
require("mocha");
require("proxy-polyfill");
var assert = require("assert");
var Concrete = require("../dist/");
describe("ConcreteArray", function () {
    var arr = [1, 2, 3, 4, 5];
    var carr = Concrete.from(arr);
    it("should output console.log()", function () {
        console.log(carr);
        console.log(Object.keys(carr));
        carr.forEach(function (v) { return console.log("forEach", v); });
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
});
