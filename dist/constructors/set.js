"use strict";
var errors_1 = require("../errors");
var guards_1 = require("../guards");
var ConcreteStructure_1 = require("./ConcreteStructure");
var _1 = require("../");
var readOnlyErrorProp = {
    value: function () { throw new errors_1.ReadonlyError("This method is not supported by ConcreteSet."); },
};
/**
 *
 */
function from(set) {
    if (guards_1.isSet(set)) {
        return set;
    }
    set.forEach(function (v) { return _1.from(v); });
    var sumCache;
    set = Object.defineProperties(set, (_a = {},
        _a[ConcreteStructure_1.ConcreteStructureTypeKey] = {
            value: ConcreteStructure_1.ConcreteStructureType.MAP
        },
        _a.add = readOnlyErrorProp,
        _a.clear = readOnlyErrorProp,
        _a.delete = readOnlyErrorProp,
        _a.sum = {
            value: function () {
                if (sumCache === undefined) {
                    sumCache = 0;
                    set.forEach(function (v) { return sumCache += parseFloat(String(v)) || 0; });
                }
                return sumCache;
            },
        },
        _a.toMutable = {
            value: function () {
                var mutSet = new Set();
                set.forEach(function (v) { return mutSet.add(_1.toMutable(v)); });
                return mutSet;
            },
        },
        _a));
    return Object.freeze(set);
    var _a;
}
exports.from = from;
//# sourceMappingURL=set.js.map