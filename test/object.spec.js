"use strict";
require("mocha");
var assert = require("assert");
var Concrete = require("../dist/");
describe("ConcreteObject", function () {
    var obj = {
        string: "Hello",
        number: 1,
        bool: true,
        array: ["a", "b", "c"],
        objArray: [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }],
        date: new Date(),
        map: new Map([["a", 1], ["b", 2], ["c", 3]]),
        set: new Set(["a", "b", "c"]),
    };
    var cobj = Concrete.from(obj);
    it("should have same keys as original", function () {
        assert.deepEqual(Object.keys(obj), Object.keys(cobj));
    });
    it("should reject propery reassignments", function () {
        assert.throws(function () { return cobj.string = "Goodby"; }, "Allowed `cobj.string`");
        assert.throws(function () { return Object.create(cobj).string = "Goodby"; }, "Allowed `cobj.string` 2");
        assert.throws(function () { return cobj.array[0] = "d"; }, "Allowed `cobj.array[0] = \"d\"`");
        assert.throws(function () { return cobj.date.setTime(1234); }, "Allowed `cobj.date.setTime(1234)`");
        assert.throws(function () { return cobj.map.set("d", 4); }, "Allowed `cobj.map.set(\"d\", 4)`");
        assert.throws(function () { return cobj.set.add("d"); }, "Allowed `cobj.set.add(\"d\")`");
    });
    it("should generate immutable object", function () {
        var obj2 = Concrete.toMutable(cobj);
        assert.deepEqual(Object.keys(obj), Object.keys(obj2));
    });
});
