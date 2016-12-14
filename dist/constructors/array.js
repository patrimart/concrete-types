"use strict";
var ConcreteStructure_1 = require("./ConcreteStructure");
var errors_1 = require("../errors");
var guards_1 = require("../guards");
var _1 = require("../");
var readOnlyErrorProp = {
    value: function () { throw new errors_1.ReadonlyError("This method is not supported by Concrete arrays."); },
};
function from(arr, forceDeep) {
    if (guards_1.isArray(arr)) {
        return arr;
    }
    var sumCache;
    arr = Object.defineProperties(arr, (_a = {},
        _a[ConcreteStructure_1.ConcreteStructureTypeKey] = {
            value: ConcreteStructure_1.ConcreteStructureType.ARRAY,
        },
        _a.length = { value: arr.length },
        _a.copyWithin = readOnlyErrorProp,
        _a.fill = readOnlyErrorProp,
        _a.pop = readOnlyErrorProp,
        _a.push = readOnlyErrorProp,
        _a.reverse = readOnlyErrorProp,
        _a.shift = readOnlyErrorProp,
        _a.sort = readOnlyErrorProp,
        _a.splice = readOnlyErrorProp,
        _a.unshift = readOnlyErrorProp,
        _a.sum = {
            value: function () {
                if (sumCache === undefined) {
                    sumCache = arr.reduce(function (p, c) { return p + (parseFloat(String(c)) || 0); }, 0);
                }
                return sumCache;
            },
        },
        _a.toMutable = function () {
            return arr.map(function (v) { return _1.toMutable(v); });
        },
        _a));
    // Proxify
    if (typeof Proxy !== "undefined") {
        if (forceDeep) {
            arr.forEach(function (v) { return _1.from(v, true); });
        }
        arr = new Proxy(arr, proxyHandler(forceDeep));
    }
    else {
        arr.forEach(function (v) { return _1.from(v, true); });
        arr = Object.freeze(arr);
    }
    // Add Array to cache.
    return arr;
    var _a;
}
exports.from = from;
function proxyHandler(forceDeep) {
    return {
        get: forceDeep ? undefined : function (oTarget, sKey) {
            var value = oTarget[sKey];
            var typeOf = typeof value;
            if (forceDeep || value === undefined || value === null || typeOf === "function" || typeOf === "symbol") {
                return value;
            }
            return _1.from(value);
        },
        set: function (oTarget, sKey, vValue) {
            throw new errors_1.ReadonlyError("Setting an index or property on ConcreteArray is forbidden.");
        },
        deleteProperty: function (oTarget, sKey) {
            throw new errors_1.ReadonlyError("Deleting an index on ConcreteArray is forbidden.");
        },
        defineProperty: function (oTarget, sKey, oDesc) {
            throw new errors_1.ReadonlyError("Defining a property on ConcreteArray is forbidden.");
        },
    };
}
//# sourceMappingURL=array.js.map