
import { ConcreteStructure } from "../constructors/ConcreteStructure";

/**
 * 
 */
export interface ConcreteSet <T> extends Set<T>, ConcreteStructure {

    /**
     * Adds up the Set's items, applying `parseFloat() || 0` to each.
     */
    sum (): number;

    /**
     * 
     */
    toMutable (): Set<T>;
}
