import { ConcreteStructure } from "../structures/ConcreteStructure";
/**
 *
 */
export interface IConcreteMap<K, V> extends Map<K, V>, ConcreteStructure {
    /**
     *
     */
    filter(f: (k: K, v: () => V) => boolean): this;
    /**
     *
     */
    map(f: (k: K, v: () => V) => [K, V] | K): this;
    /**
     *
     */
    map<U>(f: (k: K, v: () => V) => [K, U]): IConcreteMap<K, U>;
    /**
     *
     */
    pick(...keys: K[]): this;
    /**
     *
     */
    reduce<L, U>(f: (p: [L, U], c: [K, V]) => [L, U], i: [L, U]): IConcreteMap<L, U>;
}
