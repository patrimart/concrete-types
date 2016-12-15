
import * as i from "./interfaces";
import {
    ConcreteStructure,
    ConcreteStructureType,
    ConcreteStructureTypeKey
} from "./constructors/ConcreteStructure";

/**
 * 
 */
export function is (obj: any): obj is ConcreteStructure {
    return obj !== undefined && (obj as any)[ConcreteStructureTypeKey] !== undefined;
}

export function isArray <T> (obj: i.ConcreteArray<T> | T[]): obj is i.ConcreteArray<T> {
    return is(obj) && (obj as any)[ConcreteStructureTypeKey] === ConcreteStructureType.ARRAY;
}

export function isDate (obj: i.ConcreteDate | Date): obj is i.ConcreteDate {
    return is(obj) && (obj as any)[ConcreteStructureTypeKey] === ConcreteStructureType.DATE;
}

export function isMap <K, V> (obj: Map<K, V>): obj is i.ConcreteMap<K, V> {
    return is(obj) && (obj as any)[ConcreteStructureTypeKey] === ConcreteStructureType.MAP;
}

export function isObject <T> (obj: i.ConcreteObject<T> | T): obj is i.ConcreteObject<T> {
    return is(obj) && (obj as any)[ConcreteStructureTypeKey] === ConcreteStructureType.OBJECT;
}

export function isSet <T> (obj: i.ConcreteSet<T> | Set<T>): obj is i.ConcreteSet<T> {
    return is(obj) && (obj as any)[ConcreteStructureTypeKey] === ConcreteStructureType.SET;
}
