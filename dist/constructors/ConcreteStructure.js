// const StructureCacheKey = Symbol("StructureCacheKey");
// const StructureCache = new WeakMap<Object, ConcreteStructure>();
"use strict";
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
exports.ConcreteStructureTypeKey = Symbol("ConcreteStructureTypeKey");
//# sourceMappingURL=ConcreteStructure.js.map