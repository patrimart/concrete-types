"use strict";
var guards_1 = require("../guards");
var ConcreteStructure_1 = require("./ConcreteStructure");
var errors_1 = require("../errors");
var consArray = require("./object");
var consDate = require("./date");
var consMap = require("./map");
var consSet = require("./set");
var _1 = require("../");
var readOnlyErrorProp = {
    value: function () { throw new errors_1.ReadonlyError("This method is not supported by Concrete arrays."); },
};
function from(arr) {
    var sumCache;
    arr = Object.defineProperties(arr, {
        ConcreteStructureTypeKey: {
            value: ConcreteStructure_1.ConcreteStructureType.ARRAY,
        },
        length: { value: arr.length },
        copyWithin: readOnlyErrorProp,
        fill: readOnlyErrorProp,
        pop: readOnlyErrorProp,
        push: readOnlyErrorProp,
        reverse: readOnlyErrorProp,
        shift: readOnlyErrorProp,
        sort: readOnlyErrorProp,
        splice: readOnlyErrorProp,
        unshift: readOnlyErrorProp,
        sum: {
            value: function () {
                if (sumCache === undefined) {
                    sumCache = arr.reduce(function (p, c) { return p + (parseFloat(String(c)) || 0); }, 0);
                }
                return sumCache;
            },
        },
        toMutable: function () {
            return arr.map(function (v) { return _1.toMutable(v); });
        },
    });
    // Proxify
    arr = new Proxy(arr, {
        get: function (oTarget, sKey) {
            var value = oTarget[sKey];
            var typeOf = typeof value;
            if (value === undefined || value === null || typeOf === "function" || typeOf === "symbol") {
                return value;
            }
            // If already Concrete, return.
            if (guards_1.is(value)) {
                return value;
            }
            // If not Concrete and supported object, make Concrete.
            if (value instanceof Map) {
                return consMap.from(value);
            }
            else if (value instanceof Set) {
                return consSet.from(value);
            }
            else if (value instanceof Date) {
                return consDate.from(value);
            }
            else if (typeOf === "object") {
                if (Array.isArray(value)) {
                    return consArray.from(value);
                }
                else if (value.constructor === Object) {
                    return from(value);
                }
            }
            // Else, return raw unsupported object.
            return value;
        },
        set: function (oTarget, sKey, vValue) {
            throw new errors_1.ReadonlyError("Setting an index or property on this Concrete object is forbidden.");
        },
        deleteProperty: function (oTarget, sKey) {
            throw new errors_1.ReadonlyError("Deleting an index on this Concrete array is forbidden.");
        },
        defineProperty: function (oTarget, sKey, oDesc) {
            throw new errors_1.ReadonlyError("Defining a property on this Concrete array is forbidden.");
        },
    });
    // Add Array to cache.
    return arr;
}
exports.from = from;
//# sourceMappingURL=array.js.map