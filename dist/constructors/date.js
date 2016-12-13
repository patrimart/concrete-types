"use strict";
var errors_1 = require("../errors");
var ConcreteStructure_1 = require("./ConcreteStructure");
var readOnlyErrorProp = {
    value: function () { throw new errors_1.ReadonlyError("This method is not supported by ConcreteDate."); },
};
/**
 *
 */
function from(date) {
    date = Object.defineProperties(date, {
        ConcreteStructureTypeKey: {
            value: ConcreteStructure_1.ConcreteStructureType.DATE
        },
        setTime: readOnlyErrorProp,
        setUTCMilliseconds: readOnlyErrorProp,
        setSeconds: readOnlyErrorProp,
        setUTCSeconds: readOnlyErrorProp,
        setMinutes: readOnlyErrorProp,
        setUTCMinutes: readOnlyErrorProp,
        setHours: readOnlyErrorProp,
        setUTCHours: readOnlyErrorProp,
        setDate: readOnlyErrorProp,
        setUTCDate: readOnlyErrorProp,
        setMonth: readOnlyErrorProp,
        setUTCMonth: readOnlyErrorProp,
        setFullYear: readOnlyErrorProp,
        setUTCFullYear: readOnlyErrorProp,
        toMutable: function () {
            return new Date(date.getTime());
        },
    });
    date = Object.freeze(date);
    // date = new Proxy(date, {
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
    return date;
}
exports.from = from;
//# sourceMappingURL=date.js.map