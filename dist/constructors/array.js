"use strict";
var ConcreteStructure_1 = require("./ConcreteStructure");
var errors_1 = require("../errors");
var _1 = require("../");
var readOnlyErrorProp = {
    value: function () { throw new errors_1.ReadonlyError("This method is not supported by Concrete arrays."); },
};
function from(arr, forceDeep) {
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
    if (Proxy) {
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