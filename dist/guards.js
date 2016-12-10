"use strict";
var ConcreteStructure_1 = require("./structures/ConcreteStructure");
/**
 *
 */
var Guards;
(function (Guards) {
    function is(obj) {
        return obj[ConcreteStructure_1.ConcreteStructureTypeKey] !== undefined;
    }
    Guards.is = is;
    function isArray(obj) {
        return is(obj) && obj[ConcreteStructure_1.ConcreteStructureTypeKey] === ConcreteStructure_1.ConcreteStructureType.ARRAY;
    }
    Guards.isArray = isArray;
    function isDate(obj) {
        return is(obj) && obj[ConcreteStructure_1.ConcreteStructureTypeKey] === ConcreteStructure_1.ConcreteStructureType.DATE;
    }
    Guards.isDate = isDate;
    function isMap(obj) {
        return is(obj) && obj[ConcreteStructure_1.ConcreteStructureTypeKey] === ConcreteStructure_1.ConcreteStructureType.MAP;
    }
    Guards.isMap = isMap;
    function isObject(obj) {
        return is(obj) && obj[ConcreteStructure_1.ConcreteStructureTypeKey] === ConcreteStructure_1.ConcreteStructureType.OBJECT;
    }
    Guards.isObject = isObject;
    function isSet(obj) {
        return is(obj) && obj[ConcreteStructure_1.ConcreteStructureTypeKey] === ConcreteStructure_1.ConcreteStructureType.SET;
    }
    Guards.isSet = isSet;
})(Guards = exports.Guards || (exports.Guards = {}));
//# sourceMappingURL=guards.js.map