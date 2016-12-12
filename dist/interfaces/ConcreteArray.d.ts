import { ConcreteStructure } from "../constructors/ConcreteStructure";
/**
 *
 */
export interface ConcreteArray<T> extends Array<T>, ConcreteStructure {
    /**
     *
     */
    readonly [n: number]: T;
    /**
     *
     */
    sum(): number;
    /**
     *
     */
    toMutable(): T[];
}
