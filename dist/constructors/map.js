"use strict";
var errors_1 = require("../errors");
var ConcreteStructure_1 = require("./ConcreteStructure");
var _1 = require("../");
var readOnlyErrorProp = {
    value: function () { throw new errors_1.ReadonlyError("This method is not supported by ConcreteMap."); },
};
/**
 *
 */
function from(map) {
    map.forEach(function (v, k) { return _1.from(v); }); // map.set(k, fromAll(v)));
    map = Object.defineProperties(map, {
        ConcreteStructureTypeKey: {
            value: ConcreteStructure_1.ConcreteStructureType.MAP
        },
        clear: readOnlyErrorProp,
        delete: readOnlyErrorProp,
        set: readOnlyErrorProp,
        toMutable: function () {
            var mutMap = new Map();
            map.forEach(function (v, k) { return mutMap.set(k, _1.toMutable(v)); });
            return mutMap;
        },
    });
    map = Object.freeze(map);
    // map = new Proxy(map, {
    //     set: function (oTarget, sKey, vValue) {
    //         throw new ReadonlyError("Setting a property on a ConcreteDate is forbidden.");
    //     },
    //     deleteProperty: function (oTarget, sKey) {
    //         throw new ReadonlyError("Deleting a property on a ConcreteDate is forbidden.");
    //     },
    //     defineProperty: function (oTarget, sKey, oDesc) {
    //         throw new ReadonlyError("Defining a property on a ConcreteDate is forbidden.");
    //     },
    // });
    return map;
}
exports.from = from;
//# sourceMappingURL=map.js.map