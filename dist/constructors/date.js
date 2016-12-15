"use strict";
var errors_1 = require("../errors");
var ConcreteStructure_1 = require("./ConcreteStructure");
var guards_1 = require("../guards");
var readOnlyErrorProp = {
    value: function () { throw new errors_1.ReadonlyError("This method is not supported by ConcreteDate."); },
};
/**
 *
 */
function from(date) {
    if (guards_1.isDate(date)) {
        return date;
    }
    date = Object.defineProperties(date, (_a = {},
        _a[ConcreteStructure_1.ConcreteStructureTypeKey] = {
            value: ConcreteStructure_1.ConcreteStructureType.DATE
        },
        _a.setTime = readOnlyErrorProp,
        _a.setUTCMilliseconds = readOnlyErrorProp,
        _a.setSeconds = readOnlyErrorProp,
        _a.setUTCSeconds = readOnlyErrorProp,
        _a.setMinutes = readOnlyErrorProp,
        _a.setUTCMinutes = readOnlyErrorProp,
        _a.setHours = readOnlyErrorProp,
        _a.setUTCHours = readOnlyErrorProp,
        _a.setDate = readOnlyErrorProp,
        _a.setUTCDate = readOnlyErrorProp,
        _a.setMonth = readOnlyErrorProp,
        _a.setUTCMonth = readOnlyErrorProp,
        _a.setFullYear = readOnlyErrorProp,
        _a.setUTCFullYear = readOnlyErrorProp,
        _a.toMutable = {
            enumerable: true,
            value: function () {
                return new Date(date.getTime());
            },
        },
        _a));
    return Object.freeze(date);
    var _a;
}
exports.from = from;
//# sourceMappingURL=date.js.map