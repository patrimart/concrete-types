
import { ConcreteStructure } from "../constructors/ConcreteStructure";

/**
 * 
 */
export interface ConcreteSet <T> extends Set<T>, ConcreteStructure {

    /**
     * 
     */
    // filter ( f: (v: T, index: number) => boolean ): this;
    
    /**
     * 
     */
    // map <U> ( f: (v: T, index: number) => U): ConcreteSet <U>;
    
    /**
     * 
     */
    // reduce <U> ( f: (p: U, c: T) => U, i: U): U;

    /**
     * Adds up the Set's items, applying `parseFloat() || 0` to each.
     */
    sum (): number;

    /**
     * 
     */
    toMutable (): Set<T>;
}
