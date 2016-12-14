
// const StructureCacheKey = Symbol("StructureCacheKey");
// const StructureCache = new WeakMap<Object, ConcreteStructure>();

/**
 * 
 */
export enum ConcreteStructureType {
    OBJECT, ARRAY, DATE, MAP, SET, UNKNOWN,
}

/**
 * 
 */
export const ConcreteStructureTypeKey = Symbol("ConcreteStructureTypeKey");

/**
 * 
 */
export interface ConcreteStructure {}
