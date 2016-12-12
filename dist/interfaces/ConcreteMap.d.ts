import { ConcreteStructure } from "../constructors/ConcreteStructure";
/**
 *
 */
export interface ConcreteMap<K, V> extends Map<K, V>, ConcreteStructure {
    /**
     * Throws a ReadonlyError.
     * @throws ReadonlyError
     */
    clear(): void;
    /**
     * Throws a ReadonlyError.
     * @throws ReadonlyError
     */
    delete(key: K): boolean;
    /**
     * This method is inefficient for non-primitives, forcing an eval of the lazy value. Use the other forEach method.
     */
    /**
     * This forEach method returns the lazy value.
     */
    forEach(callbackfn: (value: V, key: K, map: this) => void, thisArg?: any): void;
    /**
     * Throws a ReadonlyError.
     * @throws ReadonlyError
     */
    set(key: K, value: V): this;
    /**
     *
     */
    /**
     * Simply return the key to keep the value, avoiding eval of lazy value.
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    toMutable(): Map<K, V>;
}
