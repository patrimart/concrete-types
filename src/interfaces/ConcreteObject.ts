
import { ConcreteArray, ConcreteTupleArray } from "./ConcreteArray";

import { BasicValue, LazyValue } from "./";
import { ConcreteStructure }     from "../constructors/ConcreteStructure";


/**
 * 
 */
export type ConcreteObject <T> = Readonly<T> & { readonly $: ConcreteObjectUtils<T>; } & ConcreteStructure;

/**
 * 
 */
export interface ConcreteObjectUtils <T> {
    
    /**
     * 
     */
    assign <U> (source: U): ConcreteObject<T & U>;

    /**
     *
     */
    forEach <K extends keyof T> (callbackfn: (value: LazyValue<T[K]>, key: K, index: number, obj: ConcreteObject<T>) => void, thisArg?: any): void;

    /**
     * 
     */
    flatMap <K extends keyof T> (callbackfn: (value: T[K], key: K, index: number, obj: ConcreteObject<T>) => T[K], thisArg?: any): ConcreteObject<T>;

    /**
     * 
     */
    pick <K extends keyof T, U> (...keys: K[]): ConcreteObject<U>;
    
    /**
     * 
     */
    pluck <K extends keyof T> (...keys: K[]): ConcreteArray<T[K]>;
    
    /**
     * 
     */
    zip <K extends keyof T, U extends [K, LazyValue<T[K]>]> (): ConcreteTupleArray<T, U>;

    /**
     * 
     */
    toMutable (): T;
}
