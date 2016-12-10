"use strict";
var guards_1 = require("./guards");
var Concrete;
(function (Concrete) {
    Concrete.guard = guards_1.Guards;
    function from(obj) {
        if (obj instanceof Map) {
            return obj;
        }
        else if (obj instanceof Set) {
            return obj;
        }
        else if (obj instanceof Date) {
            return obj;
        }
        else if (typeof obj === "object") {
            if (Array.isArray(obj)) {
                return obj;
            }
            return obj;
        }
        throw new TypeError("This given object type is not supported.");
    }
    Concrete.from = from;
    function toMutable(obj) {
        if (guards_1.Guards.isArray(obj)) {
            return obj;
        }
        else if (guards_1.Guards.isDate(obj)) {
            return obj;
        }
        else if (guards_1.Guards.isMap(obj)) {
            return obj;
        }
        else if (guards_1.Guards.isObject(obj)) {
            return obj;
        }
        else if (guards_1.Guards.isSet(obj)) {
            return obj;
        }
        throw new TypeError("This given object type is not supported.");
    }
    Concrete.toMutable = toMutable;
})(Concrete = exports.Concrete || (exports.Concrete = {}));
//# sourceMappingURL=index.js.map