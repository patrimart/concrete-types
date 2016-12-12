"use strict";
var guards_1 = require("../guards");
var ConcreteStructure_1 = require("./ConcreteStructure");
var errors_1 = require("../errors");
var consArray = require("./array");
var consDate = require("./date");
var consMap = require("./map");
var consSet = require("./set");
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
function from(obj) {
    obj = Object.defineProperty(obj, ConcreteStructure_1.ConcreteStructureTypeKey, {
        value: ConcreteStructure_1.ConcreteStructureType.OBJECT
    });
    // Proxify
    obj = new Proxy(obj, {
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
            throw new errors_1.ReadonlyError("Setting a property on this Concrete object is forbidden.");
        },
        deleteProperty: function (oTarget, sKey) {
            throw new errors_1.ReadonlyError("Deleting a property on this Concrete object is forbidden.");
        },
        defineProperty: function (oTarget, sKey, oDesc) {
            throw new errors_1.ReadonlyError("Defining a property on this Concrete object is forbidden.");
        },
    });
    return obj;
}
exports.from = from;
//# sourceMappingURL=object.js.map