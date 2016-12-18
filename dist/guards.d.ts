import * as i from "./interfaces";
import { ConcreteStructure } from "./constructors/ConcreteStructure";
/**
 *
 */
export declare function is(obj: ConcreteStructure | any): obj is ConcreteStructure;
export declare function isArray<T>(obj: i.ConcreteArray<T> | T[]): obj is i.ConcreteArray<T>;
export declare function isDate(obj: i.ConcreteDate | Date): obj is i.ConcreteDate;
export declare function isMap<K, V>(obj: Map<K, V>): obj is i.ConcreteMap<K, V>;
export declare function isObject<T>(obj: T | any): obj is i.ConcreteObject<T>;
export declare function isSet<T>(obj: i.ConcreteSet<T> | Set<T>): obj is i.ConcreteSet<T>;
