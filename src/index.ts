
import { ConcreteStructure } from "./constructors/ConcreteStructure";
import * as i      from "./interfaces";
import * as guards from "./guards";

import * as consArray from "./constructors/array";
import * as consDate  from "./constructors/date";
import * as consMap   from "./constructors/map";
import * as consObj   from "./constructors/object";
import * as consSet   from "./constructors/set";

export * from "./interfaces";
export * from "./guards";

export function from <T> (arr: T[]): i.ConcreteArray<T>;
export function from (date: Date): i.ConcreteDate;
export function from <K, V> (map: Map<K, V>): i.ConcreteMap<K, V>;
export function from <T> (set: Set<T>): i.ConcreteSet<T>;
export function from <T> (obj: T): i.ConcreteObject<T>;
export function from (obj: any): any {

    if (obj instanceof Map) {
        return consMap.from(obj);
    } else if (obj instanceof Set) {
        return consSet.from(obj);
    } else if (obj instanceof Date) {
        return consDate.from(obj);
    } else if (typeof obj === "object") {
        if (Array.isArray(obj)) {
            return consArray.from(obj);
        }
        return consObj.from(obj);
    }

    throw new TypeError(`The given object type is not supported: ${obj}`);
}


export function toMutable <T> (obj: i.ConcreteArray<T>): T[];
export function toMutable (obj: i.ConcreteDate): Date;
export function toMutable <K, V> (obj: i.ConcreteMap<K, V>): Map<K, V>;
export function toMutable <T> (obj: i.ConcreteObject<T>): T;
export function toMutable <T> (obj: i.ConcreteSet<T>): Set<T>;
export function toMutable (obj: any): any {

    if (guards.isArray(obj)) {
        return obj.toMutable();
    } else if (guards.isDate(obj)) {
        return obj.toMutable();
    } else if (guards.isMap(obj)) {
        return obj.toMutable();
    } else if (guards.isObject(obj)) {
        return consObj.toMutable(obj);
    } else if (guards.isSet(obj)) {
        return obj.toMutable();
    }

    throw new TypeError(`The given object type is not supported: ${obj}`);
}