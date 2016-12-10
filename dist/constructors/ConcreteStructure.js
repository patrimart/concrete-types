"use strict";
var StructureCacheKey = Symbol("StructureCacheKey");
var StructureCache = new WeakMap();
/**
 *
 */
var ConcreteStructureType;
(function (ConcreteStructureType) {
    ConcreteStructureType[ConcreteStructureType["OBJECT"] = 0] = "OBJECT";
    ConcreteStructureType[ConcreteStructureType["ARRAY"] = 1] = "ARRAY";
    ConcreteStructureType[ConcreteStructureType["DATE"] = 2] = "DATE";
    ConcreteStructureType[ConcreteStructureType["MAP"] = 3] = "MAP";
    ConcreteStructureType[ConcreteStructureType["SET"] = 4] = "SET";
    ConcreteStructureType[ConcreteStructureType["UNKNOWN"] = 5] = "UNKNOWN";
})(ConcreteStructureType = exports.ConcreteStructureType || (exports.ConcreteStructureType = {}));
/**
 *
 */
exports.ConcreteStructureTypeKey = Symbol("ConcreteStructureType");
/**
 *
 */
var ConcreteStructure = (function () {
    function ConcreteStructure() {
    }
    ConcreteStructure.prototype[exports.ConcreteStructureTypeKey] = function () {
        return ConcreteStructureType.UNKNOWN;
    };
    return ConcreteStructure;
}());
exports.ConcreteStructure = ConcreteStructure;
//# sourceMappingURL=ConcreteStructure.js.map