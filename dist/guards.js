"use strict";
var ConcreteStructure_1 = require("./constructors/ConcreteStructure");
/**
 *
 */
function is(obj) {
    return obj[ConcreteStructure_1.ConcreteStructureTypeKey] !== undefined;
}
exports.is = is;
function isArray(obj) {
    return is(obj) && obj[ConcreteStructure_1.ConcreteStructureTypeKey] === ConcreteStructure_1.ConcreteStructureType.ARRAY;
}
exports.isArray = isArray;
function isDate(obj) {
    return is(obj) && obj[ConcreteStructure_1.ConcreteStructureTypeKey] === ConcreteStructure_1.ConcreteStructureType.DATE;
}
exports.isDate = isDate;
function isMap(obj) {
    return is(obj) && obj[ConcreteStructure_1.ConcreteStructureTypeKey] === ConcreteStructure_1.ConcreteStructureType.MAP;
}
exports.isMap = isMap;
function isObject(obj) {
    return is(obj) && obj[ConcreteStructure_1.ConcreteStructureTypeKey] === ConcreteStructure_1.ConcreteStructureType.OBJECT;
}
exports.isObject = isObject;
function isSet(obj) {
    return is(obj) && obj[ConcreteStructure_1.ConcreteStructureTypeKey] === ConcreteStructure_1.ConcreteStructureType.SET;
}
exports.isSet = isSet;
//# sourceMappingURL=guards.js.map