import * as i from "./interfaces/";
import { ConcreteStructure } from "./structures/ConcreteStructure";
/**
 *
 */
export declare namespace Guards {
    function is<T>(obj: any): obj is ConcreteStructure;
    function isArray<T>(obj: T[]): obj is i.IConcreteArray<T>;
    function isDate(obj: Date): obj is i.IConcreteDate;
    function isMap<K, V>(obj: Map<K, V>): obj is i.IConcreteMap<K, V>;
    function isObject<T>(obj: any): obj is i.IConcreteObject<T>;
    function isSet<T>(obj: Set<T>): obj is i.IConcreteSet<T>;
}
