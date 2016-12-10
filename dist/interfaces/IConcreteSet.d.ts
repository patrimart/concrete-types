import { ConcreteStructure } from "../structures/ConcreteStructure";
/**
 *
 */
export interface IConcreteSet<T> extends Set<T>, ConcreteStructure {
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
    map<U>(f: (v: () => T, index: number) => U): IConcreteSet<U>;
    /**
     *
     */
    reduce<U>(f: (p: U, c: T) => U, i: U): IConcreteSet<U>;
}
