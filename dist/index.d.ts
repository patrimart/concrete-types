import * as i from "./interfaces";
export * from "./interfaces";
export * from "./guards";
export declare function from<T>(arr: T[], forceDeep?: boolean): i.ConcreteArray<T>;
export declare function from(date: Date): i.ConcreteDate;
export declare function from<K, V>(map: Map<K, V>): i.ConcreteMap<K, V>;
export declare function from<T>(set: Set<T>): i.ConcreteSet<T>;
export declare function from<T extends {
    [k: string]: any;
}>(obj: T, forceDeep?: boolean): i.ConcreteObject<T>;
export declare function toMutable<T>(obj: i.ConcreteArray<T>): T[];
export declare function toMutable(obj: i.ConcreteDate): Date;
export declare function toMutable<K, V>(obj: i.ConcreteMap<K, V>): Map<K, V>;
export declare function toMutable<T>(obj: i.ConcreteObject<T>): T;
export declare function toMutable<T>(obj: i.ConcreteSet<T>): Set<T>;
