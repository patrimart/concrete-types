import { ConcreteStructure } from "../structures/ConcreteStructure";
/**
 *
 */
export interface IConcreteArray<T> extends Array<T>, ConcreteStructure {
    /**
     *
     */
    readonly [n: number]: T;
}
