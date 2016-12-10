import { ConcreteStructure } from "../constructors/ConcreteStructure";
/**
 *
 */
export interface ConcreteSet<T> extends Set<T>, ConcreteStructure {
    /**
     *
     */
    filter(f: (v: () => T, index: number) => boolean): this;
    /**
     *
     */
    map(f: (v: () => T, index: number) => T): this;
    /**
     *
     */
    map<U>(f: (v: () => T, index: number) => U): ConcreteSet<U>;
    /**
     *
     */
    reduce<U>(f: (p: U, c: T) => U, i: U): ConcreteSet<U>;
    /**
     *
     */
    toMutable(): Set<T>;
}
