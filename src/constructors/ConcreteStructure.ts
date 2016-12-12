
const StructureCacheKey = Symbol("StructureCacheKey");

const StructureCache = new WeakMap<Object, ConcreteStructure>();


/**
 * 
 */
export enum ConcreteStructureType {
    OBJECT, ARRAY, DATE, MAP, SET, UNKNOWN,
}

/**
 * 
 */
export const ConcreteStructureTypeKey = Symbol("ConcreteStructureType");

/**
 * 
 */
export class ConcreteStructure {

    public [ConcreteStructureTypeKey](): ConcreteStructureType {
        return ConcreteStructureType.UNKNOWN;
    }
}
