"use strict";
var ConcreteStructure_1 = require("./ConcreteStructure");
var errors_1 = require("../errors");
var _1 = require("../");
/**
 *
 */
function toMutable(obj) {
    var mutObj = {};
    for (var key in obj) {
        mutObj[key] = _1.toMutable(obj[key]);
    }
    return mutObj;
}
exports.toMutable = toMutable;
/**
 *
 */
function from(obj, forceDeep) {
    obj = Object.defineProperty(obj, ConcreteStructure_1.ConcreteStructureTypeKey, {
        value: ConcreteStructure_1.ConcreteStructureType.OBJECT
    });
    // Proxify or Freeze
    if (Proxy) {
        if (forceDeep) {
            for (var v in obj) {
                _1.from(obj[v], true);
            }
        }
        obj = new Proxy(obj, proxyHandler(forceDeep));
    }
    else {
        for (var v in obj) {
            _1.from(obj[v], true);
        }
        obj = Object.freeze(obj);
    }
    return obj;
}
exports.from = from;
function proxyHandler(forceDeep) {
    return {
        get: forceDeep ? function (oTarget, sKey) {
            var value = oTarget[sKey];
            var typeOf = typeof value;
            if (forceDeep || value === undefined || value === null || typeOf === "function" || typeOf === "symbol") {
                return value;
            }
            return _1.from(value);
        } : undefined,
        set: function (oTarget, sKey, vValue) {
            throw new errors_1.ReadonlyError("Setting an index or property on ConcreteObject is forbidden.");
        },
        deleteProperty: function (oTarget, sKey) {
            throw new errors_1.ReadonlyError("Deleting an index on ConcreteObject is forbidden.");
        },
        defineProperty: function (oTarget, sKey, oDesc) {
            throw new errors_1.ReadonlyError("Defining a property on ConcreteObject is forbidden.");
        },
    };
}
//# sourceMappingURL=object.js.map