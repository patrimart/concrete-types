
import { BasicValue, LazyValue } from "./";
import { ConcreteStructure }     from "../constructors/ConcreteStructure";


/**
 * 
 */
export interface ConcreteMap <K, V> extends Map<K, V>, ConcreteStructure {

    /**
     * Throws a ReadonlyError.
     * @throws ReadonlyError
     */
    clear (): void;
    
    /**
     * Throws a ReadonlyError.
     * @throws ReadonlyError
     */
    delete (key: K): boolean;

    /**
     * This method is inefficient for non-primitives, forcing an eval of the lazy value. Use the other forEach method.
     */
    // forEach (callbackfn: (value: LazyValue<V>, key: K, map: this) => void, thisArg?: any): void;

    /**
     * This forEach method returns the lazy value.
     */
    forEach (callbackfn: (value: V, key: K, map: this) => void, thisArg?: any): void;

    /**
     * Throws a ReadonlyError.
     * @throws ReadonlyError
     */
    set (key: K, value: V): this;

    /**
     * 
     */
    // filter ( callbackfn: (key: K, value: LazyValue<V>) => boolean ): this;
    // filter ( callbackfn: (key: K, value: BasicValue) => boolean ): this;
    
    /**
     * Simply return the key to keep the value, avoiding eval of lazy value.
     */
    // map <L, U> ( callbackfn: (key: K, value: LazyValue<V>) => [L, U] | L): ConcreteMap <L, U>;
    // map <L, U> ( callbackfn: (key: K, value: BasicValue) => [L, U] | L): ConcreteMap <L, U>;
    
    /**
     * 
     */
    // pick (...keys: K[]): this;
    
    /**
     * 
     */
    // reduce <L, U> ( callbackfn: (prev: [L, U], cur: [K, LazyValue<V>]) => [L, U], initValue: [L, U]): [L, U];
    // reduce <L, U> ( callbackfn: (prev: [L, U], cur: [K, BasicValue]) => [L, U], initValue: [L, U]): [L, U];

    /**
     * 
     */
    toMutable (): Map<K, V>;
}
