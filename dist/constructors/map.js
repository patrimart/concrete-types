"use strict";
var errors_1 = require("../errors");
var guards_1 = require("../guards");
var ConcreteStructure_1 = require("./ConcreteStructure");
var _1 = require("../");
var readOnlyErrorProp = {
    value: function () { throw new errors_1.ReadonlyError("This method is not supported by ConcreteMap."); },
};
/**
 *
 */
function from(map) {
    if (guards_1.isMap(map)) {
        return map;
    }
    map.forEach(function (v, k) { return _1.from(v); }); // map.set(k, fromAll(v)));
    map = Object.defineProperties(map, (_a = {},
        _a[ConcreteStructure_1.ConcreteStructureTypeKey] = {
            value: ConcreteStructure_1.ConcreteStructureType.MAP
        },
        _a.clear = readOnlyErrorProp,
        _a.delete = readOnlyErrorProp,
        _a.set = readOnlyErrorProp,
        _a.toMutable = function () {
            var mutMap = new Map();
            map.forEach(function (v, k) { return mutMap.set(k, _1.toMutable(v)); });
            return mutMap;
        },
        _a));
    return Object.freeze(map);
    var _a;
}
exports.from = from;
//# sourceMappingURL=map.js.map