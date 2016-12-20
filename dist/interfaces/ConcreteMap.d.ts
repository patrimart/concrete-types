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
     *
     */
    /**
     * Throws a ReadonlyError.
     * @throws ReadonlyError
     */
    set(key: K, value: V): this;
    /**
     *
     */
    toMutable(): Map<K, V>;
}
