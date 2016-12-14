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
        map: new Map(),
        set: new Set(["a", "b", "c"]),
    };
    var cobj = Concrete.from(obj);
    it("should output with console.log()", function () {
        console.log(cobj);
        // console.log(Object.keys(cobj));
        for (var key in cobj) {
            console.log("ConcreteObject key=" + key + " value=" + cobj[key]);
        }
    });
    it("should equal JS Object", function () {
        assert.deepEqual(cobj, obj, "ConcreteObject not equal");
    });
});
