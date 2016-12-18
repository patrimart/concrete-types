
import { LazyValue }         from "./";
import { ConcreteObject }    from "./ConcreteObject";
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
    sum (): number;

    /**
     * 
     */
    toMutable (): T[];
}

/**
 * 
 */
// export interface ConcreteTupleArray<U, K extends keyof U, T extends [K, LazyValue<U[K]>]> extends ConcreteArray<T> {
export interface ConcreteTupleArray<U, T extends [string, LazyValue<any>]> extends ConcreteArray<T> {

    /**
     * 
     */
    unzip (): ConcreteObject<U>;
}
