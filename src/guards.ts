
import * as i from "./interfaces";
import {
    ConcreteStructure,
    ConcreteStructureType,
    ConcreteStructureTypeKey
} from "./constructors/ConcreteStructure";

/**
 * 
 */
export function is (obj: any | undefined): obj is ConcreteStructure {
    return obj !== undefined && obj[ConcreteStructureTypeKey] !== undefined;
}

export function isArray <T> (obj: T[]): obj is i.ConcreteArray<T> {
    return is(obj) && (obj as any)[ConcreteStructureTypeKey] === ConcreteStructureType.ARRAY;
}

export function isDate (obj: Date): obj is i.ConcreteDate {
    return is(obj) && (obj as any)[ConcreteStructureTypeKey] === ConcreteStructureType.DATE;
}

export function isMap <K, V> (obj: Map<K, V>): obj is i.ConcreteMap<K, V> {
    return is(obj) && (obj as any)[ConcreteStructureTypeKey] === ConcreteStructureType.MAP;
}

export function isObject <T> (obj: any | undefined): obj is i.ConcreteObject<T> {
    return is(obj) && (obj as any)[ConcreteStructureTypeKey] === ConcreteStructureType.OBJECT;
}

export function isSet <T> (obj: Set<T>): obj is i.ConcreteSet<T> {
    return is(obj) && (obj as any)[ConcreteStructureTypeKey] === ConcreteStructureType.SET;
}
