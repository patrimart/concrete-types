"use strict";
var errors_1 = require("../errors");
var ConcreteStructure_1 = require("./ConcreteStructure");
var _1 = require("../");
var readOnlyErrorProp = {
    value: function () { throw new errors_1.ReadonlyError("This method is not supported by ConcreteSet."); },
};
/**
 *
 */
function from(set) {
    set.forEach(function (v) { return _1.from(v); });
    set = Object.defineProperties(set, {
        ConcreteStructureTypeKey: {
            value: ConcreteStructure_1.ConcreteStructureType.MAP
        },
        add: readOnlyErrorProp,
        clear: readOnlyErrorProp,
        delete: readOnlyErrorProp,
        toMutable: function () {
            var mutSet = new Set();
            set.forEach(function (v) { return mutSet.add(_1.toMutable(v)); });
            return mutSet;
        },
    });
    set = Object.freeze(set);
    // set = new Proxy(set, {
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
    return set;
}
exports.from = from;
//# sourceMappingURL=set.js.map